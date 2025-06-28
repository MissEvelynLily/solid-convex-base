import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@convex': resolve(__dirname, './convex'),
      },
    },
  },
  server: {
    preset: 'bun',
  },
});
