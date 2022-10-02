const express=require('express')
const app=express()
const port=4000
app.get("/",(req,res)=>{
    res.send('kkkml')
})
app.listen(port,()=>{
    console.log(`app listening in http://localhost:${port}`)
})