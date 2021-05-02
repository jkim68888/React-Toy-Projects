import React from 'react';
import './ranking-style.scss';

const Ranking = () => {
    return(
        <div className="ranking-wrap">
            <div className="ranking-table-cell">
                <div className="top-bar">
                    position fixed
                </div>
                <div className="rank-item-wrap">
                    <div className="rank-item">
                        <h3>1등</h3>
                        <h4>김지현</h4>
                        <p>메세지</p>
                    </div>
                </div>
                <button className="redo-btn">다시하기</button>
            </div>
        </div>
    );
}

export default Ranking;

