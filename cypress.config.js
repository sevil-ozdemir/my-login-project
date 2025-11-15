import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'ytnn3y',
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
  },
})
