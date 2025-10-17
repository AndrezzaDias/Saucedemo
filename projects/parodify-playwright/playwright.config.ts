import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Executa os testes em paralelo */
  fullyParallel: true,

  /* Evita commit com test.only */
  forbidOnly: !!process.env.CI,

  /* Retenta testes em caso de falha (CI) */
  retries: process.env.CI ? 2 : 0,

  /* Define número de workers */
  workers: process.env.CI ? 1 : undefined,

  /* Define o formato do relatório */
  reporter: 'html',

  /* Configurações globais para todos os testes */
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,                 // deixa o navegador visível
    screenshot: 'only-on-failure',   // tira print se falhar
    video: 'retain-on-failure',      // grava vídeo se falhar
    trace: 'on-first-retry',         // gera trace quando falha
  },

  /* Testa no Chrome (desktop) */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
