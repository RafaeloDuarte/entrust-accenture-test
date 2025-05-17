import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './src/tests/e2e',
  webServer: {
    command: 'npm run dev',
    port: 5173,
    timeout: 30 * 1000,
    reuseExistingServer: !process.env.CI,
  },
})
