import fs from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from "url";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(dirPath, "/files/fileToRead.txt");

const read = async () => {
    const readStream = fs.createReadStream(pathToFile);
    readStream.on("data", (chunk) => {
        process.stdout.write(chunk);
    })
};

await read();