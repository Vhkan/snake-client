// Stores the active TCP connection object.
let connection;

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

const handleUserInput = function(data) {
  const MOVES = {
    w: "Move: up",
    a: "Move: left",
    s: "Move: down",
    d: "Move: right"
  };

  if (MOVES[data]) {
    connection.write(MOVES[data]);
  }
  if (data === '\u0003') {
    console.log("Game Over!");
    process.exit();
  }
};

module.exports = { setupInput };
