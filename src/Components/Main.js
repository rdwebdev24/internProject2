import React from 'react'
import {Link} from 'react-router-dom'
const Main = ({loaded}) => {
  return (
    <div className='mainWrapper'>
      <div className="main_box">
          <h4>Quiz 3.0</h4>
          <ul>
               <li>There area total 10 multuple choice Questions</li>
               <li>For correct answer 5 Marks and -1 for incorrect</li>
               <li>Time limit for each question is 5min</li>
               <li>total time limit is 50min</li>
          </ul>
          <Link to='/quiz'>
               <button className='take_to_quiz' disabled={!loaded}>{!loaded?"Preparing the quiz":"Take me to the Quiz"}</button>
          </Link>
      </div>
    </div>
  )
}

export default Main
