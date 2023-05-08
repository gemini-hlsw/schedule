import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// NOTE: This fixes all 
function fixCssRoot() {
  return {
    postcssPlugin: 'postcss-fix-nested-root',
    Once(root: any) {
      root.walkRules((rule: any) => {
        if (rule.selector.includes(' :root')) {
          rule.selector = rule.selector.replace(' :root', '');
        }
      });
    }
  }
}
fixCssRoot.postcss = true;


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "scheduler.lucuma.xyz",
  },
  preview: {
    host: "0.0.0.0",
  
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
    postcss: {
      plugins: [
        fixCssRoot()
      ]
    },
  }
})
