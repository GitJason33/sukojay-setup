import * as files from "fs";
import { emptyContent } from "./utils.js";
import path from "path";
function fileExists(path) {
    return files.existsSync(path);
}
function createFile(subpath, content) {
    let path = `./your-app/${subpath}`;
    if (!fileExists(path)) {
        try {
            files.writeFile(path, content(), (error) => { });
        }
        catch (err) {
            console.error("something is wrong with file " + path);
        }
    }
}
function createFolder(subpath) {
    let path = subpath === "your-app" ? `./${subpath}` : `./your-app/${subpath}`;
    if (!fileExists(path)) {
        try {
            files.mkdirSync(path);
        }
        catch (err) {
            console.error("something is wrong with folder " + path);
        }
    }
}
function transferImage(icon = "favicon.ico") {
    createFile("public/favicon.ico", emptyContent);
    files.readdir("./src", (error, images) => {
        if (error) {
            console.error("error reading files");
            return;
        }
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
//# sourceMappingURL=file-handler.js.map