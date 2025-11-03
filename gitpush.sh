#!/bin/bash

# Git push script for cartucheraspormayor-com-ar

echo "🚀 Deploying cartucheraspormayor-com-ar..."

# Add all changes
git add .

# Commit with version update message
git commit -m "Update to v6.16.1 - Add API authentication and fix Instagram feed

- Fix API URL to working Hostinger endpoint
- Add API key authentication to all fetch calls
- Update to Next.js 16.0.0 with Turbopack
- Update footer with standard Pensanta format

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to origin
git push origin main

echo "✅ Deployed successfully! Vercel will auto-deploy."
