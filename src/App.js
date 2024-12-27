import { useState } from 'react';
import './App.css';

function App() {

  const questions = [
    "Who was the son of the architect, Vishwakarma, in the Ramayana?",
    "Who was the father of Hanuman?",
    "who was the author of Ramayana?",
    "Who strikes Hanuman with thunderbolt?",
    "Name the great saint who composed ‘Hanuman Chalisa’?",
    "Name the mountain that was lifted by Lord Hanuman?",
    "Which one in the followling is not the name of Hanuman?",
    "what does pavanakumaara means?",
    "what is the name of Lord Hanuman's mother?",
    "where did Hanuman first meet sita?"
  ]

  const options = [
    { optionvalue: ["Nala", "Mala", "Bala", "Kala"] },
    { optionvalue: ["Vali", "Sugriva", "Vyasa", "Kesari"] },
    { optionvalue: ["Rishi Valmiki", "Tulsi Das", "Sant Ek Nath", "Anhinanda"] },
    { optionvalue: ["Lord Shiva", "Lord Vishnu", "Indra", "Brahma"] },
    { optionvalue: ["Valmiki", "Tulasidas", "Veda Vyasa"] },
    { optionvalue: ["Govardhana", "Himalayas", "Sanjeevi"] },
    { optionvalue: ["Anjaneya", "Pavankumara", "Vajra", "Anjanisuta"]},
    { optionvalue: ["Son of wind god", "king of lanka", "lord vishnu", "son of shiva"]},
    { optionvalue: ["Parvathi", "Sita", "Anjana", "Lakshmi"]},
    { optionvalue: ["Virndavan", "Mithila", "Ayodhya", "Ashok vatika"]}
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
      setscore(score+1)
    }
    if (options[counter].optionvalue[index] === "Vajra") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Son of wind god") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Anjana") {
      let temp = score + 1
      setscore(temp)
    }
    if (options[counter].optionvalue[index] === "Ashok vatika") {
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

  function feedback(score){
    if(score>=8){
       return (<>
       <img src="https://media.istockphoto.com/id/1362551716/vector/great-job-thumb-up-drawn-hand-emblem.jpg?s=612x612&w=0&k=20&c=m4Hn_RU9cW_zxUausqjmNUTxE2K6BPOcGWOrwFtr1OE=" alt=""/>
       </>)
    }else if(score>=4 && score<=7){
      return ( <>
       <img src="https://img.freepik.com/premium-photo/never-mind-better-luck-time-colorful-background-text-tshirt-design-motivational-quote-illustration-typography_1262710-88102.jpg" alt="" />
      </>)
    }else{
      return (<>
      <img src="https://as2.ftcdn.net/v2/jpg/02/99/72/89/1000_F_299728916_ceA6SWci7NwjKOIVtolziBVif0DTUWkw.jpg" alt='not loaded' />
      </>)
    }
  }
  
  const next= () => {
    if (counter <= 9) {
      return (
        <>
          <div id="main">
            <h1>My Quiz Application</h1>
            <div id="sub">
              <h2>Question No: {counter + 1} /10</h2>
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
          <h1> Quiz is completed</h1>
          <h1>your score is :{score}</h1>
          <h4 id="feed" style={{marginTop:"0px"}}>{feedback(score)}</h4>
          <button onClick={()=>window.location.reload()}>Retake</button>
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