const http = require('http');

const port = 8080;

const app = require('./app');

// const server = http.createServer((req,res)=> {
// res.end(`hello hello`);

// });

const server = http.createServer(app);

server.listen(port, ()=>{
  console.log(`server listen on port ${port}`);  
});