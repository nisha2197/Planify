import React, { useContext, useEffect, useState } from 'react';
import logsContext from '../../context/Logs/LogsContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const LogsFilter = (props) => {

  const context = useContext(logsContext);
  const { year, getAllYear, months, getMonthsByYear, selectedYear, getAllLogs, addlog ,selectedMonth} = context;
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  //

  useEffect(() => {
    getAllYear();
  }, [])

  const handleDateChange = (date) => {
    setSelectedDate(date);
    sendSelectedDateToFunction(date); // Call the function with selected date

    setShowDatePicker(false); // Close the date picker after selection
    addlog(date)
  };

  const sendSelectedDateToFunction = (date) => {
    console.log("Selected Date:", date);
  };

  const handleAddButtonClick = () => {
    setShowDatePicker(true);
    
  };
  // const handleBlurClick = ()=>{
  //   setShowDatePicker(false); 
  // }
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
              year && year.map((elements) => {
                return <li key={elements} onClick={() => getMonthsByYear(elements)}>
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
            {selectedMonth}
          </button>
          <ul className="dropdown-menu" >
            {months && months.map((elements) => {
              return (
                <li key={elements} onClick={() => getAllLogs(elements, selectedYear)}>
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
        <button className="btn text-white rounded-pill" style={{ backgroundColor: props.mode }}
          onClick={handleAddButtonClick}>
          <i className="bi bi-plus-circle-fill text-white mx-2"></i>
          Add
        </button>
        {showDatePicker && (
          <div style={{ position: 'absolute', zIndex: 1000 }}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
          </div>
        )}

        {/* Optionally, display selected date 
      {selectedDate && (
        <div>Selected Date: {selectedDate.toLocaleDateString()}</div>
      )}*/}
      </div>
    </div>
  )
}

export default LogsFilter
