const os=require('os')
const fss=require('fs')
const a=fss.readFileSync('ms.txt')
console.log(a.toString())
console.log("hello")
const v=fss.unlinkSync('ms.txt')
if(fss.existsSync('ms.txt')){
    console.log("file not deleted")
}
else{
    console.log("hurray file deleted")
}