import fs from "fs";

const data = "I am fresh and young";
const errMsg = "FS operation failed";
const path = './src/fs/files/fresh.txt'

const create = async () => {
    fs.access(path, fs.constants.F_OK, (err) => {
        if (err) {
            fs.writeFile(path, data, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            console.log(errMsg);
        }
    });
}
await create();