import React from 'react'
import axios from 'axios'

const Entries = () => {
  const [myEntries,setMyEntries] = React.useState([]);
  const [loading,setLoading] = React.useState(true);
  const [error,setError] = React.useState(null);

  React.useEffect(()=>{
    const token = localStorage.getItem('token')
    console.log("Token from Entries.jsx",token)
    const fetchEntries = async ()=>{
      try{
        console.log("Trying...");
        const response = await axios.get("http://localhost:5002/api/entries/",{
          headers:{
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data)
        setMyEntries(response.data);
        setLoading(false);
      }catch(error){
        setError(error)
        setLoading(false)
        // alert("Error!! Check Console");
      console.log("Error:",error);
      }
    }
    fetchEntries();
  },[])
  
  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  if (error) {
    return <div>Error loading entries</div>;  // Show error message if any
  }
  const EntriesElement = myEntries.map((entry,index)=>{
    console.log("ii:",index);
    console.log("other:",entry);
    return (
      <main>
        <header>{entry.day} {entry.date}
          <p>{entry.time}</p>
        </header>
        <div key={index} >
          <p>{entry.milestones}</p>
          <p>thoughts:{entry.thoughts}</p>
          <p>gratitude:{entry.gratitude}</p>
          <p>MoveOn:{entry.moveOn}</p>
          <p>Created At:{entry.updatedAt}</p>
        </div>
      </main>
    )
})
  // console.log(EntriesElement)
  return (
    <div>{EntriesElement}</div>
  )
}

export default Entries