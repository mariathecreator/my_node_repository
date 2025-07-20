import http from "http";
import fs from "fs";
import lodash from "lodash";


const server = http.createServer((req, res) => {

    //choosing random number from 0-20
    const num = lodash.random(0, 20)
    console.log(num);

    console.log(req.url);

    //res.setHeader('Content_Type', 'text/html')

    let p = './plain/';
    switch (req.url) {
        case '/':
            p += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            p += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.setHeader('Location', '/about')
            res.statusCode = 301;
            res.end();
            break;
        default:
            p += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(p, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        else {
            // res.write(data);
            res.end(data);
        }
    })
})
server.listen(3000, 'localhost', () => {
    console.log('listening to request');

})