const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
app.use(bodyparser.json())
app.post('/backend/conversion', function(req, res){
  const message = req.query.message
  console.log(message)
  //machine learning model
  res.status(401).send(
    "2 + 2 = 4"
  )
})

app.listen(port,()=>{
    console.log(`app is listening at ${port}`)
})