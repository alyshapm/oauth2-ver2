import React, { useState, useEffect } from 'react'
import '../styles/landing.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import background from '../assets/landing-bg.jpg'

function Landing() {
    const strings = ['Did you do the laundry today?',
    'Did you leave the stove on?',
    'YOUR NAME IS IDA BAGUS KERTHYAYANA MANAUBA RIGHT',
    'Backend amirite sir ahahahaha',
    'I am thou, thou art I. Thou hast acquired a new vow. It shall become the wings of rebilllon that breakth thy chains of captivty.', 
    'Sidon: Smash or pass?', 
    'Fish can roll', 
    '99% of gamblers quit before they hit big', 
    'Backend developer', 
    'SIUUUUUUUUUUUUUUUUUUUUUU', 
    'Messi or Ronaldo?', 
    'My greatest pain in life is that I will never be able to see myself perform live. ― Kanye West', 
    'I AM A SURGEON I AM A SURGEON DOCTOR HAN',
    'Dont you mean sturgeon?',
    'I AM FYPL',
    'Do you remember? The 21st night of September',
    'Best RE Protag: Leon or Ethan?',
    'Assalamualaikum warahmatullahi wabarakatuh',
    'Nessie? You nicknamed my daughter after the LochNess Monster????'
    ];

    const [randomValue, setRandomValue] = useState(null);

    useEffect(() => {
      generateRandomValue();
    }, []);
  
    const generateRandomValue = () => {
      const randomIndex = Math.floor(Math.random() * strings.length); // Generate a random value between 0 and 99
      const random = strings[randomIndex]
      setRandomValue(random);
      strings.splice(randomIndex, 1);
    };
  
  return (
    <div className='landing'
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
        <h1>Welcome User!</h1>
        <h3>{randomValue}</h3>
        <Link to="/login">
        <Button variant="contained">Sign out</Button>
        </Link>
    </div>
  )
}

export default Landing