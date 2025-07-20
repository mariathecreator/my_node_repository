import fs from "fs";

if(!fs.existsSync('./node-crash')){
    //mkdir-make_directory
fs.mkdir('./node-crash',(err)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log('directory created');
    }  
})
}
//rmdir-remove_directory
else{
    fs.rmdir('./node-crash',(err)=>{
        if(err){
            console.log(err);
            
        }
        console.log('folder deleted');
        
    })
}