import React from 'react';

class AddList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            
        };
        this.text = React.createRef();
    }

    addList = () => {
        let list = this.state.list;
        const new_item = this.text.current.value;
        this.props.create(new_item);
    }

    render(){
        return(
            <div className="add-list-wrap">
                <h3>버킷리스트를 추가해주세요💖</h3>
                <input type="text" ref={this.text}/>
                <button type="submit" onClick={this.addList}>추가</button>
            </div>
        );
    }
}

export default AddList;