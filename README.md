# sveltekit-playground

Starting point for new SvelteKit experiments and playgrounds

---

## Branch: `07-06-2026-service-worker-dev`

### Status: `not-planned`

The fix? If you're using GitHub Codespaces, make sure to expose the port to the public, preventing potential redirects to authentication flows.

---

### Description

See the `my-app` folder, created using `npx sv create my-app`, TypeScript and the Vercel adapter.

Notice how the service worker fails to register when we run the app in "dev" mode (`npm run dev`), but **works fine in production or preview builds** (`npm run build` → `npm run preview`).

The generated JS file (in a GitHub Codespace) for the service worker points to `import '/@fs/workspaces/sveltekit-playground/my-app/src/service-worker.ts';`, which is definitely wrong, causing the following error:

`Uncaught (in promise) SecurityError: Failed to register a ServiceWorker for scope ('https://lorem-ipsum.app.github.dev/') with script ('https://lorem-ipsum.app.github.dev/service-worker.js'): The script resource is behind a redirect, which is disallowed.`

And the requested URL (`/service-worker.js`) gives a "302 Found" result (not sure if that's fine or if it's a Codespace thing).
