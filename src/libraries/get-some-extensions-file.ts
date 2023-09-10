export function getSomeExtensionsFile(directory: string, fileName: string, extensionsWithoutDot: string[]): string | undefined {
  const { join } = require('path');
  const { existsSync } = require('fs');

  let file: string | undefined;

  for (let ext of extensionsWithoutDot) {
    const filePath = join(directory, `${fileName}.${ext}`);
    if (existsSync(filePath)) {
      file = filePath;
      break;
    }
  }

  return file;
}