const { isModuleNamespaceObject } = require("util/types");

const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    //Sending "Move up" on connection to the server
  });

  // Writing name
  conn.write("Name: Vdm");

  //Sending a message to the player  
  conn.write("Go!");

  conn.write("Move: up");

  //Connection event handler(success/failure)
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });
  return conn;
};

//console.log("Connecting ...");
//connect();

module.exports = { connect };

