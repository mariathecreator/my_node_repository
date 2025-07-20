import http from "http";
import fs from "fs";

//create server
const server = http.createServer((req, res) => {

    //request to the server
    console.log(req.url);
    console.log(req.method);

    //response from the server
    res.setHeader('Content_Type', 'text/html')


    //res.write("<h1>I know i'm an icon</h1>")
    //res.write('<p>watch me with the lights on</p>')
    //res.end()


    if (!fs.existsSync('./server.html')) {
        fs.writeFile('./server.html', '.html', (err, data) => {
            if (err) { console.log(err); }
            else {
                console.log(data);

            }
        })
    }
    else {
        fs.readFile('./server.html', (err, data) => {
            if (err) {
                console.log(err);
                res.end();
            }
            else {
                res.write(data);
                console.log(data);

                res.end();
            }
        })
    }
})
//listen to the client req
server.listen(3000, 'localhost', () => {
    console.log('listening to request');

})