import path, {dirname} from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileUrlToPath } from "url";
import "./files/c";

const __filename = fileUrlToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();
const PORT = 3000;

let unknownObject;

if (random > 0.5) {
    import ("./files/a.json", {assert: {type: "json"}})
      .then((module) => {unknownObject = module.default});
} else {
    import ("./files/b.json", {assert: {type: "json"}})
      .then((module) => {unknownObject = module.default});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export {
    unknownObject,
    myServer,
};

