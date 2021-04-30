import React from 'react';
import {useHistory} from 'react-router-dom';

const NotFound = () => {
    const history = useHistory(); 

    return(
        <div>
            <h2>없는 페이지 입니다!</h2>
            <button onClick={() => {history.push('/')}}>홈으로</button>
        </div>
    );
}

export default NotFound;