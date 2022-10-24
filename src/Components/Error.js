import React from 'react'

const Error = ({err,setErr}) => {
     const closeHandler = () => {
          setErr(false)
     }
  return err && (
    <div className='error'>
     <h1>❗</h1>
     <p>Netwrok error please reload the page or try after some time</p>
      <button onClick={closeHandler} className='Btn'>close</button>
    </div>
  )
}

export default Error
