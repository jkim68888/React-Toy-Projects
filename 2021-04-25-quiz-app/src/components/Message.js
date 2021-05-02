import React from 'react';
import './message-style.scss';

const Message = () => {
    return(
        <div className="message-wrap">
            <div className="message-table-cell">
                <div className="image" />
                <h2>짱아에게 남기는 한 마디</h2> 
                <textarea />
                <button className="next-btn">남기고 랭킹 보러가기</button>
            </div>
        </div>
    );
}

export default Message;