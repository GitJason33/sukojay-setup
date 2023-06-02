import * as Init from "./tools/file-init.js";
import { createFolder } from "./tools/file-handler.js";

// main folder for your app
createFolder("your-app");

Init.Folders();
Init.Configs();
Init.Files();

