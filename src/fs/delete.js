import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToUnlink = path.join(dirPath, "/files/fileToRemove.txt");
const errMsg = "FS operation failed";

const remove = async () => {
    fs.unlink(pathToUnlink, (err) => {
        if (err) {
            throw Error(errMsg);
        } else {
            return;
        }
    });
};

await remove();