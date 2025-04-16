import React, { useState, useEffect } from 'react';
import './App.css';
import middleFinger from './assets/middlefinger.jpg';
import soundEffect from './assets/evil.mp3'; // 💀 add your sound here

function App() {
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (clicked) {
      const audio = new Audio(soundEffect);
      audio.loop = true;
      audio.play();
    }
  }, [clicked]);

  const handleClick = () => {
    setLoading(true);
    setClicked(false);

    setTimeout(() => {
      setLoading(false);
      setClicked(true);
    }, 5000);
  };

  return (
    <>
      {!clicked && !loading && (
        <div className='buttonDiv'>
          <button onClick={handleClick}>Initiate Hack 🤖</button>
        </div>
      )}

      {loading && (
        <div className='loadingDiv'>
          <div className="matrixText">Decrypting Payload<span className="dots"></span></div>
        </div>
      )}

      {clicked && (
        <div className='setImage glitch'>
          <img src={middleFinger} alt='Hacked!' />
        </div>
      )}
    </>
  );
}

export default App;
