import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import io from "socket.io-client";

const debugPort = "3353";
if (process.env.NODE_ENV === "development") {
  localStorage.debug = "*";
}

const socket =
  process.env.NODE_ENV === "development" ? io(`http://localhost:${debugPort}`) : io();

// To set the room code to 12345 append /12345 to the end of the url like so:
// http://localhost:3000/12345
const roomCode = window.location.pathname.match(/\/(\w+)$/)![1];
console.log("Room code:", roomCode);

ReactDOM.render(
  <React.StrictMode>
    <App roomCode={roomCode} socket={socket} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
