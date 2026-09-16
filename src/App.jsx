import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { MESOS, EXTRES } from './program';
import './App.css';

const PERFILS_DEFECTE = ['Joan', 'Vero'];
const K_PERFILS = 'cal_perfils';
const K_ACTIU = 'cal_actiu';
const K_PROGRES = 'cal_progres';

function avui() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function carrega(clau, perDefecte) {
  try {
    const raw = localStorage.getItem(clau);
    return raw ? JSON.parse(raw) : perDefecte;
  } catch {
    return perDefecte;
  }
}

function beep(freq = 440, duration = 200, type = 'sine') {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration / 1000);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration / 1000);
    setTimeout(() => ctx.close && ctx.close(), duration + 200);
  } catch {
    /* sense àudio */
  }
}

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

export default function App() {
  const [perfils, setPerfils] = useState(() => carrega(K_PERFILS, PERFILS_DEFECTE));
  const [perfil, setPerfil] = useState(() => carrega(K_ACTIU, null));
  const [progres, setProgres] = useState(() => carrega(K_PROGRES, {}));
  const [mesIdx, setMesIdx] = useState(0);
  const [diaIdx, setDiaIdx] = useState(0);
  const [rest, setRest] = useState(null); // { left, total }
  const [mostraExtres, setMostraExtres] = useState(false);
  const [veureHistorial, setVeureHistorial] = useState(false);
  const [editantPerfils, setEditantPerfils] = useState(false);
  const [nouPerfil, setNouPerfil] = useState('');
  const tickRef = useRef(null);

  useEffect(() => { localStorage.setItem(K_PERFILS, JSON.stringify(perfils)); }, [perfils]);
  useEffect(() => { localStorage.setItem(K_PROGRES, JSON.stringify(progres)); }, [progres]);
  useEffect(() => { if (perfil) localStorage.setItem(K_ACTIU, JSON.stringify(perfil)); }, [perfil]);

  // Temporitzador de descans
  useEffect(() => {
    if (!rest || rest.left <= 0) return;
    tickRef.current = setInterval(() => {
      setRest((r) => {
        if (!r) return null;
        if (r.left <= 1) {
          beep(660, 500, 'sine');
          return null;
        }
        if (r.left === 4) {
          beep(880, 120, 'sine');
          setTimeout(() => beep(880, 120, 'sine'), 160);
        }
        return { ...r, left: r.left - 1 };
      });
    }, 1000);
    return () => clearInterval(tickRef.current);
  }, [rest]);

  const mes = MESOS[mesIdx];
  const dia = mes.dies[diaIdx];
  const sesProg = (progres[perfil] && progres[perfil][dia.id]) || { sets: {}, notes: {}, fet: null };

  const totalSeries = useMemo(
    () => dia.exercicis.reduce((a, e) => a + e.series, 0),
    [dia],
  );
  const fetes = useMemo(() => {
    let n = 0;
    dia.exercicis.forEach((e, i) => {
      const arr = sesProg.sets[i] || [];
      for (let s = 0; s < e.series; s++) if (arr[s]) n++;
    });
    return n;
  }, [dia, sesProg]);
  const pct = Math.round((fetes / totalSeries) * 100);

  const historial = useMemo(() => {
    const p = progres[perfil] || {};
    const out = [];
    Object.entries(p).forEach(([sid, val]) => {
      if (val.fet) out.push({ sid, fet: val.fet, nom: trobaSessio(sid) });
    });
    return out.sort((a, b) => (a.fet < b.fet ? 1 : -1));
  }, [progres, perfil]);

  function trobaSessio(sid) {
    for (const m of MESOS) {
      const d = m.dies.find((x) => x.id === sid);
      if (d) return `${m.nom} · ${d.nom}`;
    }
    return sid;
  }

  const canvia = useCallback((fn) => {
    setProgres((p) => {
      const copia = JSON.parse(JSON.stringify(p));
      if (!copia[perfil]) copia[perfil] = {};
      fn(copia[perfil]);
      return copia;
    });
  }, [perfil]);

  function asseguraSessio(p) {
    if (!p[dia.id]) p[dia.id] = { sets: {}, notes: {}, fet: null };
    const s = p[dia.id];
    if (!s.sets) s.sets = {};
    if (!s.notes) s.notes = {};
    return s;
  }

  function toggleSerie(exIdx, serie) {
    canvia((p) => {
      const s = asseguraSessio(p);
      const arr = s.sets[exIdx] ? [...s.sets[exIdx]] : [];
      arr[serie] = !arr[serie];
      s.sets[exIdx] = arr;
    });
    const ex = dia.exercicis[exIdx];
    const arr = sesProg.sets[exIdx] || [];
    // si acabem de marcar (no desmarcar) i no és l'última sèrie de l'exercici → descans
    if (!arr[serie] && serie < ex.series - 1) {
      setRest({ left: ex.descans, total: ex.descans });
    }
  }

  function setNota(exIdx, text) {
    canvia((p) => {
      const s = asseguraSessio(p);
      s.notes[exIdx] = text;
    });
  }

  function toggleFet() {
    canvia((p) => {
      const s = asseguraSessio(p);
      s.fet = s.fet ? null : avui();
    });
  }

  function reiniciaSessio() {
    canvia((p) => {
      p[dia.id] = { sets: {}, notes: {}, fet: null };
    });
    setRest(null);
  }

  // ── Pantalla de selecció de perfil ──
  if (!perfil) {
    return (
      <div className="app">
        <div className="card porta">
          <h1 className="title">💪 Entrenament Calistènia</h1>
          <p className="subtitle">3 mesos · 3 dies per setmana · gomes i barra</p>
          <p className="etiqueta">Qui entrena?</p>
          <div className="perfils-grid">
            {perfils.map((p) => (
              <button key={p} className="btn btn-perfil" onClick={() => setPerfil(p)}>
                {p}
              </button>
            ))}
          </div>
          <button className="btn btn-ghost" onClick={() => setEditantPerfils((v) => !v)}>
            ⚙️ Gestionar perfils
          </button>
          {editantPerfils && (
            <div className="gestor">
              {perfils.map((p) => (
                <div key={p} className="fila-perfil">
                  <span>{p}</span>
                  {perfils.length > 1 && (
                    <button
                      className="btn-x"
                      onClick={() => setPerfils(perfils.filter((x) => x !== p))}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <div className="afegir">
                <input
                  value={nouPerfil}
                  onChange={(e) => setNouPerfil(e.target.value)}
                  placeholder="Nom del perfil"
                />
                <button
                  className="btn btn-petit"
                  onClick={() => {
                    const n = nouPerfil.trim();
                    if (n && !perfils.includes(n)) setPerfils([...perfils, n]);
                    setNouPerfil('');
                  }}
                >
                  Afegir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="topbar">
        <button
          className="perfil-pill"
          onClick={() => { setPerfil(null); setVeureHistorial(false); }}
          title="Canviar de perfil"
        >
          👤 {perfil}
        </button>
        <div className="topbar-accions">
          <button className="btn-ico" onClick={() => setVeureHistorial((v) => !v)} title="Historial">
            📅
          </button>
          <button className="btn-ico" onClick={() => setMostraExtres((v) => !v)} title="Extres opcionals">
            ➕
          </button>
        </div>
      </header>

      {veureHistorial ? (
        <div className="card">
          <h2 className="seccio-titol">📅 Historial de {perfil}</h2>
          {historial.length === 0 ? (
            <p className="buit">Encara no has marcat cap sessió com a feta.</p>
          ) : (
            <>
              <p className="subtitol-petit">{historial.length} sessions completades</p>
              <ul className="llista-historial">
                {historial.map((h) => (
                  <li key={h.sid}>
                    <span className="cita">{h.fet}</span>
                    <span>{h.nom}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          <button className="btn btn-ghost" onClick={() => setVeureHistorial(false)}>Tornar</button>
        </div>
      ) : (
        <>
          <nav className="tabs">
            {MESOS.map((m, i) => (
              <button
                key={m.id}
                className={`tab ${i === mesIdx ? 'tab-on' : ''}`}
                onClick={() => { setMesIdx(i); setDiaIdx(0); setRest(null); }}
              >
                <span className="tab-titol">{m.nom}</span>
                <span className="tab-sub">{m.subtitol}</span>
              </button>
            ))}
          </nav>

          <div className="dies">
            {mes.dies.map((d, i) => {
              const sp = (progres[perfil] && progres[perfil][d.id]) || { sets: {}, fet: null };
              const t = d.exercicis.reduce((a, e) => a + e.series, 0);
              let f = 0;
              d.exercicis.forEach((e, ei) => {
                const arr = sp.sets[ei] || [];
                for (let s = 0; s < e.series; s++) if (arr[s]) f++;
              });
              const p = Math.round((f / t) * 100);
              return (
                <button
                  key={d.id}
                  className={`dia-chip ${i === diaIdx ? 'dia-on' : ''} ${sp.fet ? 'dia-fet' : ''}`}
                  onClick={() => { setDiaIdx(i); setRest(null); }}
                >
                  <span className="dia-nom">{d.nom}{sp.fet ? ' ✓' : ''}</span>
                  <span className="dia-pct" style={{ width: `${p}%` }} />
                </button>
              );
            })}
          </div>

          <div className="card capcalera-sessio">
            <div className="focus">{dia.focus}</div>
            <div className="barra-gran">
              <div className="barra-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="llegenda">
              <span>{fetes}/{totalSeries} sèries · {pct}%</span>
              <span>{dia.exercicis.length} exercicis</span>
            </div>
            <div className="accions-sessio">
              <button className={`btn ${sesProg.fet ? 'btn-ghost' : 'btn-start'}`} onClick={toggleFet}>
                {sesProg.fet ? `✓ Feta el ${sesProg.fet}` : 'Marcar sessió com a feta'}
              </button>
              <button className="btn btn-x-petit" onClick={reiniciaSessio}>Reiniciar</button>
            </div>
          </div>

          <div className="card escalfament">
            <h3 className="seccio-titol">🔥 Escalfament <span className="afegit">afegit</span></h3>
            <ul>
              {dia.escalfament.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>

          {dia.exercicis.map((ex, i) => {
            const arr = sesProg.sets[i] || [];
            const fetsEx = arr.filter(Boolean).length;
            const complet = fetsEx >= ex.series;
            return (
              <div key={i} className={`card exercici ${complet ? 'ex-complet' : ''}`}>
                <div className="ex-capcalera">
                  <span className="ex-num">{i + 1}</span>
                  <h3 className="ex-nom">{ex.nom}</h3>
                  {complet && <span className="tick">✓</span>}
                </div>
                <div className="badges">
                  <span className="badge badge-series">{ex.series} sèries</span>
                  <span className="badge">{ex.reps}</span>
                  <span className="badge badge-descans">⏱ {ex.descans}s</span>
                </div>
                {ex.obs && <p className="obs">{ex.obs}</p>}
                <div className="series">
                  {Array.from({ length: ex.series }).map((_, s) => (
                    <button
                      key={s}
                      className={`serie ${arr[s] ? 'serie-feta' : ''}`}
                      onClick={() => toggleSerie(i, s)}
                    >
                      {arr[s] ? '✓' : s + 1}
                    </button>
                  ))}
                  <a className="video" href={ex.video} target="_blank" rel="noopener noreferrer">▶</a>
                </div>
                <input
                  className="nota"
                  value={sesProg.notes[i] || ''}
                  onChange={(e) => setNota(i, e.target.value)}
                  placeholder="Goma / pes / com ha anat…"
                />
              </div>
            );
          })}

          <div className="card escalfament">
            <h3 className="seccio-titol">🧘 Estiraments <span className="afegit">afegit</span></h3>
            <ul>
              {dia.estiraments.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>

          {mostraExtres && (
            <div className="card extres">
              <h3 className="seccio-titol">➕ Extres opcionals</h3>
              <p className="subtitol-petit">Forats del programa original. Fes-los al final, si et queda gas.</p>
              <ul>
                {EXTRES.map((e, i) => (
                  <li key={i}>
                    <strong>{e.nom}</strong>
                    <span className="extres-detall">{e.detall}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="peu">Descans recomanat entre sessions: 1 dia. Fes 2-3 sessions/setmana.</p>
        </>
      )}

      {rest && (
        <div className="rest-bar">
          <div className="rest-fill" style={{ width: `${(rest.left / rest.total) * 100}%` }} />
          <div className="rest-cont">
            <span className="rest-temps">💨 {fmt(rest.left)}</span>
            <div>
              <button className="btn-rest" onClick={() => setRest((r) => r && { ...r, left: r.left + 15, total: r.total + 15 })}>+15s</button>
              <button className="btn-rest" onClick={() => setRest(null)}>Saltar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
