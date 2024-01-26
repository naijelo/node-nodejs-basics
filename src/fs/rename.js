import fs from "fs";
import { copyFile } from 'node:fs/promises';

const pathToWrong = "./src/fs/files/wrongFilename.txt";
const errMsg = "FS operation failed";

const rename = async () => {
    fs.access(pathToWrong, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(errMsg);
        } else {
            fs.promises.rename(pathToWrong, "./src/fs/files/properFilename.md");
        }
    });
};

await rename();