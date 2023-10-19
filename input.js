// Stores the active TCP connection object.
let connection;
const { connect } = require("http2");
const { createConnection } = require("net");

//Update play.js to pass the object returned from connect into the setupInput function.
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  //Handling user input event on exiting the game
  stdin.on("data", handleUserInput);
  return stdin;
};

//Moving the snake commands  
const handleUserInput = function(data) {
  if (data === 'w') {
    console.log(connection.write("Move: up"));
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");

  }
  //to exit the game=>   // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    connection.write("Game over");
    process.exit();
  }
};

module.exports = { setupInput };
