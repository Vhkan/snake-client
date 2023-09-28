const net = require("net");
const { connect } = require('./client');
const { setupInput} = require('./input');

console.log("Connecting ...");
//Getting the connection object
const connection = connect();
//Passing a connection object
setupInput(connection);
