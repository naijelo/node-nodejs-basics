import fs from "fs";

const errMsg = "FS operation failed";
const pathToFiles = "./src/fs/files/";


const list = async () => {
    fs.readdir(pathToFiles, {withFileTypes: true}, (err, files) => {
        if (err)
          console.log(errMsg);
        else { 
          files.forEach(file => {
            if(!file.isDirectory()) {
              (async () => {
                  await fs.promises.stat((`${pathToFiles}/${file.name}`));
                  console.log(file.name);
              })();
            }
          });
        };
    });
};

await list();