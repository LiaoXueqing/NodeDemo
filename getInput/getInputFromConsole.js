const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('你如何看待 Node.js 中文网？', (answer) => {
    // TODO：将答案记录在数据库中。
    console.log(`感谢您的宝贵意见：${answer}`);

    //关闭 readline.Interface 实例，并放弃对 input 和 output 流的控制。
    rl.close();
});