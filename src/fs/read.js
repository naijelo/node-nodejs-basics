import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToRead = path.join(dirPath, "/files/fileToRead.txt");
const errMsg = "FS operation failed";

const read = async () => {
    fs.access(pathToRead, fs.constants.F_OK, (err) => {
        if (err) {
            throw Error(errMsg);
        } else {
            const readStream = fs.createReadStream(pathToRead);
            readStream.on("data", (chunk) => {
            console.log(chunk.toString());
        });
        }
    });
};

await read();