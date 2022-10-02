const https=require('http')
const fse=require('fs')
const port=process.env.PORT || 4000;
const server=https.createServer((req,res)=>{
    res.statuscode=200;
    res.setHeader('content-type','text/html')
    if(req.url=="/"){
        res.statusCode=200
        res.end("<h1>Yup!srver working in perfect manner</h1>")
    }
    else if(req.url=="/about"){
        res.statusCode=200
        res.end("<h2>this is about page</h2>")
    }
    else if(req.url=="/sam"){
        res.statusCode=200
        const sdata=fse.readFileSync("./inde.html")
        res.end(sdata)
    }
    else{
        res.statusCode=404
        res.end("<h1>The page not found</h1>")
    }
})
server.listen(port,()=>{
    console.log(`server is listening  in ${port}`)

})