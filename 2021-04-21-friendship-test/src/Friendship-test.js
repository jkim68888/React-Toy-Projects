import React, {useState} from 'react';

const FriendshipTest = () => {
    const [name, setValues] = useState({name: ''});

    const handleInputChange = (e) => {
        const my_name = document.getElementById('my-name');

        setValues({
            ...name,
            [e.target.name]: e.target.value
        }); 

        console.log(name); /* {name: "지현"} */
        console.log(name.value); /* undefined */
        my_name.textContent = {name}; /* [object Object] */
    }

    return(
        <div className="friendship-test-wrap">
            <form>
                <h2>나는 <span id="my-name">"  "</span> 에 대해 얼마나 알고있을까?</h2>
                <input type="text" placeholder="이름" name="name" onFocus={handleInputChange} onChange={handleInputChange}/>
                <button type="submit">GO</button>
            </form>
        </div>
    );
};

export default FriendshipTest;