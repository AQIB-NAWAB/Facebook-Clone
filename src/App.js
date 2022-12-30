import './App.css';
import Header from './Header.js';
import Sidebar from "./Sidebar.js";
import Feed from './Feed';
import Widjets from './Widjets';
import Login from "./Login.js"
import React, { useState } from 'react';



function App() {
 
  return (
    <div className="App">
        <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        <Widjets/>
      </div>
    </div>
        
  );
}

export default App;
