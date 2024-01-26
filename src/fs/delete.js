import fs from "fs";

const pathToUnlink = "./src/fs/files/fileToRemove.txt";
const errMsg = "FS operation failed";

const remove = async () => {
    fs.unlink(pathToUnlink, (err) => {
        if (err) {
            console.log(errMsg);
        } else {
            return;
        }
    });
};

await remove();