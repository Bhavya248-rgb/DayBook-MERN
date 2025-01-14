import React from 'react';
import image1 from '../images/image1.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleWriteButton = ()=>{
    navigate('/entries')
  }
  return (
    <section>
      <div className="homeContainer">
        <div className="img-container">
        <img className="home-img" src={image1} alt="Designer" />
        </div>
        <div className="button-container">
          <div className="write-line">
            "Write Anything!"
          </div>
          
          <button className="write-btn" onClick={handleWriteButton}>Write Today</button>
          
        </div>
      </div>
    </section>
  );
};

export default Home