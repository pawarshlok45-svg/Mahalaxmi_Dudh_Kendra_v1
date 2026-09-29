const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
<h1>Mahalaxmi Dudh Kendra</h1>
<p>Welcome to Mahalaxmi Dudh Kendra.</p>
<p>Fresh Milk, Curd, Paneer and Other Dairy Products.</p>
`);
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
