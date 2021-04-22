import React from 'react';
import './addList.scss';

class AddList extends React.Component {
    
    constructor(props){
        super(props);
        this.text = React.createRef();
    }

    addBucketList = () => {
        /* this.text.current; */
    }

    render(){
        return(
            <div className="add-list-wrap">
                <h3>버킷리스트를 추가해주세요💖</h3>
                <input type="text" ref={this.text}/>
                <button type="submit">추가</button>
            </div>
        );
    }
}

export default AddList;