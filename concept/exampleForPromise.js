// const fs = require('fs')

// function thamithaReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile('1.txt','utf-8',function(err, data){
//             resolve(data)
//         })
//     })
// }
// function toDone(data){
//     console.log(data)
// }
// thamithaReadFile().then(toDone)

const fs = require('fs')
function thamithaReadFile(){
    const p = new Promise(function(resolve){
        fs.readFile('1.txt','utf-8',function(err, data){
            resolve(data)
        })
    })
    return p
}
function toDone(data){
    console.log(data)
}
const a = thamithaReadFile()
console.log('aree',a)
a.then(toDone)