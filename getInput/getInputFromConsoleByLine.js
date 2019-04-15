const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//循环等待控制台输入，直到按ctrl + c 或者 ctrl + d
rl.on('line', (input) => {
    console.log(`接收到：${input}`);
});
