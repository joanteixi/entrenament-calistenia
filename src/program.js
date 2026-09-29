// Programa de calistènia amb gomes — 3 mesos · 3 dies/setmana
// Basat en el full original (corregit): noms normalitzats, vídeo assignat pel
// títol real del vídeo (a l'Excel els enllaços estaven desordenats).

const V = {
  pikeAFlexio: 'https://www.youtube.com/shorts/fVpkotyc4e0',
  pikePushBanda: 'https://youtu.be/Mu73c0tnPJw',
  bulgares: 'https://youtube.com/shorts/Znm8PQIt6DA',
  tricepsPared: 'https://youtube.com/shorts/0izuxUfhBXk',
  dominadesProno: 'https://youtube.com/shorts/3ks_oQNdzVM',
  kneeRaises: 'https://youtube.com/shorts/UsWj_oFFjQ4',
  fondosTriceps: 'https://youtube.com/shorts/qRDe3HGt1sg',
  flexionsDiamant: 'https://youtu.be/r4d4mI45ux4',
  dominadesSupines: 'https://youtube.com/shorts/x88nJn1ZWm4',
  pontGlutis: 'https://youtu.be/QkRZqqDu9P8',
  tuckToes: 'https://youtu.be/IyY-zCfOrtw',
  pujadesCalaix: 'https://youtube.com/shorts/SeEIU6S7V2U',
  planxaOblicus: 'https://youtube.com/shorts/z5RlbmV_Kro',
  flexionsBanda: 'https://youtube.com/shorts/46eP0yIovE0',
  flexionsTecnica: 'https://youtu.be/hvNCg4DsRPI',
  planxaTecnica: 'https://youtu.be/6P8qMg2kgTI',
  dipsTecnica: 'https://www.youtube.com/shorts/8TpNCxprqrU',
  absClimber: 'https://youtube.com/shorts/Peugq-NNkh8',
  pistolSquat: 'https://youtu.be/lKyfIvorWzg',
  absPiernasElevadas: 'https://youtu.be/xq0aOL-xbYY',
  saltoConejo: 'https://youtu.be/DN1JiNvENdI',
  wallWalk: 'https://youtu.be/2x8E9VxAQ3k',
  sentadillasIsometricas: 'https://youtu.be/TmHugW8kOec',
  supinasIsometrico: 'https://youtube.com/shorts/pCeomS1KpGk',
  sentadillasSalto: 'https://youtube.com/shorts/o2kxHqT2VUM',
  hollowbody: 'https://youtube.com/shorts/1FpREoH7Pbc',
  estocades: 'https://youtube.com/shorts/wbWEtwaHwQY',
  bisagraAbs: 'https://youtube.com/shorts/LwjC7WAxlDA',
  skullCrushers: 'https://youtube.com/shorts/Y3490lTkE8g',
  // - alternatives sense barra -
  remoBanda: 'https://youtu.be/zqRiAFTcjCc',
  remoInvertit: 'https://www.youtube.com/shorts/9CfrQsFz23E',
  reverseCrunch: 'https://youtu.be/ue6j6k0Vgbc',
  legRaises: 'https://youtu.be/xq0aOL-xbYY',
  jaloBanda: 'https://www.youtube.com/shorts/kb5ZiQJ_D8I',
};

const NOTA_GOMA =
  'Fes servir una goma que et permeti fer almenys 3 repes però no més de 7. Busca intensitat a cada repe.';

export const MESOS = [
  {
    id: 'm1',
    nom: 'Mes 1',
    subtitol: 'Base · regressions amb goma',
    dies: [
      {
        id: 'm1d1',
        nom: 'Dia 1',
        focus: 'Empenta · Tracció vertical · Core',
        escalfament: [
          'Mobilitat de canells i espatlles (cercles, 10 per costat)',
          'Rodes de braços + activació d’escàpules (10 repes)',
          'Gats-camells i bàscules de maluc (10 repes)',
          '1 sèrie fàcil de l’exercici principal (flexions)',
        ],
        estiraments: ['Pectoral a la paret (30s per costat)', 'Tríceps sobre el cap (30s per costat)', 'Estirament de columna penjat a la barra (30s)'],
        exercicis: [
          { nom: 'Flexions', series: 4, reps: '4-10 repes', descans: 60, video: V.flexionsBanda, obs: 'Si no te’n surten més de 4 sense goma, posa’n una de fina.' },
          { nom: 'Dominades pronades amb goma', series: 5, reps: '3-7 repes exigents', descans: 60, video: V.dominadesProno, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo horitzontal amb goma', series: 5, reps: '6-12 repes exigents', descans: 60, video: V.remoBanda, obs: 'Ancoratge a la porta a l’alçada del pit. Porta els colzes enrere i junta les escàpules.' } },
          { nom: 'Fons de tríceps', series: 3, reps: '8-12 repes', descans: 60, video: V.fondosTriceps, obs: '' },
          { nom: 'Knee raises (penjat)', series: 3, reps: '6-10 repes', descans: 60, video: V.kneeRaises, obs: '', barra: true, alt: { nom: 'Reverse crunch', series: 3, reps: '12-20 repes', descans: 60, video: V.reverseCrunch, obs: 'Estirat a terra, porta els genolls al pit elevant el maluc i baixa controlat sense deixar caure les cames.' } },
          { nom: 'Del pike a flexió elevada', series: 3, reps: '5-10 repes', descans: 60, video: V.pikeAFlexio, obs: '' },
        ],
      },
      {
        id: 'm1d2',
        nom: 'Dia 2',
        focus: 'Cames · Glutis · Tracció supinada',
        escalfament: [
          'Mobilitat de turmells i malucs (cercles, 10 per costat)',
          'Sentadilles al buit lentes (10 repes)',
          'Pont de glutis (15 repes)',
          '1 sèrie fàcil de sentadilles búlgares sense pes',
        ],
        estiraments: ['Quàdriceps dempeus (30s per cama)', 'Isquios i glutis assegut (30s per cama)', 'Cadena posterior penjat/penjada (30s)'],
        exercicis: [
          { nom: 'Sentadilles búlgares', series: 4, reps: '10 repes per cama', descans: 60, video: V.bulgares, obs: '' },
          { nom: 'Dominades supinades amb goma', series: 5, reps: '3-7 repes exigents', descans: 60, video: V.dominadesSupines, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo invertit sota la taula', series: 5, reps: '5-10 repes', descans: 60, video: V.remoInvertit, obs: 'Agafat supí (palmes cap a tu). Comprova que la taula és sòlida i no bolqui; com més estirat vagis, més dur és.' } },
          { nom: 'Pujades al calaix', series: 3, reps: '10 repes per cama', descans: 60, video: V.pujadesCalaix, obs: '' },
          { nom: 'Pont de glutis a una cama', series: 4, reps: '10 repes per cama', descans: 60, video: V.pontGlutis, obs: '' },
          { nom: 'Tuck toes to bar', series: 3, reps: '6-10 repes', descans: 60, video: V.tuckToes, obs: '', barra: true, alt: { nom: 'Leg raises a terra', series: 3, reps: '8-12 repes', descans: 60, video: V.legRaises, obs: 'Cames rectes sense arquejar la lumbar. Si et costa, flexiona els genolls.' } },
        ],
      },
      {
        id: 'm1d3',
        nom: 'Dia 3',
        focus: 'Empenta · Vertical · Core',
        escalfament: [
          'Mobilitat de canells a terra (30s) i espatlles amb bastó (10 repes)',
          'Rodes de braços + escàpules (10 repes)',
          'Posició de planxa i hollow (2 × 20s)',
          '1 sèrie fàcil de flexions diamant',
        ],
        estiraments: ['Tríceps sobre el cap (30s per costat)', 'Espatlla posterior (30s per costat)', 'Obertures de maluc i estirament lateral (30s per costat)'],
        exercicis: [
          { nom: 'Flexions diamant', series: 4, reps: '5-10 repes', descans: 60, video: V.flexionsDiamant, obs: '' },
          { nom: 'Pike push-ups amb goma', series: 4, reps: '6-10 repes exigents', descans: 60, video: V.pikePushBanda, obs: 'Mira el vídeo sencer.' },
          { nom: 'Extensió de tríceps a la paret', series: 3, reps: '8-10 repes exigents', descans: 60, video: V.tricepsPared, obs: '' },
          { nom: 'Dominades pronades amb goma', series: 5, reps: '3-7 repes exigents', descans: 60, video: V.dominadesProno, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo horitzontal amb goma', series: 5, reps: '6-12 repes exigents', descans: 60, video: V.remoBanda, obs: 'Ancoratge a la porta a l’alçada del pit. Porta els colzes enrere i junta les escàpules.' } },
          { nom: 'Planxa oblicus', series: 3, reps: '10-15 per costat', descans: 50, video: V.planxaOblicus, obs: '' },
        ],
      },
    ],
  },
  {
    id: 'm2',
    nom: 'Mes 2',
    subtitol: 'Més volum · apareix el wall walk',
    dies: [
      {
        id: 'm2d1',
        nom: 'Dia 1',
        focus: 'Empenta · Core',
        escalfament: [
          'Mobilitat de canells i espatlles (cercles, 10 per costat)',
          'Rodes de braços + escàpules (10 repes)',
          'Hollow i planxa (2 × 20s)',
          '1 sèrie fàcil de dips amb goma',
        ],
        estiraments: ['Pectoral a la paret (30s per costat)', 'Tríceps sobre el cap (30s per costat)', 'Estirament de columna (30s)'],
        exercicis: [
          { nom: 'Dips amb goma (paral·leles o cadires)', series: 4, reps: '3-7 repes exigents', descans: 60, video: V.dipsTecnica, obs: 'Mira el vídeo sencer.' },
          { nom: 'Dominades pronades amb goma', series: 5, reps: '3-7 repes exigents', descans: 60, video: V.dominadesProno, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo horitzontal amb goma', series: 5, reps: '6-12 repes exigents', descans: 60, video: V.remoBanda, obs: 'Ancoratge a la porta a l’alçada del pit. Porta els colzes enrere i junta les escàpules.' } },
          { nom: 'Abdominals amb cames elevades', series: 3, reps: '12-20 repes', descans: 60, video: V.absPiernasElevadas, obs: '' },
          { nom: 'Flexions', series: 3, reps: '5-10 repes', descans: 60, video: V.flexionsTecnica, obs: '' },
          { nom: 'Abs climber', series: 2, reps: '50 segons a bon ritme', descans: 60, video: V.absClimber, obs: '' },
          { nom: 'Planxa estàtica', series: 3, reps: 'Temps màxim que aguantis', descans: 50, video: V.planxaTecnica, obs: '' },
        ],
      },
      {
        id: 'm2d2',
        nom: 'Dia 2',
        focus: 'Cames complet · Tracció supinada',
        escalfament: [
          'Mobilitat de turmells i malucs (cercles, 10 per costat)',
          'Sentadilles al buit lentes (10 repes) + pont de glutis (15 repes)',
          'Sentadilles búlgares sense pes (8 per cama)',
          '1 sèrie fàcil de pistol assistida',
        ],
        estiraments: ['Quàdriceps dempeus (30s per cama)', 'Isquios assegut (30s per cama)', 'Cadena posterior (30s)'],
        exercicis: [
          { nom: 'Sentadilles i isomètrica final', series: 3, reps: '10 repes + la última isomètrica', descans: 60, video: V.sentadillasIsometricas, obs: 'Mira el vídeo sencer.' },
          { nom: 'Pistol squat assistida', series: 4, reps: '3-7 per cama', descans: 60, video: V.pistolSquat, obs: '' },
          { nom: 'Dominades supinades amb goma', series: 5, reps: '3-7 repes exigents', descans: 60, video: V.dominadesSupines, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo invertit sota la taula', series: 5, reps: '5-10 repes', descans: 60, video: V.remoInvertit, obs: 'Agafat supí (palmes cap a tu). Comprova que la taula és sòlida i no bolqui; com més estirat vagis, més dur és.' } },
          { nom: 'Sentadilles búlgares', series: 4, reps: '10 repes per cama', descans: 60, video: V.bulgares, obs: '' },
          { nom: 'Pont de glutis a una cama', series: 4, reps: '10 repes per cama', descans: 60, video: V.pontGlutis, obs: '' },
        ],
      },
      {
        id: 'm2d3',
        nom: 'Dia 3',
        focus: 'Vertical · Empenta · Plyo',
        escalfament: [
          'Mobilitat de canells a terra (45s) — imprescindible pel wall walk',
          'Espatlles amb bastó i escàpules (10 repes)',
          'Planxa i hollow (2 × 20s)',
          'Aproximació: 2 pujades a la paret fàcils',
        ],
        estiraments: ['Espatlla posterior (30s per costat)', 'Tríceps i canells (30s)', 'Quàdriceps i bessons (30s per cama)'],
        exercicis: [
          { nom: 'Wall walk', series: 4, reps: 'Aguantar el 80% del temps màxim', descans: 60, video: V.wallWalk, obs: 'No cal tocar la paret amb la cara: acosta-hi el màxim i mantén el cos ferm i dret.' },
          { nom: 'Dips amb goma (paral·leles o cadires)', series: 4, reps: '3-7 repes exigents', descans: 60, video: V.dipsTecnica, obs: 'Mira el vídeo sencer.' },
          { nom: 'Dominades pronades amb goma', series: 5, reps: '3-7 repes exigents', descans: 60, video: V.dominadesProno, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo horitzontal amb goma', series: 5, reps: '6-12 repes exigents', descans: 60, video: V.remoBanda, obs: 'Ancoratge a la porta a l’alçada del pit. Porta els colzes enrere i junta les escàpules.' } },
          { nom: 'Flexions', series: 3, reps: '5-10 repes', descans: 60, video: V.flexionsTecnica, obs: '' },
          { nom: 'Tuck toes to bar', series: 3, reps: '6-10 repes', descans: 60, video: V.tuckToes, obs: '', barra: true, alt: { nom: 'Leg raises a terra', series: 3, reps: '8-12 repes', descans: 60, video: V.legRaises, obs: 'Cames rectes sense arquejar la lumbar. Si et costa, flexiona els genolls.' } },
          { nom: 'Salt de conill', series: 3, reps: '8-12 salts', descans: 60, video: V.saltoConejo, obs: 'Aterra suaument amb els genolls flexionats.' },
        ],
      },
    ],
  },
  {
    id: 'm3',
    nom: 'Mes 3',
    subtitol: 'Intensitat · menys volum, més qualitat',
    dies: [
      {
        id: 'm3d1',
        nom: 'Dia 1',
        focus: 'Empenta · Tracció supinada · Core',
        escalfament: [
          'Mobilitat de canells i espatlles (cercles, 10 per costat)',
          'Rodes de braços + escàpules (10 repes)',
          'Hollow (2 × 20s)',
          '1 sèrie fàcil de flexions',
        ],
        estiraments: ['Pectoral a la paret (30s per costat)', 'Tríceps sobre el cap (30s per costat)', 'Columna penjat a la barra (30s)'],
        exercicis: [
          { nom: 'Flexions', series: 4, reps: '6-10 repes', descans: 60, video: V.flexionsTecnica, obs: '' },
          { nom: 'Dominades supinades amb goma', series: 5, reps: '3-7 repes (l’última mantens a dalt)', descans: 60, video: V.supinasIsometrico, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo invertit sota la taula', series: 5, reps: '5-10 repes', descans: 60, video: V.remoInvertit, obs: 'Agafat supí (palmes cap a tu). Comprova que la taula és sòlida i no bolqui; com més estirat vagis, més dur és.' } },
          { nom: 'Skull crushers', series: 3, reps: '6-10 repes exigents', descans: 60, video: V.skullCrushers, obs: '' },
          { nom: 'Tuck toes to bar', series: 4, reps: '6-10 repes', descans: 60, video: V.tuckToes, obs: '', barra: true, alt: { nom: 'Leg raises a terra', series: 4, reps: '8-12 repes', descans: 60, video: V.legRaises, obs: 'Cames rectes sense arquejar la lumbar. Si et costa, flexiona els genolls.' } },
          { nom: 'Knee raises (penjat)', series: 3, reps: '6-10 repes', descans: 60, video: V.kneeRaises, obs: '', barra: true, alt: { nom: 'Reverse crunch', series: 3, reps: '12-20 repes', descans: 60, video: V.reverseCrunch, obs: 'Estirat a terra, porta els genolls al pit elevant el maluc i baixa controlat sense deixar caure les cames.' } },
        ],
      },
      {
        id: 'm3d2',
        nom: 'Dia 2',
        focus: 'Cames · Plyo · Core',
        escalfament: [
          'Mobilitat de turmells i malucs (cercles, 10 per costat)',
          'Sentadilles al buit lentes (10 repes) + pont de glutis (15 repes)',
          'Estocades al buit sense pes (8 per cama)',
          'Reactivació: 5 salts suaus al lloc',
        ],
        estiraments: ['Quàdriceps dempeus (30s per cama)', 'Isquios assegut (30s per cama)', 'Bessons a la paret (30s per cama)'],
        exercicis: [
          { nom: 'Estocades endavant', series: 4, reps: '10 repes per cama', descans: 60, video: V.estocades, obs: '' },
          { nom: 'Hollowbody', series: 3, reps: 'Temps màxim que aguantis', descans: 50, video: V.hollowbody, obs: '' },
          { nom: 'Sentadilles amb salt', series: 3, reps: '10-15 repes', descans: 60, video: V.sentadillasSalto, obs: 'Aterra amb els genolls absorbint, sense fer soroll.' },
          { nom: 'Pont de glutis a una cama', series: 4, reps: '10 repes per cama', descans: 60, video: V.pontGlutis, obs: '' },
          { nom: 'Dips amb goma (paral·leles o cadires)', series: 4, reps: '3-7 repes exigents', descans: 60, video: V.dipsTecnica, obs: 'Mira el vídeo sencer.' },
          { nom: 'Sentadilles búlgares', series: 3, reps: '10 repes per cama', descans: 60, video: V.bulgares, obs: '' },
        ],
      },
      {
        id: 'm3d3',
        nom: 'Dia 3',
        focus: 'Tracció · Vertical',
        escalfament: [
          'Mobilitat de canells a terra (45s) — imprescindible pel wall walk',
          'Espatlles amb bastó i escàpules (10 repes)',
          'Planxa i hollow (2 × 20s)',
          'Aproximació: 2 pujades a la paret fàcils',
        ],
        estiraments: ['Espatlla posterior (30s per costat)', 'Tríceps i canells (30s)', 'Columna penjat a la barra (30s)'],
        exercicis: [
          { nom: 'Dominades supinades amb goma', series: 4, reps: '3-7 repes exigents', descans: 60, video: V.dominadesSupines, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo invertit sota la taula', series: 4, reps: '5-10 repes', descans: 60, video: V.remoInvertit, obs: 'Agafat supí (palmes cap a tu). Comprova que la taula és sòlida i no bolqui; com més estirat vagis, més dur és.' } },
          { nom: 'Wall walk', series: 5, reps: 'Aguantar el 80% del temps màxim', descans: 60, video: V.wallWalk, obs: 'No cal tocar la paret amb la cara: acosta-hi el màxim i mantén el cos ferm i dret.' },
          { nom: 'Flexions diamant', series: 4, reps: '6-10 repes', descans: 60, video: V.flexionsDiamant, obs: '' },
          { nom: 'Dominades pronades amb goma', series: 3, reps: '3-7 repes exigents', descans: 60, video: V.dominadesProno, obs: NOTA_GOMA, barra: true, alt: { nom: 'Remo horitzontal amb goma', series: 3, reps: '6-12 repes exigents', descans: 60, video: V.remoBanda, obs: 'Ancoratge a la porta a l’alçada del pit. Porta els colzes enrere i junta les escàpules.' } },
          { nom: 'Bisagra abs', series: 3, reps: '6-10 repes', descans: 60, video: V.bisagraAbs, obs: '' },
        ],
      },
    ],
  },
];

// Extres opcionals (els forats que li faltaven al programa original)
export const EXTRES = [
  { nom: 'Remo horitzontal amb goma', detall: '3 × 10-12 — el programa original no té cap tracció horitzontal; això equilibra l’espatlla.' },
  { nom: 'Bessons dempeus', detall: '3 × 15-20 — no hi ha treball de bessó enlloc del programa.' },
  { nom: 'Pes mort a una cama (o nòrdic assistit)', detall: '3 × 8 per cama — patró de frontissa (hinge) que falta.' },
];

// --- Mode 'sense barra' -------------------------------------------------
// Els exercicis marcats amb `barra: true` necessiten una barra (o algu on
// penjar-se). Amb el toggle 'Sense barra' actiu, l'app els canvia pel camp
// `alt` i els estiraments penjats per aquest text.
export const ESTIRAMENT_SENSE_BARRA =
  'Estirament de lats amb goma ancorada a la porta (30s per costat)';

export const SENSE_BARRA_INFO = [
  'Els exercicis de tracció (dominades) passen a remo: mateix patró muscular, sense penjar-se.',
  'Els core penjats (knee raises, tuck toes to bar) passen a terra: reverse crunch i leg raises.',
  'Extra útil si tens goma gruixuda: jaló al pit amb la goma ancorada a dalt d’una porta (3 × 8-12). És el que més s’acosta a una dominada.',
  'Per la resta del programa no cal res: paret, terra, cadira i gomes.',
];

export const TOTAL_SESSIONS = MESOS.reduce((a, m) => a + m.dies.length, 0);
