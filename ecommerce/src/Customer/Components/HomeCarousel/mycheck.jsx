.card-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    position: relative;
    width: auto; /* Change to 'auto' to allow width adjustment */
    max-width: 250px; /* Maximum width as needed */
    height: 400px; /* Reduced Card height */
    border-radius: 10px !important;
    overflow: hidden;
    margin: 5px;
    display: flex;
    flex-basis: calc(20% - 8px);
    justify-content: center;
    align-items: center;
  }
  
  .full-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
    color: #fff; /* Text color on the overlay */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  }
  
  .solid-background {
    background-color: rgba(0, 0, 0, 0.7); /* Solid background color */
    padding: 16px;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
  
  .card-description {
    color: #ccc; /* Description text color */
  }
//////////////////////////////////  
import React from "react";
import "../HomeCarousel/Mycard.css";

const Mycard = () => {

  return (
    <div className="card-div">
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70"
          alt="Card"
          className="full-image"
        />

        <div className="card-overlay">
          <div className="solid-background">
            <h2 className="card-title">Flat 20% Off</h2>
            <p className="card-description">Ethnic Wear</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
