import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Clock from './Clock';

const Entry = () => {

  const [milestones,setData1] = React.useState("")
  const [thoughts,setData2] = React.useState("")
  const [gratitude,setData3] = React.useState("")
  const [moveOn,setData4] = React.useState("")

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleSaveEntry = async ()=>{
    const data = {milestones,thoughts,gratitude,moveOn};
    console.log("Entry data:",data);
    try{
      const response = await axios.post("http://localhost:5002/api/entries/",data,{
        headers:{
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data)
      setData1('');  // Reset milestones
      setData2('');  // Reset thoughts
      setData3('');  // Reset gratitude
      setData4('');  // Reset moveOn
      // navigate('/');

    }
    catch(error){
      alert("Error!! Check Console");
      console.log("Error:",error);
    }
  }


  return (
    <div className="container">
    <header>
        <h1>DayBook Entry</h1>
        <div id="datetime">
            {/* <p id="date">31/12/2024m</p> */}
            {/* <p id="time">2 15</p> */}
            <Clock/>
        </div>
    </header>

    {/* <!-- Section 1: Milestones of the Day --> */}
    <section>
        <h2>1. Milestones of the Day</h2>
        <textarea 
          id="milestones" 
          className="textarea" 
          value={milestones}
          placeholder="What were your key achievements or highlights today?"
          onChange={(e)=>setData1(e.target.value)}
          ></textarea>
    </section>

    {/* <!-- Section 2: Share Anything in Detail --> */}
    <section>
        <h2>2. Want to Share Anything?</h2>
        <textarea 
          id="detailed" 
          className="textarea" 
          placeholder="Write down your thoughts, experiences, or anything you'd like to express in detail."
          value={thoughts}
          onChange={(e)=>setData2(e.target.value)}
          ></textarea>
    </section>

    {/* <!-- Section 3: Gratitude or Lessons Learned --> */}
    <section>
        <h2>3. Gratitude for What You Learned Today</h2>
        <textarea 
          id="gratitude" 
          className="textarea"
          placeholder="What are you grateful for today? What did you learn?"
          value={gratitude}
          onChange={(e)=>setData3(e.target.value)}
          ></textarea>
    </section>

    {/* <!-- Section 4: Things to Move On --> */}
    <section>
        <h2>4. Things You Are Thinking to Move On</h2>
        <textarea 
          id="movingOn" 
          className="textarea"
          placeholder="What do you want to let go of or improve upon?"
          value={moveOn}
          onChange={(e)=>setData4(e.target.value)}
          ></textarea>
    </section>

    {/* <!-- Save Button --> */}
    <footer>
        <button id="saveEntry" onClick={handleSaveEntry}>Save Entry</button>
    </footer>
</div>
  )
}

export default Entry