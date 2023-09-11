import Elysia from "elysia";
import { join } from "path";
import { BunCG } from "../types";
import { DEFAULT_CONFIG_EXTENSIONS, DEFAULT_CONFIG_FILENAME } from "./constants";
import { defaultConfig } from "./constants/default-config";
import { getSomeExtensionsFile } from "./libraries/get-some-extensions-file";
import { loadConfigFile } from "./libraries/load-config-file";

const CWD = process.cwd(); // From where was called
// Configuration files can be in .meta, config subdirectories or in the project root directory
const BUNCG_CONFIG_FILE = getSomeExtensionsFile([join(CWD, '.meta'), join(CWD, 'config'), CWD], DEFAULT_CONFIG_FILENAME, DEFAULT_CONFIG_EXTENSIONS);

(globalThis as any).buncg ??= {} as BunCG;
(globalThis as any).buncg.config = BUNCG_CONFIG_FILE ? await loadConfigFile(BUNCG_CONFIG_FILE, defaultConfig) : defaultConfig;

export const config = (globalThis as any).buncg.config as BunCG["config"];
export const App = new Elysia(config.elysia).listen(config.serve);
App.get('example', () => 'Temporary sample output');
export type App = typeof App;


