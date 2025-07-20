import fs from "fs";

if(fs.existsSync('./hello.txt')){
    fs.unlink('./hello.txt',(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('file deleted ');
        
    })
}

else{
    fs.writeFile('./hello.txt','Hello! Good morning... Have a nice day!!!',(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('file created');
        
    })
}