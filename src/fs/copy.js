import fs from "fs";
import { copyFile } from "node:fs/promises";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToFiles = path.join(dirPath, "/files");
const pathToCopy = path.join(dirPath, "/files_copy");

const errMsg = "FS operation failed";

const copy = async () => {
    await fs.readdir(pathToFiles, {withFileTypes: true}, async (err, files) => {
        if (err) {
            throw Error(errMsg);
        }
        await fs.mkdir(pathToCopy, (err) => {
            if (err) {
                throw Error(errMsg);
            } else {
                files.forEach((file) => {
                    copyFile(`${pathToFiles}/${file.name}`, `${pathToCopy}/${file.name}`);
                });
            }
        });
    });
};

await copy();