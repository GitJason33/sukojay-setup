import FileHandler from "../components/file-handle.js";
import Git_Ignore from "../components/git-ignore.js";
import Html from "../components/html.js";
import httpServer from "../components/http-server.js";
import Package from "../components/package.js";
import Readme from "../components/readme.js";
import SassConfig from "../components/sass-config.js";
import SassIndex from "../components/sass-index.js";
import SassUtils from "../components/sass-util.js";
import SassVars from "../components/sass-vars.js";
import SassVendors from "../components/sass-vendors.js";
import TypescriptConfig from "../components/typescript.js";
import { createFile, createFolder, transferImage } from "./file-handler.js";
import { emptyContent } from "./utils.js";

function Folders(): void {
  createFolder("public");
  createFolder("public/data");
  createFolder("public/media");
  createFolder("public/media/videos");
  createFolder("public/media/images");
  createFolder("public/media/audios");
  createFolder("public/pages");

  createFolder("src");
  createFolder("src/components");
  createFolder("src/server");

  createFolder("src/tools");
  createFolder("src/config");
  createFolder("src/client/styles");
  createFolder("src/client/styles/css");
  createFolder("src/client/styles/sass");
  createFolder("src/client/styles/sass/helpers");
  createFolder("src/client/styles/sass/components");
  createFolder("src/client/styles/sass/responsive");

  createFolder("build");
}

function Files(): void {
  createFile("build/minified-bundled-files-here.txt", emptyContent);

  createFile("public/index.html", Html);
  createFile("public/data/xml-json-sql.txt", emptyContent);
  createFile("public/media/audios/audios.txt", emptyContent);
  createFile("public/media/videos/videos.txt", emptyContent);
  createFile("public/media/images/icons-pics.txt", emptyContent);
  createFile("public/pages/some-other-html.txt", emptyContent);
  transferImage();

  createFile("src/components/website-main-comps.txt", emptyContent);
  createFile("src/config/database.ts", emptyContent);
  createFile("src/tools/utilities.txt", emptyContent);
  createFile("src/server/file-handler.ts", FileHandler);

  createFile("src/server/server.ts", httpServer);

  createFile("src/styles/all-styles-here.txt", emptyContent);
  createFile("src/styles/css/compiled-css-here.txt", emptyContent);
  createFile("src/styles/sass/sass-here.txt", emptyContent);
  createFile(
    "src/styles/sass/components/static-comps.txt",
    () => `like header, footer, navbar, etc.`
  );
  createFile(
    "src/styles/sass/responsive/read.txt",
    () => `all responsiveness here`
  );

  // SASS styles template
  createFile("src/styles/sass/index.scss", SassIndex);
  createFile("src/styles/sass/helpers/_vendors.scss", SassVendors);
  createFile("src/styles/sass/helpers/_utils.scss", SassUtils);
  createFile("src/styles/sass/helpers/_vars.scss", SassVars);
  createFile("src/styles/sass/helpers/_config.scss", SassConfig);
}

function Configs(): void {
  createFile(".gitignore", Git_Ignore);
  createFile("README.md", Readme);
  createFile("package.json", Package);
  createFile("tsconfig.json", TypescriptConfig);
}

export { Folders, Files, Configs };
