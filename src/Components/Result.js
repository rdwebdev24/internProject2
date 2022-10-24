import React from 'react'

const Result = ({Totalmarks}) => {
  return (
    <div className='resultWrapper'>
      <h2 style={{color:"green"}}>✅ Submitted</h2>
      <p>Your Score : {Totalmarks}</p>
    </div>
  )
}

export default Result
