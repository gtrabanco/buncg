#!/usr/bin/env bun
// npm_* vars including npm_config_user_agent only present when run via "bun run"/"bunx" or similar

import { join } from "path";
import { BunCG } from "../../types";
import { DEFAULT_CONFIG_EXTENSIONS, DEFAULT_CONFIG_FILENAME } from "../constants";
import { defaultConfig } from "../constants/default-config";
import { getSomeExtensionsFile } from "../libraries/get-some-extensions-file";
import { loadConfigFile } from "../libraries/load-config-file";

const CWD = process.cwd(); // From where was called
const BUNCG_CONFIG_FILE = getSomeExtensionsFile(CWD, DEFAULT_CONFIG_FILENAME, DEFAULT_CONFIG_EXTENSIONS);

(globalThis as any).buncg ??= {} as BunCG;
(globalThis as any).buncg.config = BUNCG_CONFIG_FILE ? await loadConfigFile(BUNCG_CONFIG_FILE, defaultConfig) : defaultConfig;

const config = (globalThis as any).buncg.config as BunCG["config"];


await import(join(CWD, config.entrypoint ?? "src/index.ts"))
