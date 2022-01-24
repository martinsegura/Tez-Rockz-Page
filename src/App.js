import React from "react";
import { useUserContext } from "./context/user-context";
import { Link, Routes, Route } from "react-router-dom";
import { About } from './pages/About'
import { Play } from './pages/Play'
import "./css/normalize.css";
import "./css/react-styles.css";
import "./css/index.css";





function App() {
  
  const app = useUserContext();



  return (

    <>
    
      <nav className="nav">
        <div id="title-logo">
          <h2>TezRockz</h2>
        </div>
        <ul id="nav-buttons-1">
          {/* <Link className='nav-link' to="/">Play</Link>
          <Link className='nav-link' to="/about">About</Link>  */}
          <a
            target="blank"
            href="https://objkt.com/collection/KT1NtnfBS4zDrxMpJzt6wVGpEBooLM6SXwhT"
            className="nav-link"
          >Shop</a>

        </ul>
        <div id="syncwallet-container">
          <p id="syncwallet-wallettext">
          {!app.activeAccount ? "xXxXx...xXxXx" : app.address.substr(0, 5) + "..." + app.address.substr(-5)}
          </p>

          <button onClick={() => !app.activeAccount ? app.logIn() : app.logOut()}  id="syncwallet-button"> 
           {!app.activeAccount ? "sync" : "unsync"}
       </button>

       
        </div>
      </nav>


   
        <Routes>
            <Route path="/" element={<Play />} />
            <Route path="/about" element={<About />} />
          </Routes>
    


    </>


  )

}



export default App;

