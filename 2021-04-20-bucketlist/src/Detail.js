import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Detail = (props) => {
    const bucket_list = useSelector((state) => state.bucket.list);
    const bucket_index = parseInt(props.match.params.index);

    return(
        <div>
            <h4>" {bucket_list[bucket_index]} " 의 상세페이지 입니다.</h4>
        </div>
    );
};

export default Detail;