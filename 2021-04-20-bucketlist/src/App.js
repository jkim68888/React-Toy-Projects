import React from 'react';
import BucketList from './BucketList';
import './style.scss';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기','자전거 타기'],
    };

    this.text = React.createRef();
  }

  componentDidMount(){
    console.log(this.text);
    console.log(this.text.current); /* ref 는 current 로 가져옴 - console 찍어보면 확인가능 */
  }

  render() {
      return (
      <div className="App">
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            <BucketList list={this.state.list} />
        </div>
        <div>
          <input type="text" ref={this.text}/>
        </div>
      </div>
    );
  }
}

export default App;