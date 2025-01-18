import React from 'react'

export default function Tasks(props) {
    const months = [
        { "id": 1, "name": "January" },
        { "id": 2, "name": "February" },
        { "id": 3, "name": "March" },
        { "id": 4, "name": "April" },
        { "id": 5, "name": "May" },
        { "id": 6, "name": "June" },
        { "id": 7, "name": "July" },
        { "id": 8, "name": "August" },
        { "id": 9, "name": "September" },
        { "id": 10, "name": "October" },
        { "id": 11, "name": "November" },
        { "id": 12, "name": "December" }
    ];
    return (
        <div className='container my-3'>
            


            <div className='row my-3'>
                {
                    props.allTasks.map((elements) => {
                        return <div className='col-md-4' key={elements.id}>
                            <div className="card my-2" style={{ width: '18rem' }}>
                                <div className={`card-body border border-${props.mode === '#40916c' ? 'light' : 'dark'}`}
                                style={{ backgroundColor: props.mode === '#40916c' ? 'white' : '#242020', color: props.mode === '#40916c' ? 'black': 'white' }}>
                                    <h5 className="card-title">{elements.taskName}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{elements.task1}</h6>
                                    <p className="card-text">{elements.task2}</p>
                                    <button className='btn' href="/" >
                                        <i className="bi bi-eye-fill" style={{ fontSize: '1.5rem', color: props.mode }}></i>
                                    </button>
                                    <button className='btn' href="/" >
                                        <i className="bi bi-pen-fill" style={{ fontSize: '1.5rem', color: props.mode }}></i>
                                    </button>
                                    <button className='btn' href="/" >
                                        <i className="bi bi-clipboard-fill" style={{ fontSize: '1.5rem', color: props.mode }}></i>
                                    </button>
                                    <button className='btn' href="/" >
                                        <i className="bi bi-trash3-fill" style={{ fontSize: '1.5rem', color: props.mode }}></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
