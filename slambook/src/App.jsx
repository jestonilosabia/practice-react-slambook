import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [favoriteFood, setFavoriteFood] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Practice: React - Slambook</h1>
      {submitted ? (
        <div>
          <h2>Slam Book:</h2>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Contact Number: {contactNumber}</p>
          <p>Favorite Color: {favoriteColor}</p>
          <p>Favorite Food: {favoriteFood}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <label>
            Contact Number:
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </label>
          <br />
          <label>
            Favorite Color:
            <input
              type="text"
              value={favoriteColor}
              onChange={(e) => setFavoriteColor(e.target.value)}
            />
          </label>
          <br />
          <label>
            Favorite Food:
            <input
              type="text"
              value={favoriteFood}
              onChange={(e) => setFavoriteFood(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
