const http=require("http");
const path=require("path");
const fs=require("fs");
 
// //  serverCreation
const port=3000;
// const server=http.createServer((req,res)=>{
//    const filpath=path.join(__dirname,"index.js");

// })

// // calling
// server.listen(port,()=>{
//    console.log(`server running at http://localhost:${port}`);


   const server=http.createServer((req,res)=>{
   const filepath=path.join(__dirname,'index.html');
    if()
   fs.readFile(filepath,(err,data)=>{
     if(err)
     {
      res.writeHead(500,{'content-type':'text/plain'});
      res.end(`internal server error`);

     }
     else
     {
      res.writeHead(200,{'content-type':'text/html'});
      res.end(data);
     }
   })
})

server.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);

})