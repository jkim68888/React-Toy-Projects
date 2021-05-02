import React, {useState} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Start from './components/Start';
import Ranking from './components/Ranking';
import Message from './components/Message';
import NotFound from './components/NotFound';
import {connect} from "react-redux";

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수이다.
const mapStateTopProps = (state) => ({
  ...state,
});

//이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수이다.
const mapDispatchToProps = (dispatch) => ({
  load: () => {},
});

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/score" component={Score} />
      <Route path="/ranking" component={Ranking} />
      <Route path="/message" component={Message} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default connect(mapStateTopProps, mapDispatchToProps)(withRouter(App));
