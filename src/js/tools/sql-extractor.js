import path from 'path';
import files from 'fs';
function extract_sql(pathToFile) {
    let sql = "";
    let corPath = `./data/${pathToFile}`;
    console.log(corPath);
    try {
        if (path.extname(pathToFile) === ".sql") {
            sql = files.readFileSync(corPath, "utf8");
        }
    }
    catch (error) {
        console.error(`file ${{ corPath }} not found!`);
    }
    finally {
        console.log('Done fetching ' + pathToFile);
    }
    return sql;
}
export default extract_sql;
//# sourceMappingURL=sql-extractor.js.map