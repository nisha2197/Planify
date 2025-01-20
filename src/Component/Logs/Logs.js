import React, { useContext, useEffect } from 'react'
import logsContext from '../../context/Logs/LogsContext'
import { useNavigate } from 'react-router-dom';

const Logs = (props) => {

    const navigate = useNavigate()
    
    const themeColor = {
        backgroundColor: props.mode === '#40916c' ? 'white' : '#2c2929',
        color: props.mode === '#40916c' ? 'black' : 'white'
    }
    const iconColor = {
        color: props.mode === '#40916c' ? '#40916c' : 'white' 
        
    }
    const context = useContext(logsContext);
    const { logs, getAllYear } = context;
    //const currentMonthIndex = new Date().getMonth() + 1;
    useEffect(() => {
        getAllYear()

        // eslint-disable-next-line
    }, [])

    const GotoViewTasks=(id)=>{
     navigate(`/tasks/${id}`);

    }
    return (
        <div className='row my-3'>
            {
                logs && logs.length > 0 ? (
                    logs.map((element) => {
                        return <div className='col-md-4 my-3' key={element._id} style={{ width: '18rem' }}>
                            <div className="card" style={themeColor}>
                                <img src='https://resources.workable.com/wp-content/uploads/2024/07/best-time-tracking-software-.jpg'
                                    className="card-img-top" alt="..." style={{
                                        filter: 'grayscale(10%) sepia(23%) hue-rotate(102deg) saturate(100%)'
                                    }} />
                                <div className="card-body d-flex justify-content-between">
                                    <div>
                                        <h5 className="card-title">{element.logDate.slice(0, 10)}</h5>
                                    </div>
                                    <div>
                                        <i className="bi bi-eye-fill mx-2 fs-5" style={iconColor} onClick={()=> GotoViewTasks(element._id)}></i>
                                        <i className="bi bi-trash3-fill fs-5" style={iconColor}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                ) :
                    (
                        <div>No Logs Available.</div>
                    )
            }
        </div>
    )
}

export default Logs
