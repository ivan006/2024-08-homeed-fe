import { defineConfig } from 'vite';

export default defineConfig({
  // other Vite config options...
  optimizeDeps: {
    include: [
      "vue-google-maps-community-fork",
      "fast-deep-equal",
    ],
  },
});
