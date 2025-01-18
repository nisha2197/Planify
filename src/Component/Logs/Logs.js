import React, { useContext, useEffect } from 'react'
import logsContext from '../../context/Logs/LogsContext'

const Logs = () => {

    const context = useContext(logsContext);
    const { logs, getAllLogs } = context;
    useEffect(() => {
        getAllLogs();
        // eslint-disable-next-line
    }, [])
    return (
        <div>

        </div>
    )
}

export default Logs
