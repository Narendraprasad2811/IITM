import React, { useState } from 'react';
import './App.css';

function ProductCard({ image, name, description, price }) {
  return (
    <li className="product-list">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </li>
  );
}

function App() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', contactInfo);
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Grocery</a></li>
            <li><a href="#">Beauty Products</a></li>
            <li><a href="#">Furniture</a></li>
            <li><a href="#">Toys</a></li>
            <li><a href="#">Appliances</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="electronics-section">
          <h2>Electronics</h2>
          <ul>
            <ProductCard
              image="https://via.placeholder.com/150"
              name="BeethoSOL"
              description="Canon BEST OF TECH 10.345"
              price="999"
            />
            <ProductCard
              image="https://via.placeholder.com/150"
              name="ASUS VIVOBOOK"
              description="10:12- TV"
              price="999"
            />
            {/* Add more product cards here */}
          </ul>
        </section>
        <section className="big-saving-days">
          <h2>BIG SAVING DAYS</h2>
          <p>10"-14" JUN</p>
          <ul>
            <ProductCard
              image="https://via.placeholder.com/150"
              name="Tablet"
              price="599"
            />
            <ProductCard
              image="https://via.placeholder.com/150"
              name="Microsoft"
              description="BIG SAVING DAYS 10-14 JUN"
            />
          </ul>
        </section>
        <section className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={contactInfo.name}
              onChange={handleInputChange}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;