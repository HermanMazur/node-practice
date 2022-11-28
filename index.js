// // const { getCurrentDate } = require('./dateUtils');
// // // global.testData =
// // console.log(process.argv);
// // // console.log(process.env);
// // // console.log(global.testData)
// // // process.exit()

// // console.log(211312313)

// // console.log(__dirname);
// // // console.log(__filename);


// const Calc = require('calc-js').Calc;

// // console.log(process.argv);
// // const [node,index , a, b] = process.argv;
// // const [, , a, b] = process.argv;

// const a = process.argv[2];
// const b = process.argv[3];

// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// const path = require('path');
// console.log(path.resolve('dateUtils.js'))

const fs = require('fs');
const path = require('path');

const qwe = path.resolve('./qwe')
const qwe1 = './qwe'

// fs.readFile('./data.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.error(error);
//     }
//     console.log(data)
// })

fs.readFile(path.resolve('./package.json'), 'utf8', (error, data) => {
    if (error) {
        console.error(error);
    }
    console.log(data)
})