import React, { useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
const QuizPage = ({quizData,setTotalMarks,Totalmarks}) => { 
     const [marks,setMarks] = useState(0);
     const [index,setIndex] = useState(0);
     const [isSelected,setIsSelected] = useState(false)
     const navigate = useNavigate();
     const listRef = useRef();

     const nextHandler = () => {
          setIsSelected(false)
          setIndex(index+1);
          setTotalMarks(marks+Totalmarks)
     }
     const prevHandler = () => {
          setIndex(index-1);
     }
     
     const selectedHandler = (item,Index) => {
          setIsSelected(true)
          const listArr = Array.from(listRef.current.children)
          listArr.forEach((item,idx)=>{
               if(idx==Index){
                    item.style.border = "3px solid #5a636494"
                    item.style.boxShadow = "0px 2px 4px #5a636494"
                    item.style.backgroundColor = "#fff"
               }else{
                    item.style.border = "3px solid transparent"
                    item.style.boxShadow = "none"
                    item.style.backgroundColor = "#e0e0e0"
               }
          })
          if(item==quizData[index].correct_answer) setMarks(5);
          else setMarks(-1)
     }
     const SubmitHandler = (item) => {
          if(item==quizData[index].correct_answer) setMarks(5);
          else setMarks(-1)
          navigate('/result')
     }

return quizData.length == 0 ? <>loading</> : (
    <div className='quizWrapper'>
      <div className="quizBoxwrapper">
          <div className="quizBox">
                    <div className="quesInfo">
                         <div>
                              <span className='bold'>Category : </span><span>{
                                   quizData.length === 0 ? "" :quizData[index].category  
                              }</span>
                         </div>
                         <div>

                              <span className='bold'>Type : </span><span>{
                                   quizData.length === 0 ? "" :quizData[index].type
                              }</span>
                         </div>
                         <div>
                              <span className='bold'>Difficulty : </span> <span className={`${quizData[index].difficulty}`}>{
                                   quizData.length === 0 ? "" :quizData[index].difficulty
                              }</span>
                         </div>
                    </div>
               <div className="ques">
                    <h3>Ques{index+1}. {quizData[index].question}</h3>
               </div>
               <ul ref={listRef} className='options'>
               {quizData[index].incorrect_answers?quizData[index].incorrect_answers.map((item,index)=>{
                    return (
                         <li onClick={()=>selectedHandler(item,index)} key={item}>{item}</li>
                         )
                    }):''}
               </ul>
          </div>
               <div className="next_prev_btn">
                    <button className='Btn' disabled={index>=0?true:false} onClick={prevHandler}>Prev</button>
                    <button className={`Btn ${index==quizData.length-1?"hideBtn":"showBtn"}`} disabled={(!isSelected || index==quizData.length-1)?true:false} onClick={nextHandler}>Next</button>
                    <button className={`Btn ${index==quizData.length-1?"showBtn":"hideBtn"}`} disabled={!isSelected}  onClick={SubmitHandler}>Submit</button>
               </div>
      </div>
    </div>
  )
}

export default QuizPage
