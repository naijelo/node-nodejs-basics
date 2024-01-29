import { createReadStream, createWriteStream } from "fs";
import path, {dirname} from "path";
import { pipeline } from "stream/promises";
import {fileURLToPath} from "url";
import { createGunzip } from "zlib";


const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(dirPath, "/files/fileToCompress.txt");
const pathToArchive = path.join(dirPath, "/files/archive.gz");

const decompress = async () => {
    await pipeline(createReadStream(pathToArchive), createGunzip(), createWriteStream(pathToFile));
};

await decompress();