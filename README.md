# Raigam SFA Web

Enterprise-ready React (Vite) starter that implements authentication, role-based routing, UI primitives (Tailwind CSS + shadcn/ui), Redux Toolkit state management, and a modular folder structure tailored for a Sales Force Automation platform.

## Tech stack

- [React 18](https://react.dev/) with [Vite](https://vitejs.dev/) and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) primitives
- [React Router](https://reactrouter.com/) for routing
- [Redux Toolkit](https://redux-toolkit.js.org/) + React Redux for global state
- [Axios](https://axios-http.com/) with refresh-token aware interceptors
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) for form handling and validation

## Project structure

```
.
├── src
│   ├── App.tsx                    # Router provider
│   ├── components                 # Reusable UI and layout components
│   │   ├── layout                 # Sidebar, header, etc.
│   │   └── ui                     # shadcn/ui primitives
│   ├── features
│   │   └── auth                   # Auth slice, thunks, and service
│   ├── hooks                      # Typed redux hooks
│   ├── layouts                    # Application shells
│   ├── pages                      # Screen components (auth + placeholders)
│   ├── providers                  # Context providers (AuthProvider)
│   ├── routes                     # Router configuration & guards
│   ├── services                   # Axios client with interceptors
│   ├── store                      # Redux store setup
│   ├── types                      # Shared TypeScript types
│   ├── utils                      # General utilities (role helpers, classnames)
│   ├── index.css                  # Tailwind layer & design tokens
│   └── main.tsx                   # App bootstrap
├── public                         # Static assets (optional)
├── index.html                     # Vite entry point
├── package.json                   # npm scripts & dependencies
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── tsconfig*.json                 # TypeScript build settings
└── .env.example                   # Environment variable contract
```

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
   > If the npm registry is blocked in your environment, configure an internal mirror before running the command.

2. **Copy environment variables**
   ```bash
   cp .env.example .env
   ```
   Update `VITE_API_BASE_URL` to point to the backend (e.g. `https://sfa.raigam.lk/api/v1`).

3. **Run the development server**
   ```bash
   npm run dev
   ```
   Vite will boot on [http://localhost:5173](http://localhost:5173) by default.

4. **Build for production**
   ```bash
   npm run build
   ```
   The compiled assets are emitted to `dist/`.

5. **Preview the production bundle**
   ```bash
   npm run preview
   ```

## Authentication workflow

- Login uses `POST {VITE_API_BASE_URL}/auth/login`.
- Successful responses hydrate the Redux store with the access token, optional refresh token, and role metadata.
- Tokens are persisted to `localStorage` and rehydrated on reload.
- A background interval requests `/auth/refresh` every 15 minutes when a refresh token exists.
- Axios interceptors attach the `Authorization` header and transparently retry failed requests after refresh.

## Role-based authorization

- `ProtectedRoute` guard enforces authentication for all private screens.
- Per-route `allowedRoles` arrays restrict modules to specific user roles (System Admin, Top Management, Senior Manager Sales, etc.).
- Unauthorized access redirects users to a dedicated "Access denied" screen.

## Navigation tree

The sidebar follows the hierarchy defined in `src/routes/sidebar-config.ts` and mirrors the provided module list:

- Dashboards → Home Report, Heart Count
- Master Settings → Demarcation, Distributor Mapping, Final Geography Mapping
- Sales → Sales Details, Sales Operations (with nested items)
- Outlet Module, Reports, HR Module, Admin Module, Agency Module

Each route currently renders a placeholder component. Replace `PlaceholderPage` instances with production-ready screens as features are implemented.

## State management & service layer

- `src/features/auth` holds the Redux slice, async thunks, and API service wrapper.
- `src/services/api-client.ts` centralizes Axios configuration, headers, and refresh-token retry logic.
- Use Redux Toolkit slices per domain feature to keep state isolated and testable.

## Styling & UI

- Tailwind CSS is preconfigured with design tokens compatible with shadcn/ui.
- UI primitives (`Button`, `Card`, `Input`, etc.) live in `src/components/ui` and follow the shadcn/ui implementation pattern.
- Global layout uses a responsive sidebar + header shell (`src/layouts/dashboard-layout.tsx`).

## Coding standards

- TypeScript `strict` mode is enabled.
- ESLint + Prettier configurations are included in `package.json` scripts.
- Keep domain logic inside `features/*` folders and reuse primitives from `components/ui`.

## Next steps

- Implement real page content and data fetching services per module.
- Expand the Redux store with feature slices as required.
- Add automated tests (unit, integration, and e2e) once APIs stabilize.

