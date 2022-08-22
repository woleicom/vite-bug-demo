import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let config = {
    plugins: [
      vue(),
    ],
    base: "./",
    server: {
      port: 8081,
      host: true,
    },
  }
  return config
})