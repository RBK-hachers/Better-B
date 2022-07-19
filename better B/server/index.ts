import express from "express";
const app=express()
app.use(express.json())
const port=2000

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
