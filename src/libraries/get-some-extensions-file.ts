// First input has priority so, order is important
export function getSomeExtensionsFile(
	directories: string | string[],
	fileName: string,
	extensionsWithoutDot: string[],
): string | undefined {
	const { join } = require("path");
	const { existsSync } = require("fs");
	const possiblePaths = Array.isArray(directories)
		? directories
		: [directories];

	let file: string | undefined;

	for (const ext of extensionsWithoutDot) {
		for (const directory of possiblePaths) {
			const filePath = join(directory, `${fileName}.${ext}`);
			if (existsSync(filePath)) {
				file = filePath;
				break;
			}
		}

		if (file) {
			break;
		}
	}

	return file;
}
