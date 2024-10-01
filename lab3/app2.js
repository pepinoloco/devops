import http from 'node:http'
import os from 'node:os'

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World! from ' + os.version() + '\n\n');
  res.write(JSON.stringify(os.networkInterfaces()));
  res.end()
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
