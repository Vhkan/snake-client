const { isModuleNamespaceObject } = require("util/types");
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
    console.log("Successfully connected to game server!");
    //Sending "Move up" on connection to the server
    conn.write("Move: up");
  });

  conn.write("Name: VDM");
  
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  //Receiving info from the client
  // conn.on("data", (data) => {
  //   console.log("Server says: ", data);
  // });
  
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect }; 