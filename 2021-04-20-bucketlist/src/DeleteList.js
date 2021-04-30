import React from 'react';

class DeleteList extends React.Component {    
    constructor(props){
        super(props);
    }

    deleteList = () => {
        const bucket_index = parseInt(this.props.match.params.index);
        this.props.delete(bucket_index);
        this.props.history.goBack();
    }

    render(){
        return(
            <div className="delete-list-wrap">
                <h3>버킷리스트를 삭제해주세요💖</h3>
                <button className="delete-btn" onClick={this.deleteList}>삭제</button>
            </div>
        );
    }
    
}

export default DeleteList;