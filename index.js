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

// const fs = require('fs');
// const path = require('path');

// const qwe = path.resolve('./qwe')
// const qwe1 = './qwe'

// fs.readFile('./data.txt', 'utf8', (error, data) => {
//     if (error) {
//         console.error(error);
//     }
//     console.log(data)
// })


// ассинхронность
// fs.readFile(path.resolve('./package.json'), 'utf8', (error, data) => {
//     if (error) {
//         console.error(error);
//     }
//     console.log(data)
// })

// ссинхронное
// const data = fs.readFileSync(path.resolve('./data.txt'), 'utf8')
// console.log(data)
//     console.log(12314563)

const fs = require('fs').promises;
const path = require('path');

// fs.readFile(path.resolve('./data.txt'), 'utf8')
//     .then(data => {
//     console.log(data)
//     })
// .catch(err => console.log(err))

(async () => {
try {
    const data = await fs.readFile('./package.json', 'utf8')
    console.log(JSON.parse(data).dependencies)
    
    // const newContent = `${data} school`
    // await fs.writeFile('./data1.txt', newContent, 'utf8');

    // await fs.rename ('./dataUtilsNewName', './tmp/dataUtilsNewName')

    console.log(await fs.readdir('./tmp'));

    // await fs.unlink('./tmp/dataUtilsNewName')
    await fs.appendFile('./data1.txt', ' lecture', 'utf8')

} catch (error) {
    console.log(error)
}
})() 