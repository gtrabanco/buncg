
export type BunCG = {
  config: BunCGConfig;
}

declare global {
  declare interface Window { buncg: BunCG; }
  declare type buncg = BunCG;
  declare type App = App;
}