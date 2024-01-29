import path, {dirname} from "path";
import {fileURLToPath} from "url";
import { createHash } from "crypto";
import { createReadStream } from "fs";


const calculateHash = async () => {
    const dirPath = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(dirPath, "/files/fileToCalculateHashFor.txt");
    const readStream = createReadStream(pathToFile);
    const hash = createHash("sha256", readStream)
        .digest("hex");
    console.log(hash);
};

await calculateHash();