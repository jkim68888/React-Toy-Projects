import React, { createRef } from 'react';
import {useHistory} from 'react-router-dom';
import './start-style.scss';
import {useDispatch, useSelector} from 'react-redux';
import {addUserName} from '../redux/modules/rank';

const Start = () => {
    const history = useHistory();
    const name = useSelector((state) => state.quiz.name);
    const dispatch = useDispatch();
    const input_text = createRef();

    const handleClick = () => {
        history.push('/quiz');
        dispatch(addUserName(input_text.current.value));
    }

    return(
        <div className="start-wrap">
            <div className="start-table-cell">
                <h2><span>"{name}"</span><br/>에 대해  퀴즈를 풀어보자!</h2>
                <div className="image" />
                <input ref={input_text} type="text" placeholder="내 이름" />
                <button className="start-btn" onClick={handleClick}>퀴즈 시작</button>
            </div>
        </div>
    );
};

export default Start;