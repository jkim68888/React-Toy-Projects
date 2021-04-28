import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import BucketList from './BucketList';
import Detail from './Detail';
import NotFound from './NotFound';
import './style.scss';

import {connect} from 'react-redux';
import {loadBrucket, createBucket, loadBucket} from './redux/modules/bucket';

const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list};
}

const mapDispatchToProps = (dispatch) => {
  return{
    load: () => {
      dispatch(loadBucket());
    },

    create: (bucket) => {
      dispatch(createBucket(bucket));
    }
  };
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
    this.text = React.createRef();
  }

  addList = () => {
    let list = this.state.list;
    const new_item = this.text.current.value;
    this.props.create(new_item);
  }

  render() {
      return (
      <div className="App">
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            <Switch>
              <Route path="/" exact render={(props) => <BucketList history={this.props.history} bucket_list={this.props.bucket_list} />} />
              <Route path="/detail/:index" component={Detail} />
              <Route component={NotFound} />
            </Switch>
            <div className="add-list-wrap">
                <h3>버킷리스트를 추가해주세요💖</h3>
                <input type="text" ref={this.text}/>
                <button type="submit" onClick={this.addList}>추가</button>
            </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App)) ;