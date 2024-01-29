import { createReadStream, createWriteStream } from "fs";
import path, {dirname} from "path";
import { pipeline } from "stream/promises";
import {fileURLToPath} from "url";
import { createGzip } from "zlib";

const dirPath = dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(dirPath, "/files/fileToCompress.txt");
const pathToArchive = path.join(dirPath, "/files/archive.gz");


const compress = async () => {
    await pipeline(createReadStream(pathToFile), createGzip(), createWriteStream(pathToArchive));
};

await compress();