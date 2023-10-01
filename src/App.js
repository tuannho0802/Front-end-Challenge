import React from 'react';
import './App.css';
import Home from './Pictures/Home.png';
import { Typography } from 'antd';
import Explore from './components/ExploreWidget';
import Profiles from './components/ProfilesWidget';
import Store from './components/StoreWidget';
import Developer from './components/Developer';
import Message from './components/Message';
import LogOut from './components/LogOut';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Typography className="title1" level={2}>
            Welcome to
          </Typography>
          <Typography className="title2">GrainLogic!</Typography>
          <div className="flex-box">
            <img className="home-img" alt="Home" height={500} src={Home} />{' '}
            <br />
            <div className="Widget">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                  <Explore /> <Profiles />
                  <Store />
                </div>
                <div style={{ display: 'flex' }}>
                  <Developer /> <Message />
                  <LogOut />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
