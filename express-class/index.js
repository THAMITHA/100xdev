const express = require('express')
const app = express()
const user = [{
    name: 'jhon',
    kidneys:[
        {
            healthy: false
        }
    ]
}]

app.get('/', function(req, res){
   const jhonKidneys = user[0].kidneys
   const numberOfKidneys = jhonKidneys.length
   let numberOfHealthyKidneys = 0
   for(let i=0;i<numberOfKidneys;i++){
    if(jhonKidneys[i].healthy){
        numberOfHealthyKidneys++
       } 
   }
   const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys 
//    console.log(numberOfKidneys)
//    console.log(jhonKidneys)
   console.log(numberOfHealthyKidneys)
//    console.log(numberOfUnHealthyKidneys)
   res.send({
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
        msg: 'done!'
    }
    )
})

app.put('/', function(req, res){
 for(let i=0;i< user[0].kidneys.length;i++){
    user[0].kidneys[i].healthy= true
  }  
  res.json({})
})

app.delete('/',function(req, res){
    const newArray = []
    for(let i=0;i<user[0].kidneys.length;i++){
        if(user[0].kidneys[i].healthy){
            newArray.push({healthy: true})
        }
    }
    user[0].kidneys= newArray
    res.json({msg: "done"})
})
app.listen(3000)

