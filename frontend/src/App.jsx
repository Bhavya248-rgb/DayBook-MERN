import React, {useState,useEffect} from 'react'
import Header from './AppHeader'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Entries from './pages/Entries'
import Entry from './pages/EntryPage'
import Login from './userPages/userLogin'
import Signup from './userPages/userSignup'
import PrivateRoute from './components/PrivateRoute'
import Landing from './pages/Landing'
import CalendarView from './pages/CalendarView'


const App = () => {
  const [token,setToken] = useState(localStorage.getItem('token'));
  
  // useEffect(()=>{
    // const storedToken = localStorage.getItem('token');
    // if(storedToken){
      // setToken(storedToken);
    // }
  // },[])

  // Update token when localStorage is changed (to catch manual changes in localStorage)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    };

    // Set up event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div>
      <Header/>
      <Routes>
        {/* Define Routes for different components/pages */}
        <Route path="/" element={token? <Navigate to="/home" replace /> : <Landing/>} />
        <Route path="/home" element={<PrivateRoute element={<Home />}/>} />
        {/* <Route path="/" element={<PrivateRoute element={FirstPage}/>} /> */}
        {/* <Route path="/landing" element={<Landing/>} /> */}
        <Route path="/entries" element={<PrivateRoute element={<Entry />}/>} />
        <Route path="/allEntries" element={<PrivateRoute element={<CalendarView/>}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App