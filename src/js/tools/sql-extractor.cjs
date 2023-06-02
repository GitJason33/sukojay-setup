"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const files = require('fs');
function extract_sql(pathToFile) {
    let sql = "";
    let corPath = `${__dirname}/data/${pathToFile}`;
    try {
        if (path.extname(pathToFile) === ".sql") {
            sql = files.readFileSync(corPath, "utf-8");
        }
    }
    catch (error) {
        console.error(`file ${corPath} not found!`);
    }
    finally {
        console.log('Done fetching ' + corPath);
    }
    return sql;
}
exports.default = extract_sql;
//# sourceMappingURL=sql-extractor.cjs.map