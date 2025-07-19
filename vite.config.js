// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';


// export default defineConfig({
//   build: {
//     chunkSizeWarningLimit: 1000, 
//   },
//   server: {
//     host: '0.0.0.0',  
//     port: 5173,        
//     historyApiFallback: true, 
//   },
//   plugins: [react()],
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', 
    chunkSizeWarningLimit: 1000, 
  },
  server: {
    host: '0.0.0.0', // Makes the server accessible on the local network
    port: 5173,      // Sets the development server port
    open: true,      // Opens the app in the browser automatically
  },
  plugins: [react()],
});
