import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 1,
    }
  }


  plusNemo = () => {
    const alert = document.getElementById('alert');

    this.setState({count: this.state.count + 1});
    
    if(this.state.count >= 0){
      alert.style.display = 'none';
    }else{
      alert.style.display = 'inline';
    }

  }

  minusNemo = () => {
    const alert = document.getElementById('alert');

    if(this.state.count > 0){
      this.setState({count: this.state.count - 1});
    }else{
      alert.style.display = 'inline';
    }
  }

  render(){
    const nemo_count = Array.from({length: this.state.count}, (v, i) => (i));

    return(
      <div className="App"> 
        <h2>네모를 plus , minus 해봐요💕</h2>
        <div className="nemo-wrap">
          <p id="alert">네모가 없어요ㅠㅠ Plus 해주세요!</p>
          {
            nemo_count.map((num, index) => {
              return(
                <div key={index} className="nemo">네모네모~</div>
              )
            })
          }
        </div>
        <button onClick={this.plusNemo} type="button" className="plus">PLUS</button>
        <button onClick={this.minusNemo} type="button" className="minus">MINUS</button>
      </div>
    );
  }

}

export default App;
