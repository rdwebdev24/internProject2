import React, { useState,useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Error from './Components/Error';
import Main from './Components/Main';
import QuizPage from './Components/QuizPage';
import Result from './Components/Result';
function App() {

    const [quizData,setquizData] = useState([]);
    const [Totalmarks,setTotalMarks] = useState(0);
    const [loaded,setLoaded] = useState(false);
    const  [err,setErr] = useState(false)
     useEffect(async ()=>{
          const url = "https://opentdb.com/api.php?amount=10"
          try {
               const response = await fetch(url,{
                    method: 'GET',
               })
               const data = await response.json();
               console.log(data);
               for(let i=0; i<data.results.length; i++){
                data.results[i].incorrect_answers = [...data.results[i].incorrect_answers , data.results[i].correct_answer]
                data.results[i].incorrect_answers.sort(() => Math.random() - 0.5)
               }
               setquizData(data.results);
               setLoaded(true);
          } catch(err) {
            setErr(true);
            console.log(err);
          }
     },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/quiz' element={<QuizPage setTotalMarks={setTotalMarks} Totalmarks={Totalmarks} loaded={loaded} quizData={quizData} />}/>
          <Route path='/result' element={<Result Totalmarks={Totalmarks}/>}/>
          <Route path='/' element={<Main loaded={loaded}/>}/>
        </Routes>
        <Error err={err} setErr={setErr}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
