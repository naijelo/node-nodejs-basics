import fs from "fs";

const errMsg = "FS operation failed";
const pathToRead = "./src/fs/files/fileToRead.txt";

const read = async () => {
    fs.access(pathToRead, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(errMsg);
        } else {
            const readStream = fs.createReadStream(pathToRead);
            readStream.on("data", (chunk) => {
            console.log(chunk.toString());
        });
        }
    });
};

await read();