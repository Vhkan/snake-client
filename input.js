const { log } = require("console");

// Stores the active TCP connection object.
let connection = require("./client");

//Update play.js to pass the object returned from connect into the setupInput function.
const setupInput = (conn) => {
  connection = conn;
  
  const handleUserInput = function () {
    process.stdin.on('data', (key) => {
      if (key === "w") {
        console.log("Move up");
      } else if (key === "a") {
        console.log("Move left");
      } else if (key === "s") {
        console.log("Move down");
      } else if (key === "d") {
        console.log("Move right");
      } else if (key === '\u0003') {
        console.log("Game over");
        process.exit();
      }
    })
  };

  // \u0003 maps to ctrl+c input

  setupInput();
  handleUserInput();
};

module.exports = { setupInput };


// setup interface to handle user input from stdin
// const setupInput = function (conn) {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };