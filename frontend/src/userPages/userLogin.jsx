import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e)=>{
        e.preventDefault();
        const data={email,password}
        console.log("Login data :",data)
        try{
            const response = await axios.post("http://localhost:5002/api/users/login",data)
            localStorage.setItem('token', response.data.accessToken);
            console.log("User logged in : ",response.data)
            navigate('/');
        }
        catch(error){
            console.log(error);
        }
    }

  return (
    <main>
        <form>
            <label>Email</label><br/>
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br/>
            <label>Password</label><br/>
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input><br/>
            <p>Don't have an account?<Link to="/signup">SignUp</Link></p><br/>
            <button type="submit" onClick={handleSignUp}>Login</button><br/>
        </form>
        {/* <div> */}
            {/* <Link to="/signup" >SignUp<Link/> */}
        {/* </div> */}
    </main>
  )
}

export default Login