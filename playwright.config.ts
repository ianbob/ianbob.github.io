import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Add your custom playwright configuration overrides here
  // Example:
  timeout: 60000,
  use: {
    baseURL: 'https://expert-space-train-49qqjgj6g972jg45-8080.app.github.dev/',
  },
});
