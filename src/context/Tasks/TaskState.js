import taskContext from './TaskContext'
import { useState } from 'react'
import api from '../../Environment/environment'

const TaskState = (props) => {

    const apiUrl = api;
    const [tasks, setTasks] = useState([]);
    

    const getTasksByLogId = async (logId) => {
        const response = await fetch(`${apiUrl}/log/${logId}/task`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        const TaskById = await response.json();
        setTasks(TaskById)
    }

    // delete Task
    const deleteTaskById = async (taskId, id) => {
        const response = await fetch(`${apiUrl}/task/${taskId}`, {
            method: 'DELETE',
            headers: {
                // 'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        getTasksByLogId(id);
    }
    // Update Task
    const editTaskById = async (taskId, editedTask,logId) => {
       
        const obj = {
            _id: taskId,
            logId: logId,
            description: editedTask.description, 
            status: editedTask.status,
            createdAt: new Date(),
            updatedAt:new Date(),
            __v: 0
        } 
        console.log(obj)
        // API Call 
        const response = await fetch(`${apiUrl}/task/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            },
           
            body: JSON.stringify(obj)
        });
        getTasksByLogId(logId)
    }

    // Add Task
    const addTaskById = async (obj) => {

        // API Call 
        const response = await fetch(`${apiUrl}/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            },
            body: JSON.stringify(obj)

        });
        getTasksByLogId(obj.logId)
    }
    return (
        <taskContext.Provider value={{ getTasksByLogId, tasks, deleteTaskById, editTaskById, addTaskById }}>
            {props.children}
        </taskContext.Provider>
    )

}

export default TaskState;