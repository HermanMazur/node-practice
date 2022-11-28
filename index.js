// const { getCurrentDate } = require('./dateUtils');
// // global.testData =
// console.log(process.argv);
// // console.log(process.env);
// // console.log(global.testData)
// // process.exit()

// console.log(211312313)

// console.log(__dirname);
// // console.log(__filename);


const Calc = require('calc-js').Calc; 

console.log(process.argv);
const [, , a, b] = process.argv;

console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());