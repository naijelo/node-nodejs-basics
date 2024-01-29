const parseEnv = () => {
    const prefix = "RSS_";
    const resultArray = [];

    for (let el in process.env) {
        if (el.startsWith(prefix)) {
            const result = `${el}=${process.env[el]}`;
            resultArray.push(result);
        }
    }
console.log(resultArray.join("; "));
};

parseEnv();