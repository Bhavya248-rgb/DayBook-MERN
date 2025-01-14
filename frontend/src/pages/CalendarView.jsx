import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';  // Import calendar styles
import axios from 'axios'
import ShowEntry from './ShowEntry';
import EntryCard from './EntryCard';


const CalendarView = () => {
  const [entries, setEntries] = useState([]);
  const [filteredEntries, setFilteredEntries] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  console.log("Selected date:",selectedDate);
  const token = localStorage.getItem('token')
  // Fetch all entries from the backend on component mount
  React.useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/entries',{
          headers:{
            'Authorization': `Bearer ${token}`
          }
        }); // Assuming the endpoint returns all entries
        setEntries(response.data);
        console.log(entries);
        const today = new Date();
        const todayEntries = response.data.filter((entry) => {
          const entryDate = new Date(entry.date);
          return entryDate.toDateString() === today.toDateString();
        });
        console.log("Todays entries");
        setFilteredEntries(todayEntries);
        console.log("Todays entries end");
      } catch (error) {
        console.log('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, [token]);


  // Handle the date click and filter entries by the selected date
  const handleDateClick = (date) => {
    setSelectedDate(date);

    const filtered = entries.filter(entry => {
      const entryDate = new Date(entry.date);
      // console.log("Entry date:",entryDate.toDateString())
      // console.log("date:",date.toDateString())
      // Compare the selected date with the entry date
      return entryDate.toDateString() === date.toDateString();
    });

    setFilteredEntries(filtered);
  };

  return (
    <div>
      {/* Render the calendar component */}
      <Calendar
        onChange={handleDateClick}  // Set the date click handler
        value={selectedDate}  // Control the selected date
      />

      <div className="entries">
        {filteredEntries.length > 0 ? (
          <div>
            <EntryCard entries = {filteredEntries}/>
          </div>
           ) : (
          <p>No entries for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
