import logsContext from './LogsContext'
import { useState } from 'react'
import api from '../../Environment/environment'

const LogState = (props) => {
    const apiUrl = api;
    const [logs, setLogs] = useState();
    const [year, setYear] = useState([]);
    const [months, setMonth] = useState([]);
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const currentMonthIndex = new Date().getMonth() + 1;
    //Get Month
    const getAllYear = async () => {
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
        getMonthsByYear(selectedYear);

        if (months != []) {
            const response = await fetch(`${apiUrl}/log?userId=1&month=${currentMonthIndex}&year=${selectedYear}`, {
                method: 'GET',
            });
            const json = await response.json()
            setLogs(json)
        }
    }

    //Get Month
    const getMonthsByYear = async (years) => {
        // API Call 
        setSelectedYear(years)
        const response = await fetch(`${apiUrl}/year/${years}/month`, {
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
    const getAllLogs = async (selectedMonth, selectedYear) => {
        const monthsDict = months.indexOf(selectedMonth) + 1;
        const response = await fetch(`${apiUrl}/log?userId=1&month=${monthsDict}&year=${selectedYear}`, {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        const json = await response.json()
        setLogs(json)
    }

    return (
        <logsContext.Provider value={{ logs, getAllLogs, year, getAllYear, months, getMonthsByYear, selectedYear }}>
            {props.children}
        </logsContext.Provider>
    )

}

export default LogState;