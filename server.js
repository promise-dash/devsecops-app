const http = require("node:http");

const PORT = Number(process.env.PORT || 8080);

const server = http.createServer((req, res) => {
  if (req.url === "/healthz") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ status: "ok" }));
  }

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(
      JSON.stringify({
        application: "devsecops-sample-app",
        version: process.env.APP_VERSION || "local",
        message: "Running on the DevOps delivery platform",
      }),
    );
  }

  res.writeHead(404, { "content-type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Application listening on port ${PORT}`);
});
