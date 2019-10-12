const http = require("http");
const app = require("./app");
const port = 1234;

const serverStart = (port, requestListener) => {
  const server = http.createServer(requestListener);

  return server.listen(port, error => {
    if (error) {
      console.log(`Failed to start server on port ${port}`, error);
      return;
    }
    console.log(`Server started on port ${port}`);
  });
};

module.exports = serverStart(port, app.callback());
