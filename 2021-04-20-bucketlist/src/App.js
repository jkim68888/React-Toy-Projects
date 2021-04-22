import React from 'react';
import BucketList from './BucketList';
import AddList from './AddList';
import './style.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: ['영화관 가기', '자전거 타기'],
    };
  }

  render() {
      return (
      <div className="App">
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            <BucketList list={this.state.list} />
            <AddList/>
        </div>
      </div>
    );
  }
}

export default App;