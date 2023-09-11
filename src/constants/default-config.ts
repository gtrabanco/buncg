import { Serve } from "bun";
import { ElysiaConfig } from "elysia";
import { getServerAddressToConfigure } from "../libraries/get-server-address-to-configure";
import { getServerPortToConfigure } from "../libraries/get-server-port-to-configure";

export const defaultConfig = {
	scenes: "src/scenes",
	enpoints: "src/endpoints",
	pages: "src/pages",
	assets: "public/assets",
	entrypoint: "src/index.ts", // This file is alwys imported on loaded
	elysia: {} as Partial<ElysiaConfig>,
	serve: {
		hostname: getServerAddressToConfigure(),
		port: getServerPortToConfigure(),
		development: !process.env.NODE_ENV?.toLowerCase().startsWith("prod"),
	} as Partial<Serve>,
};

export type BunCGConfig = Partial<typeof defaultConfig>;
