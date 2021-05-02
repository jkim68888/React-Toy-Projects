import React, {useState} from 'react';
import './quiz-style.scss';
import Dog from '../dog.png';
import {useSelector, useDispatch} from 'react-redux';
import {addAnswer} from '../redux/modules/quiz';
import TinderCard from 'react-tinder-card';

const Quiz = () => {
    const quiz = useSelector((state) => state.quiz.quiz);
    const [num, setNum] = useState(0);

    const onSwipe = (direction) => {
        setNum(num + 1);
        console.log('You swiped: ' + direction)
    }

    return(
        <div className="quiz-wrap">
            <div className="quiz-table-cell">
                <h2>Q. {num+1}번</h2>
                
                {quiz.map((l,idx) => {
                    if(num === idx){
                        return(<h3 key={idx}>{l.question}</h3>);
                    }
                })}
                
                <div className="pick-answer-box">
                    <div className="green">{"O"}</div>
                    <div className="red">{"X"}</div>
                </div>

            {quiz.map((l,idx) => {
                if(idx === num){
                    return (
                        <TinderCard 
                            onSwipe={onSwipe} 
                            className="drag-item" 
                            key={idx}
                            onCardLeftScreen={onSwipe}
                            onCardRightScreen={onSwipe}
                            preventSwipe={["up", "down"]}
                        >
                            <div>
                                <img src={Dog} />
                            </div>
                        </TinderCard>
                    );
                }
            })}
                
            </div>
        </div>
    );
};

export default Quiz;