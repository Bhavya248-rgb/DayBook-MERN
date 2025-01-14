import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [dateTime, setDateTime] = useState({ time: '', date: '',day:'' });

  useEffect(() => {
    const updateDateTime = () => {
      const currentDate = new Date();
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      const day = daysOfWeek[currentDate.getDay()];
      
      // Format time
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const seconds = currentDate.getSeconds().toString().padStart(2, '0');
      const time = `${hours}:${minutes}:${seconds}`;

      // Format date
      const date = currentDate.getDate();
      const month = currentDate.getMonth() + 1; // Months are 0-indexed
      const year = currentDate.getFullYear();
      const formattedDate = `${date.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;

      setDateTime({ time, date: formattedDate, day : day});
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h4>{dateTime.day} {dateTime.date}</h4>
      <h4>{dateTime.time}</h4>
    </div>
  );
};

export default Clock;
