import React from 'react';
import './App.css';
import Lifecycle from './Lifecycle';

function App() {
  const [is_show, setIsShow] = React.useState(true);

  return (
    <div className="App">
      {is_show ? (<Lifecycle/>) : null}
      <button style={{'margin':'20px'}} onClick={() => {setIsShow(false);}}>삭제</button>
    </div>
  );
}

export default App;
