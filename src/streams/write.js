import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(dirPath, "/files/fileToWrite.txt");

const write = async () => {
    const writeStream = fs.createWriteStream(pathToFile, {flags: "a"});
    process.stdin.pipe(writeStream);
};

await write();