import fs from "fs";
import { copyFile } from "node:fs/promises";

const pathToFiles = "./src/fs/files";
const pathToCopy = "./src/fs/files_copy";
const errMsg = "FS operation failed";

const copy = async () => {
    await fs.readdir(pathToFiles, {withFileTypes: true}, async (err, files) => {
        if (err) {
            console.log(errMsg);
            return;
        }
        fs.mkdir(pathToCopy, (err) => {
            if (err) {
                console.log(errMsg);
            } else {
                files.forEach((file) => {
                    if(!file.isDirectory()) {
                        copyFile(`${pathToFiles}/${file.name}`, `${pathToCopy}/${file.name}`);
                    }
                });
            }
        });
    });
};

await copy();