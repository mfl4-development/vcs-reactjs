# react-vite

Frontend app scaffolded with Vite + React and Tailwind CSS v4.

## Stack

- Vite + React
- Tailwind CSS via `@tailwindcss/vite`
- ESLint (flat config)

## Package manager

This project is configured for Bun (`packageManager: bun@1.2.21`) and includes `bun.lock`.

## Getting started

```bash
bun install
bun run dev
```

App runs at `http://localhost:5173`.

## Available scripts

```bash
bun run dev
bun run build
bun run lint
bun run preview
```

## Tailwind usage

Tailwind is enabled in Vite (`vite.config.js`) and loaded in `src/index.css`:

```css
@import 'tailwindcss';
```
