export type BunCG = {
  config: BunCGConfig;
}

export declare global {
  declare interface Window { buncg: BunCG; }
  declare type buncg = BunCG;
}