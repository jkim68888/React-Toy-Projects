import React from 'react';
import './score-style.scss';

const Score = () => {
    return(
        <div className="score-wrap">
            <div className="score-table-cell">
                <h2>짱아 퀴즈에 대한 내 점수는?</h2>
                <div className="score-container">
                    <span>100</span>점
                    <p>이 정도면 아주 친한 사이에요~</p>
                </div>

                <button className="rank-btn">랭킹 보기</button>
            </div>
        </div>
    );
};

export default Score;