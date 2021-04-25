import React, {useState} from 'react';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Start from './components/Start';

const App = () => {
  const [page, setPage] = useState({page: 'quiz'});

  return (
    <div className="App">
      {page.page === 'start' && (<Start/>)}
      {page.page === 'quiz' && (<Quiz/>)}
      {page.page === 'score' && (<Score/>)}
    </div>
  );
}

export default App;
