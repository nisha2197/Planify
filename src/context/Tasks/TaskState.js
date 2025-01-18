import taskContext from './TaskContext'
import { useState } from 'react'
import api from '../../Environment/environment'

const TaskState =(props) =>{

    const apiUrl = ''
    const[tasks,setTasks] =useState([]);

    <taskContext.Provider value={{}}>
        {props.children}
    </taskContext.Provider>

}

export default TaskState;