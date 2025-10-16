const fs = require('fs')
const path = require('path')
const http = require('http');
// const { error } = require('console');

let htmlfilepath = path.join(__dirname, "server1.html")
console.log(htmlfilepath);

const server = http.createServer((req, res) => {

    if (req.method === "GET") {
        if (req.url === "/") {
            fs.readFile(htmlfilepath, (error, data) => {
                if (error) {
                    res.end("failed to load server");
                }
                else {
                    res.end(data);
                }
            })
        }
    }

})

server.listen(3000, () => {
    console.log("server listening on port 3000")
})