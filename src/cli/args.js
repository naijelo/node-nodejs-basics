const parseArgs = () => {
    const prefix = "--";
    const resultArray = [];
    
    for (let [i, el] of process.argv.entries()) {
        if (el.startsWith(prefix)) {
            const propName = el.slice(prefix.length);
            const result = `${propName} is ${process.argv[i + 1]}`;
            resultArray.push(result);
        }
    }
    console.log(resultArray.join(", "));
};

parseArgs();