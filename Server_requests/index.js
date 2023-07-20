import express from 'express'

const app = express()

app.listen(3000, ()=>{
    console.log("Sever0 launched on 3000")
})

app.get("/", (req,res)=>{

    res.send("welcome to Server0")
})

