import dns from 'dns';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
});
