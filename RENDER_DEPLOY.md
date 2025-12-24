# Render Deployment Guide

## Render Configuration

This Next.js app is configured to deploy on Render.

### Build Settings in Render Dashboard:

1. **Build Command**: `npm install && npm run build`
2. **Start Command**: `npm start`
3. **Environment**: `Node`
4. **Node Version**: `18.x` or `20.x`

### Important Notes:

- Render will automatically detect Next.js and use the correct settings
- The app uses the default `.next` directory (not `build`)
- Make sure `NODE_ENV` is set to `production` in Render environment variables

### If you see "Not Found" error:

1. Check the build logs in Render dashboard - ensure the build completed successfully
2. Verify the start command is `npm start` (not `npm run dev`)
3. Check that all dependencies are in `dependencies` (not `devDependencies`)
4. Ensure the root route (`/`) is properly exported in `app/page.tsx`

### Troubleshooting:

- If build fails, check that all TypeScript errors are resolved
- Ensure `node_modules` is not committed to git
- Verify the build output shows successful compilation

