const express = require('express')
const app = express()

function oldAgeMiddleware(req, res, next){
    const age = req.query.age
    if(age>=14){
        next()
    }
    else{
        res.json({
            msg:'Sorry your not of right age'
        })
    }
}

app.use( oldAgeMiddleware)
app.get('/ride1', function(req, res){
    if(req.query.age){
        res.json({
            msg:'you have successfully riden the ride 1'
        })
    }
})

app.get('/ride2', function(req, res){
    if(req.query.age){
        res.json({
            msg:'you have successfully riden the ride 2'
        })
    }
})
app.listen(3000)
