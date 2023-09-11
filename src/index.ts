import { join } from "path";
import Elysia from "elysia";
import { BunCG } from "../types";
import {
	DEFAULT_CONFIG_EXTENSIONS,
	DEFAULT_CONFIG_FILENAME,
} from "./constants";
import { defaultConfig } from "./constants/default-config";
import { getSomeExtensionsFile } from "./libraries/get-some-extensions-file";
import { loadConfigFile } from "./libraries/load-config-file";

const CWD = process.cwd(); // From where was called
// Configuration files can be in .meta, config subdirectories or in the project root directory
const BUNCG_CONFIG_FILE = getSomeExtensionsFile(
	[join(CWD, ".meta"), join(CWD, "config"), CWD],
	DEFAULT_CONFIG_FILENAME,
	DEFAULT_CONFIG_EXTENSIONS,
);

// biome-ignore lint/suspicious/noExplicitAny: Necessary to avoid TS errors
(globalThis as any).buncg ??= {} as BunCG;
// biome-ignore lint/suspicious/noExplicitAny: Necessary to avoid TS errors
(globalThis as any).buncg.config = BUNCG_CONFIG_FILE
	? await loadConfigFile(BUNCG_CONFIG_FILE, defaultConfig)
	: defaultConfig;

export let endpointAddress = "";
// biome-ignore lint/suspicious/noExplicitAny: Necessary to avoid TS errors
export const config = (globalThis as any).buncg.config as BunCG["config"];
export const App = new Elysia(config.elysia)
	.get("example", () => "Temporary sample output")
	.on("start", (ctx) => {
		// biome-ignore lint/style/noNonNullAssertion: Here is safe to call it in this way
		endpointAddress = `${ctx.server!.hostname}:${ctx.server!.port}`;
		console.log(`🧅 Usin Bun version ${Bun.version}`);
		console.info(`🦊 Elysia() is running at http://${endpointAddress}`);
	});

export type App = typeof App;
