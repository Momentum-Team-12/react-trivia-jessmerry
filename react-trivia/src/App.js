import { useEffect } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="categories">
      <header className="trivia">Let's Play Trivia!</header>
    </div>
  );
}



useEffect(() => {
  console.log('useEffect runs')
  axios.get('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=boolean').then((res) => {
    const results = res.data.map((repo) => repo.name)
    console.log(results)
  })
})

export default App;
