#!/usr/bin/env bash
set -euo pipefail

echo "Building..."
npm run build

echo ""
echo "Demo deploy script."
echo "For SSH deployments, sync:"
echo "  .next/ public/ package.json package-lock.json (or pnpm-lock.yaml)"
echo "Then on server:"
echo "  npm ci && npm run start"
