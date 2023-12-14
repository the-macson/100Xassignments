const fs = require('fs');
let fileData;
try {
    fileData = fs.readFileSync('./file.txt','utf-8')
} catch (err){
    console.log(err);
}
fileData = fileData.split(" ").filter((data)=>{
    if(data != " ") return data.trim(" ");
}).join(" ");
fs.writeFileSync('./file.txt',fileData)