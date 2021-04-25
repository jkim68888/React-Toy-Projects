import React, {useState} from 'react';
import './quiz-style.scss';
import Dog from '../dog.png';
import TinderCard, { propTypes } from 'react-tinder-card';

const Quiz = () => {
    const [list, setList] = useState([
        {question: "짱아는 2살이다?", answer: "X"},
        {question: "짱아는 여자다?", answer: "O"},
        {question: "짱아는 부정교합이 있다?", answer: "O"},
        {question: "짱아는 중성화 수술을 아직 안했다?", answer: "X"},
        {question: "짱아는 고기 알러지가 있다?", answer: "O"},
    ]);

    const [num, setNum] = useState(0);

    const onSwipe = (direction) => {
        setNum(num + 1);
        console.log('You swiped: ' + direction)
    }

    return(
        <div className="quiz-wrap">
            <div className="quiz-table-cell">
                <h2>Q. {num+1}번</h2>
                
                {list.map((l,idx) => {
                    if(num === idx){
                        return(<h3 key={idx}>{l.question}</h3>);
                    }
                })}
                
                <div className="pick-answer-box">
                    <div className="green">O</div>
                    <div className="red">X</div>
                </div>

            {list.map((l,idx) => {
                if(idx === num){
                    return (
                        <TinderCard onSwipe={onSwipe} className="drag-item" key={idx}>
                            
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