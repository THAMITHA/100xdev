const express = require('express')
const app = express()
const user = [{
    name: 'john',
    kidneys : [{
        healthy: false
    }]
}]
app.get('/', function(req, res){
    const johnKidneys = user[0].kidneys
    const numberOfKidneys = johnKidneys.length
    let numberOfHealthyKidneys = 0
    let numberOfUnHealthyKidneys = 0
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys++
        }
    }
    numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys 
    console.log(numberOfHealthyKidneys)
    console.log(numberOfUnHealthyKidneys)
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

app.use(express.json())
app.post('/', function(req, res){
    const healthy = req.body.healthy
    user[0].kidneys.push({
        healthy: healthy
    })
    res.json({
        msg: 'Done!'
    })
})

app.put('/', function(req, res){
    if(isThereAtleastOneUnHealthyKidney()){
        for(let i=0;i<user[0].kidneys.length;i++){
            user[0].kidneys[i].healthy = true
        }
        res.json({})
    }
    else{
        res.status(411).json({
            msg: 'you do not have bad kidneys'
        })
    }
    
})


function isThereAtleastOneUnHealthyKidney(){
    let UnHealthyKidneys = false 
    for(let i=0;i<user[0].kidneys.length;i++){
        if(!user[0].kidneys[i].healthy){
            UnHealthyKidneys= true
        }
    }
    return UnHealthyKidneys
}
app.delete('/', function(req, res){
    const newArray = []
    if(isThereAtleastOneUnHealthyKidney()){
        for(let i=0;i<user[0].kidneys.length;i++){
            if(user[0].kidneys[i].healthy){
                newArray.push({healthy:true})
            }
        }
        user[0].kidneys= newArray
        res.json({
            msg: 'done!'
        })
    }
    else{
        res.status(411).json({
            msg: 'you do not have bad kidney to remove'
        })
    }
})
app.listen(3000)
