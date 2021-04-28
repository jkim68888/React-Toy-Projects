import React from 'react'; 
import {useSelector, useDispatch} from 'react-redux';

const BucketList = (props) => {
    const bucket_list = useSelector(state => state.bucket.list);
    return (
        <div className="lists">
            {
                bucket_list.map((list, index) => {
                    return (<div className="list-item" key={index} onClick={() => {props.history.push('/detail/'+index)}}>{list}</div>);
                })
            }
        </div>
    );
}

export default BucketList;