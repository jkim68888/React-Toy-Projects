import React from 'react';
import './style.css';
import logo from './person.png';
import FriendshipTest from './Friendship-test';

const App = () => {
  return (
    <div className="App">
      <div className="App-wrapper">
        <img src={logo} alt="로고" className="logo-img"/>
        <FriendshipTest/>
      </div>
    </div>
  );
}

export default App;
