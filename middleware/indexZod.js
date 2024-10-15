const express = require('express')
const zod = require('zod')
const app = express()

const schema = zod.array(zod.number())
//write zod schema
// {
//     email: string=> email
//     password: minimum 8 letters
//     country: "IN","US" 
// }
const response = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal('IN').or(zod.literal('US'))
})
app.use(express.json())
app.post('/health-checkup', function(req, res){
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: 'invalid input'
        })
    }
    else{
        res.send({
            response
        })
    }
})

app.listen(3000)
