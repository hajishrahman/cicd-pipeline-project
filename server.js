const http = require("http");

const VERSION = "v1.0.3"; // bump version again to test push trigger
const BUILD_TIME = new Date().toLocaleString();

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>CI/CD Demo</title>
          <style>
            body {
              margin: 0;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #f5f5f5;
              font-family: Arial, sans-serif;
              text-align: center;
            }
            h1 {
              color: #222;
            }
            p {
              font-size: 18px;
              margin: 6px;
            }
            .box{
              padding:30px;
              border-radius:10px;
              background:white;
              box-shadow:0 4px 12px rgba(0,0,0,0.1);
            }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>CI/CD Pipeline Demo</h1>
            <p>Version: ${VERSION}</p>
            <p>Build Time: ${BUILD_TIME}</p>
          </div>
        </body>
      </html>
    `);
  })
  .listen(3000, () => console.log("Server running on port 3000"));
//hi//