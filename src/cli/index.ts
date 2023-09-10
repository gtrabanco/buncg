#!/usr/bin/env bun

import { DEFAULT_CONFIG_EXTENSIONS, DEFAULT_CONFIG_FILENAME } from "../constants";
import { defaultConfig } from "../constants/default-config";
import { getSomeExtensionsFile } from "../libraries/get-some-extensions-file";
import { loadConfigFile } from "../libraries/load-config-file";

const CWD = process.cwd(); // From where was called
const BUNCG_CONFIG_FILE = getSomeExtensionsFile(CWD, DEFAULT_CONFIG_FILENAME, DEFAULT_CONFIG_EXTENSIONS);

if (BUNCG_CONFIG_FILE) {
  const config = loadConfigFile(BUNCG_CONFIG_FILE, defaultConfig);
}




// npm_* vars including npm_config_user_agent only present when run via "bun run"/"bunx" or similar
console.log({ cwd });