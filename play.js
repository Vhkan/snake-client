// const net = require("net");
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");

//Passing a connection object
setupInput(connect());

