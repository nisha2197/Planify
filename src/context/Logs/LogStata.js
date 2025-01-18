import logsContext from './LogsContext'
import { use, useState } from 'react'
import api from '../../Environment/environment'

const LogState = (props) => {
    const apiUrl = api;
    const [logs, setLogs] = useState([]);
    const [year, setYear] = useState([]);
    const [months, setMonth] = useState([]);
    const currentYear = new Date().getFullYear();

    //Get Month
    const getAllYear = async() =>{
        console.log(currentYear);
        // API Call 
        const response = await fetch(`${apiUrl}/year`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        const json = await response.json()
        setYear(json)
        getMonthsByYear(currentYear);
    }

    //Get Month
    const getMonthsByYear = async() =>{
        // API Call 
        const response = await fetch(`${apiUrl}/year/${year}/month`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        const json = await response.json()
        setMonth(json)
    }

    // Get all Logs
    const getAllLogs = async () => {
        // API Call 
        const response = await fetch(`${apiUrl}/log`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        const json = await response.json()
        setLogs(json)
    }

    <logsContext.Provider value={{logs,getAllLogs,year,getAllYear,months,getMonthsByYear}}>
        {props.children}
    </logsContext.Provider>

}

export default LogState;