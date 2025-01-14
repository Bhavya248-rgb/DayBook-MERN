import { Link,useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/')
  };

  const handleMyEntries =()=>{
    navigate('/allEntries')
  }


  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <Link to="/">Daybook</Link>
        </div>
        <div className="nav-links">
            <Link to="/">Home</Link>
            {/* <Link >My Entries</Link> */}
            <a onClick={handleMyEntries}>MyEntries</a>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="nav-right" id="user-section">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/signup" className="signup-link">Signup</Link>
        {/* <Link to="/logout" className="logout-link">Logout</Link> */}
        <button onClick={handleLogout} className="logout-link">Logout</button>
      </div>
    </nav>
  );
};

export default Header;