import express from "express";
const app=express()
app.use(express.json())
const port=5000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
