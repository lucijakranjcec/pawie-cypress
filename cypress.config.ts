import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts',
    env: {
      BASE_URL: 'https://pawie.vercel.app/index.html',
      ADMINISTRATOR_USERNAME: "admin",
      ADMINISTRATOR_PASSWORD: "password"
    },
    baseUrl: 'https://pawie.vercel.app/index.html' 
  },
});
