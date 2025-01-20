import React from 'react'
import Logs from './Logs/Logs'
import LogsFilter from './Logs/LogsFilter'

const Home = (props) => {
  
  return (
    <div>
      <LogsFilter mode={props.mode} />
      <Logs mode={props.mode} />
    </div>
  )
}

export default Home
