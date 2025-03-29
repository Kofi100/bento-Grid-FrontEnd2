import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/bento-Grid-FrontEnd2", // Ensure this matches your repo name
  //deactivate base code above if you want to see the results of the work locally.
  //just remember to reactivate before pushing and deploying the work online.
});
