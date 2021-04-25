import React from 'react';
import './start-style.scss';

const Start = () => {
    return(
        <div className="start-wrap">
            <div className="start-table-cell">
                <h2><span>짱아💖</span><br/>에 대해  퀴즈를 풀어보자!</h2>
                <div className="image" />
                <button className="start-btn">퀴즈 시작</button>
            </div>
        </div>
    );
};

export default Start;