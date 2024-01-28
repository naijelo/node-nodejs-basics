import fs from "fs";

const data = "I am fresh and young";
const errMsg = "FS operation failed";
const pathToFresh = new URL("files/fresh.txt", import.meta.url);

const create = async () => {
    fs.writeFile(pathToFresh, data, {flag: "wx"}, (err) => {
        if (err) {
            throw Error(errMsg);
        }
    });
}
await create();