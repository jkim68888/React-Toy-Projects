import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import BucketList from './BucketList';
import AddList from './AddList';
import DeleteList from './DeleteList';
import Detail from './Detail';
import NotFound from './NotFound';
import './style.scss';

import {connect} from 'react-redux';
import {loadBucket, createBucket} from './redux/modules/bucket';

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

  render() {
      return (
      <div className="App">
        <div className="container">
            <h1 className="title">내 버킷리스트</h1>
            <hr className="line"/>
            <Switch>
              <Route 
                path="/" 
                exact 
                render={(props) =>
                  <> 
                    <BucketList history={this.props.history} bucket_list={this.props.bucket_list} />
                    <AddList />
                  </>
                } 
              />
              <Route 
                path="/detail/:index" 
                render={(props) =>
                  <> 
                    <Detail />
                    <DeleteList />
                  </>
                } 
              />
              <Route component={NotFound} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App)) ;