import { useState } from 'react';
import './App.css';

function App() {

  const questions = [
    "Who was the son of the architect, Vishwakarma, in the Ramayana?",
    "Who was the father of Hanuman?",
    "who was the author of Ramayana?",
    "Who strikes Hanuman with thunderbolt?",
    "Name the great saint who composed ‘Hanuman Chalisa’?",
    "Name the mountain that was lifted by Lord Hanuman?"
  ]

  const options = [
    { optionvalue: ["Nala", "Mala", "Bala", "Kala"] },
    { optionvalue: ["Vali", "Sugriva", "Vyasa", "Kesari"] },
    { optionvalue: ["Rishi Valmiki", "Tulsi Das", "Sant Ek Nath", "Anhinanda"] },
    { optionvalue: ["Lord Shiva", "Lord Vishnu", "Indra", "Brahma"] },
    { optionvalue: ["Valmiki", "Tulasidas", "Veda Vyasa"] },
    { optionvalue: ["Govardhana", "Himalayas", "Sanjeevi"] }
  ]

  const [counter, setcounter] = useState(0)
  const [score, setscore] = useState(0)
  const [qstart, setqstart] = useState(false)

  function Answer(index) {
    if (options[counter].optionvalue[index] === "Nala") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Kesari") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Rishi Valmiki") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Indra") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Tulasidas") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Sanjeevi") {
      let temp = score + 1
      setscore(temp)
    }
  }

  const Change = (index) => {
    Answer(index);
    setcounter(counter + 1)
  }

  const startq = ()=>{
    setqstart(true)
  }

  const next= () => {
    if (counter <= 5) {
      return (
        <>
          <div id="main">
            <h1>My Quiz Application</h1>
            <div id="sub">
              <h2>Question No: {counter + 1} /6</h2>
              <h2>{questions[counter]}</h2>
              <div id="option">
                {options[counter].optionvalue.map((x, index) => <li key={index} onClick={() => { Change(index) }} id={index}>{x}</li>)}
              </div>
              <br />
            </div>
          </div>
        </>
      );
    }
    else {
      return (
        <div id="he">
          <h1>your Quiz is completed</h1>
          <h1>score is :{score}</h1>
        </div>
      )
    }
  }
  return (
    <div id="first">
      {!qstart?(<h1 id="do">Do you have Knowledge on mythology? Let's check it...!</h1>): null } 
      {qstart? ( next() ):(
      <button onClick={startq}>start</button>
    )}
    </div>
  )
}

export default App;