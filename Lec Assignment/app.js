const http = require('http');

let lastUseraName = '';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            lastUseraName = decodeURIComponent(message);
            res.writeHead(302, {'Location': '/users'});
            return res.end();
        });
    }

        if (url === '/users'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html>');
        res.write('<head><title>User Name</title></head>');
        res.write(`<body><ul><li>${lastUseraName || 'No user submitted yet'}</li></ul></body>`);
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);