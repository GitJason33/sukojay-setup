function FileHandler(): string {
  return `
import files from "fs";

function fileExists(path: string): boolean {
  return files.existsSync(path);
}


function createFile(subpath: string, content: Function): void {
  let path = \`./file-path\`;
  if (!fileExists(path)) {
    try {
      files.writeFile(path, content(), (error) => {});
    } catch (err) {
      console.error("failed to create file " + path);
    }
  }
}


function createFolder(subpath: string): void {
  let path = \`./your-path\`;

  if (!fileExists(path)) {
    try {
      files.mkdirSync(path);
    } catch (err) {
      console.error("failed to create folder " + path);
    }
  }
}

export { 
  fileExists, 
  createFile, 
  createFolder
};
`;
}
export default FileHandler;
