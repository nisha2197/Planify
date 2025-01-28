import React from 'react'
import Logs from './Logs/Logs'
import LogsFilter from './Logs/LogsFilter'

const Home = (props) => {
  
  return (
    <div className='container my-3'>
      <LogsFilter mode={props.mode} />
      <Logs mode={props.mode} />
    </div>
  )
}

export default Home
