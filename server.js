const http = require('http');

const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Node.js</title>
    </head>
    <body>
        <h1>Node.js</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi animi consequuntur inventore enim necessitatibus nihil minima ipsam, laudantium officia aspernatur soluta? Explicabo sint aperiam repudiandae provident repellat libero similique necessitatibus recusandae. Cum rem suscipit minus illo reiciendis quos alias! Ipsa magni voluptatibus odit quos, dicta id explicabo sint pariatur commodi.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi animi consequuntur inventore enim necessitatibus nihil minima ipsam, laudantium officia aspernatur soluta? Explicabo sint aperiam repudiandae provident repellat libero similique necessitatibus recusandae. Cum rem suscipit minus illo reiciendis quos alias! Ipsa magni voluptatibus odit quos, dicta id explicabo sint pariatur commodi.
        </p>
    </body>
</html>
`;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
}).listen(3000, () => console.log('Сервер работает'));

 