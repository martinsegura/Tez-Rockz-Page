import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserContextProvider } from "./context/user-context";
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <UserContextProvider>
    <App />
  </UserContextProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);


console.log("Hello there! You rock! :)");

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  alert("WARNING: this game is NOT compatible with this device, be sure to play it on a computer.")
 }



 