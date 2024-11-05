const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write('<h1 style="color:red">Hello world</h1>');
    res.write('<h2 style="color:blue">i love it here</h2>');
    res.end();
  })
  .listen(3000, () => {
    console.log(`server is running on http://localhost:${3000}`);
  });
