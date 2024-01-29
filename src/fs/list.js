import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToFiles = path.join(dirPath, "/files");
const errMsg = "FS operation failed";

const list = async () => {
    fs.readdir(pathToFiles, {withFileTypes: true}, (err, files) => {
        if (err)
          throw Error(errMsg);
        else { 
          files.forEach(file => {
            if(!file.isDirectory()) {
              (async () => {
                  await fs.promises.stat((`${pathToFiles}/${file.name}`));
                  console.log(file.name);
              })();
            }
          });
        };
    });
};

await list();