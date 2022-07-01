import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";
import path from 'path';

const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
            '@components': path.resolve('./src/components'),
        }
      },
    }
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
