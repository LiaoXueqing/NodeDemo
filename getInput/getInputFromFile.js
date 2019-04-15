const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('sample.txt'),
    crlfDelay: Infinity
});
let index = 0;
rl.on('line', (line) => {
    index++
    console.log(`文件第${index}每行内容：${line}`);
});