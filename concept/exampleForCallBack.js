const fs = require('fs')
function thamithareadFile(cb){
    fs.readFile('1.txt', 'utf-8', function(err,data){
        cb(data)
    })
}

function toDone(data){
    console.log(data)
}

thamithareadFile(toDone)