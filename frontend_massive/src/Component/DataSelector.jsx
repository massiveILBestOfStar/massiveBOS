import React, { useState } from 'react';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState({
    day: '',
    month: '',
    year: ''
  });

  const handleDayChange = (e) => {
    setSelectedDate({ ...selectedDate, day: e.target.value });
  };

  const handleMonthChange = (e) => {
    setSelectedDate({ ...selectedDate, month: e.target.value });
  };

  const handleYearChange = (e) => {
    setSelectedDate({ ...selectedDate, year: e.target.value });
  };

  return (
    <div className='dateContainer'>
      <div style={{width: '100px'}}>
        <label>
          <input
            type="text"
            placeholder="Day"
            value={selectedDate.day}
            onChange={handleDayChange}
            className='dateInput'
          />
        </label>
      </div>
      <div style={{width: '100px'}}>
        <label>
          <input
            type="text"
            placeholder="Month"
            value={selectedDate.month}
            onChange={handleMonthChange}
            className='dateInput'
          />
        </label>
      </div>
      <div style={{width: '100px'}}>
        <label>
          <input
            type="text"
            placeholder="Year"
            value={selectedDate.year}
            onChange={handleYearChange}
            className='dateInput'
          />
        </label>
      </div>
    </div>
  );
};

export default DateSelector;
