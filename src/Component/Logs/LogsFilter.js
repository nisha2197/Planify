import React, { useContext, useEffect } from 'react';
import logsContext from '../../context/Logs/LogsContext';
const LogsFilter = (props) => {

  const context = useContext(logsContext);
  const { year, getAllYear, months,getMonthsByYear,selectedYear,getAllLogs} = context;
  //

  useEffect(() => {
    getAllYear();
  },[])
  return (
    <div className='row'>
     <div className='col-md-10'>
        <div className="btn-group">
          <button className="btn text-white rounded-pill dropdown-toggle" data-bs-toggle="dropdown" href="/" style={{ backgroundColor: props.mode }} role="button"
            aria-expanded="false">
           {selectedYear}
          </button>
          <ul className="dropdown-menu">
          {
            year && year.map((elements)=>{
              return  <li key={elements} onClick={()=>getMonthsByYear(elements)}>
              <a className="dropdown-item" href="#">{elements}</a>
            </li>
            })
             
          }
          </ul>
        </div>
        <div className="btn-group mx-2">
          <button className="btn text-white rounded-pill dropdown-toggle" data-bs-toggle="dropdown" href="/" 
          style={{ backgroundColor: props.mode }} role="button"
            aria-expanded="false">
            Months
          </button>
          <ul className="dropdown-menu" >
            {months && months.map((elements) => {
              return (
                <li key={elements} onClick={()=> getAllLogs(elements,selectedYear)}>
                  <a className="dropdown-item" href="#">
                    {elements}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
      <div className='col-md-2'>
        <button className="btn text-white rounded-pill" style={{ backgroundColor: props.mode }}>
          <i className="bi bi-plus-circle-fill text-white mx-2"></i>
          Add
        </button>
      </div> 
    </div>
  )
}

export default LogsFilter
