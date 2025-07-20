import fs from "fs"
console.log(fs);
fs.readFile('./heloo.txt', (err, data) => {
    if (err) {
        console.log(err);

    }
    else {
        console.log(data.toString());

    }
})
const read = fs.createReadStream('./heloo.txt')
const write = fs.createWriteStream('./hai.txt')
read.pipe(write)
