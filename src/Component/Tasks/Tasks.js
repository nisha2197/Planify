import React from 'react'
import { useParams } from 'react-router-dom';

export default function Tasks(props) {
    const { id } = useParams();
    console.log(id)
    return (
        <div>
            <div className='row my-3'>
                hi tasks
                {/* {
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
                } */}
            </div>
        </div>
    )
}
