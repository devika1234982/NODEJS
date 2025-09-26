const fs=require("fs");

// READ A FILE

// fs.readFile("module1.txt","utf8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log("file content:",data);
//     }
// })


// WRITE A FILE

// fs.writeFile("module1.txt","hello synnefo",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log("File written success");
//     }
// })


// DELETE A FILE

// fs.unlink("module1.txt",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log("delete success");
//     }
// })

// APPEND A FILE

// fs.appendFile("module1.txt","hi gooys",(err)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     else 
//     {
//         console.log(" success");
//     }
// })

// CREATE A FOLDER


// fs.mkdir("myFolder",(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }  
//     else{
//         console.log("folder created")
//     } 
// })

// DELETE A FOLDER


// fs.rmdir("myFolder",(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }  
//     else{
//         console.log("folder deleted")
//     } 
// })

// EXIST OR NOT



// if(fs.existsSync("fs_module.txt"))
//     {
//         console.log("exist")
//     }  
//     else
//     {
//         console.log("not exist")
//     } 


// RENAME A FILE

// fs.rename("fs_module.txt","fs_modulee.txt",(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else{
//         console.log("success")
//     }
// })