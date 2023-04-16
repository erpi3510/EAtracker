import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import Dashboard from "./component/Dashboard.js";
import Notifications from './component/Notifications.js';
import Ueberblick from './component/Ueberblick.js';
import Neue from './component/neue.js';
import Menu from './component/menu.js';
import Header from './component/Header.js';

function App() {
  return (
    <div className="App"> 
      <Header />
      <Notifications />
      <Dashboard />
      <Ueberblick />
      <Neue />
      <Menu />
    </div>
  );
}
export default App;
