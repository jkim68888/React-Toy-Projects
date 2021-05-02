const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER";

const initialState = {
    name: "짱아",
    score_texts: {
        60: "우린 친구! 앞으로도 더 친하게 지내요! :)",
        80: "우와! 우리는 엄청 가까운 사이!",
        100: "꺄! 우린 둘도 없는 단짝이에요! :)",
    },
    answers: [],
    quiz: [
        {question: "짱아는 2살이다?", answer: "X"},
        {question: "짱아는 여자다?", answer: "O"},
        {question: "짱아는 부정교합이 있다?", answer: "O"},
        {question: "짱아는 중성화 수술을 아직 안했다?", answer: "X"},
        {question: "짱아는 고기 알러지가 있다?", answer: "O"},
    ]
}

export const getQuiz = (quiz_list) => {
    return {type: GET_QUIZ, quiz_list};
}

export const addAnswer = (answer) => {
    return {type: ADD_ANSWER, answer};
}

export const resetAnswer = () => {
    return {type: RESET_ANSWER};
}

export default function reducer(state = initialState, action = {}){
    switch(action.type) {
        case "quiz/GET_QUIZ": {
            return {...state, quiz: action.quiz_list}
        }

        case "quiz/ADD_ANSWER": {
            return {...state, answers: [...state.answer, action.answer]}
        }

        case "quiz/RESET_ANSWER": {
            return {...state, answers: []}
        }
        
        default:
            return state;
    }
}