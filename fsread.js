import fs from "fs";


fs.readFile('./heloo.txt',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    console.log(data.toString());
})