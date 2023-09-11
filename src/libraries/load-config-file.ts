import { BunCGConfig } from "../constants/default-config";

export async function loadConfigFile<T = unknown>(
	filepath: string,
	defaultConfig: T = {} as T,
): Promise<T> {
	const config: Partial<BunCGConfig> = await import(filepath);

	return Object.assign({}, defaultConfig, config) as T;
}
