import fs from "fs"

fs.writeFile('./hai.txt','This proves that the write file function works...',(err)=>{
    if(err){
        console.log(err);
        
    }
        else{
    console.log('succefull');
}
})