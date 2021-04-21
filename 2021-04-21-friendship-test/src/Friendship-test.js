import React, {useState} from 'react';

const FriendshipTest = () => {
    const [name, setValues] = useState({name: ''});

    const handleInputChange = (e) => {
        setValues({
            ...name,
            [e.target.name]: e.target.value
        }); 

        console.log(name); /* {name: "지현"} */
        console.log(name.name);
    }

    return(
        <div className="friendship-test-wrap">
            <form>
                <h2>나는 <span id="my-name">" {name.name} "</span> 에 대해 얼마나 알고있을까?</h2>
                <input type="text" placeholder="이름" name="name" onChange={handleInputChange}/>
                <button type="submit">GO</button>
            </form>
        </div>
    );
};

export default FriendshipTest;