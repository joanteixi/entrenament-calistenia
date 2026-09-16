# Entrenament Calistènia · 3 mesos

Web per seguir el programa de calistènia amb gomes (3 mesos × 3 dies/setmana),
amb **dos perfils independents**.

## Perfils
- **Joan**
- **Vero**

Cada perfil guarda el seu progrés per separat (localStorage del navegador):
sèries fetes, notes (goma/pes/com ha anat) i historial de sessions.

Es poden afegir o treure perfils des de la pantalla inicial (⚙️ Gestionar perfils).

## Funcions
- 3 mesos × 3 dies, amb el focus de cada sessió
- Marcatge de sèrie per sèrie amb **temporitzador de descans** automàtic (+15s / saltar)
- Enllaç al vídeo de cada exercici (29 vídeos)
- Nota lliure per exercici (quina goma has fet servir, sensacions…)
- Escalfament i estiraments afegits a cada sessió
- Extres opcionals (remo horitzontal, bessons, frontissa) — els forats del programa original
- Historial de sessions completades
- PWA: es pot afegir a la pantalla d'inici del mòbil

## Desenvolupament
```bash
npm install
npm run dev      # servidor local
npm run build    # build de producció a dist/
npm run lint
```

## Desplegament
Azure Static Web Apps (pla Free) · `entrenament-calistenia` (rg-ia-test, West Europe)

- URL: https://thankful-grass-0fa4f1c03.4.azurestaticapps.net

Dues vies:
- **Local (funciona sempre):** `./deploy.sh` — llegeix el token de `~/.config/entrenament-calistenia/swa-token`.
- **CI:** GitHub Actions a cada push a `main`. Cal el secret `AZURE_STATIC_WEB_APPS_API_TOKEN`
  (Settings → Secrets and variables → Actions). Mentre no hi sigui, el workflow es marca com
  a saltat (no falla) i surt un warning.

## Origen del contingut
Basat en el full de càlcul original (`deborah_buks.xlsx`). S'han corregit els noms
dels exercicis i **s'han reassignat els enllaços de vídeo pel títol real del vídeo**,
perquè al full original l'ordre dels enllaços no coincidia amb l'ordre dels exercicis.
