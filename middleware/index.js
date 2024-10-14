const express = require('express')
const app = express()

function userMiddleware(req, res, next){
    if(!(req.headers.username == 'harkirat' && req.headers.password == 'pass')){
        res.status(403).json({
            msg: 'incorrect input'
        })
    }
    else{
        next()
    }
}

function kidneyMiddleware(req, res, next){
    if(req.query.kidneyId!=1 && req.query.kidneyId!=2){
        res.status(403).json({
            msg: 'incorrect input'
        })
    }
    else{
        next()
    }
}
app.get('/health-checkup', userMiddleware, kidneyMiddleware, function(req, res){
   res.send('your healthy') 
})

app.get('/kidney-checkup', function(req, res){
    res.send('your kidney is healthy')
})

app.get('/heart-check', function(req, res){
    res.send('your heart is healthy')
})
        
app.listen(3000)

