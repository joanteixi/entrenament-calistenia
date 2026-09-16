#!/usr/bin/env bash
# Desplega l'app a Azure Static Web Apps des d'aquí (sense CI).
# El token es llegeix de $SWA_DEPLOY_TOKEN o de ~/.config/entrenament-calistenia/swa-token
set -euo pipefail

cd "$(dirname "$0")"

TOKEN="${SWA_DEPLOY_TOKEN:-$(cat "$HOME/.config/entrenament-calistenia/swa-token" 2>/dev/null || true)}"

if [ -z "$TOKEN" ]; then
  echo "ERROR: no tinc el token de desplegament." >&2
  echo "Passa'l amb SWA_DEPLOY_TOKEN=... ./deploy.sh o desa'l a ~/.config/entrenament-calistenia/swa-token" >&2
  exit 1
fi

npm run build
npx --yes @azure/static-web-apps-cli@latest deploy ./dist --deployment-token "$TOKEN" --env production
