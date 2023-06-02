function httpServer(): string {
  return `
const http = require("node:http");
const PORT = 3000;

const server = http.createServer( (request, response) => {
  let status_code = 200;
  let html = "<h1>Node Server is running</h1>"; 

  response.writeHead( status_code, { "content-type": "text/html" } );
  response.end(html);
});


server.listen(PORT, () => {
  console.log(\`Node server running on port ` + "${PORT}" + `\`);
});
`;
}
export default httpServer;
