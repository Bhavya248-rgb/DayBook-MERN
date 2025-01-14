import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async(e)=>{
        e.preventDefault();
        const data={username,email,password}
        try{
            const response = await axios.post("http://localhost:5002/api/users/register",data)
            // localStorage.setItem('token', response.data.token);
            console.log("Registered successfully")
            navigate('/login');
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <form>
        <label>User name</label><br/>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} required></input><br/>
        <label>Email</label><br/>
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br/>
        <label>Password</label><br/>
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input><br/>
        <p>Already have an account?<Link to="/login">Login</Link></p><br/>
        <button type="submit" onClick={handleSignUp}>Sign Up</button>
    </form>
  )
}

export default Signup