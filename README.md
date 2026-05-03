# Nimbus

Dashboard SaaS con **Vite**, **React 18**, **TypeScript**, **Tailwind CSS** y **shadcn/ui**. Incluye layout responsive, analytics, clientes, facturación y tema claro/oscuro.

## Requisitos

- Node.js 18+
- [pnpm](https://pnpm.io/) (recomendado) o npm

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:8080` (puerto por defecto en `vite.config.ts`).

## Scripts

| Comando        | Descripción              |
| -------------- | ------------------------ |
| `pnpm dev`     | Servidor de desarrollo   |
| `pnpm build`   | Build de producción      |
| `pnpm preview` | Previsualizar el build   |
| `pnpm lint`    | ESLint                   |
| `pnpm test`    | Vitest (una pasada)      |

## Stack

- **Vite** + **React** + **TypeScript**
- **React Router** — rutas
- **TanStack Query** — datos remotos / estado servidor
- **Tailwind CSS** + **tailwindcss-animate**
- **shadcn/ui** + **Radix UI**
- **Recharts** — gráficos
- **Vitest** + Testing Library — tests

## Repo

[Licencia MIT](./LICENSE).
