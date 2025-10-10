const fs=require('fs')

// const rstream=fs.createReadStream("fs_modulee.txt","utf8")
// rstream.on('data',(chunk)=>{
// console.log(chunk)
// })
// rstream.on('end',()=>{
// console.log("finished success")
// })

// const wstream=fs.createWriteStream("fs_modulee.txt");
// wstream.write("hi guyssss how are you");
// wstream.end()
// wstream.on('finish',()=>{
//     console.log("writing completed")
// })

// const readable=fs.createReadStream("fs_modulee.txt","utf8")
// const writeable=fs.createWriteStream("copy.txt")
// readable.pipe(writeable)