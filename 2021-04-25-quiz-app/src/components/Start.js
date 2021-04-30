import React from 'react';
import {useHistory} from 'react-router-dom';
import './start-style.scss';

const Start = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/quiz');
    }

    return(
        <div className="start-wrap">
            <div className="start-table-cell">
                <h2><span>짱아💖</span><br/>에 대해  퀴즈를 풀어보자!</h2>
                <div className="image" />
                <button className="start-btn" onClick={handleClick}>퀴즈 시작</button>
            </div>
        </div>
    );
};

export default Start;