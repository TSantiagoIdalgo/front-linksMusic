import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import plugin_image from '@rollup/plugin-image'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), plugin_image()],
})
