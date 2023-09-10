export const defaultConfig = {
  scenes: 'src/scenes',
  enpoints: 'src/endpoints',
  pages: 'src/pages',
  assets: 'public/assets',
  entrypoint: 'src/index.ts', // This file is alwys imported on loaded
};

export type BunCGConfig = typeof defaultConfig;
