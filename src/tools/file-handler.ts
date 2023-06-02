import * as files from "fs";
import { emptyContent } from "./utils.js";
import path from "path";

// ./path/to/file.ext
function fileExists(path: string): boolean {
  return files.existsSync(path);
}

function createFile(subpath: string, content: Function): void {
  let path = `./your-app/${subpath}`;
  if (!fileExists(path)) {
    try {
      files.writeFile(path, content(), (error) => {});
    } catch (err) {
      console.error("something is wrong with file " + path);
    }
  }
}

function createFolder(subpath: string): void {
  let path = subpath === "your-app" ? `./${subpath}` : `./your-app/${subpath}`;

  if (!fileExists(path)) {
    try {
      files.mkdirSync(path);
    } catch (err) {
      console.error("something is wrong with folder " + path);
    }
  }
}

function transferImage(icon = "favicon.ico"): void {
  createFile("public/favicon.ico", emptyContent);

  // first read all content of a folder
  files.readdir("./src", (error, images) => {
    if (error) {
      console.error("error reading files");
      return;
    }

    // Then filter the files to include only the icon
    const imageFiles = images.filter((file) => {
      const extension = path.extname(file).toLowerCase();
      return [".ico"].includes(extension);
    });

    imageFiles.forEach((file) => {
      const sourcePath = path.join("./src", file);
      const destinationPath = path.join("./your-app/public", file);

      const readStream = files.createReadStream(sourcePath);
      const writeStream = files.createWriteStream(destinationPath);

      readStream.pipe(writeStream);
    });
  });
}

export { fileExists, createFile, createFolder, transferImage };
