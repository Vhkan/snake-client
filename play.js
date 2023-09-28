const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "172.27.239.219",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected!");
  });
  
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });
  
  return conn;
};


console.log("Connecting ...");
connect();