import React, { useState } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';
import MotivationalQuote from './components/MotivationalQuote';
import Background from './components/background';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };
    // Inline style to make the image cover the entire background

  
    const contentStyle = {
      position: 'relative',
      zIndex: '1',
      textAlign: 'center',
      padding: '50px',
      color: '#fff',  // Change text color to white for better contrast
      fontFamily: 'Montserrat, sans-serif',
    };
  
    const headerStyle = {
      fontFamily: 'Playfair Display, serif',
      fontWeight: '700',
      fontSize: '3rem',
      marginBottom: '20px',
    };
  
    const subHeaderStyle = {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '1.5rem',
      marginBottom: '30px',
    };
  
  return (
    <div className="App">
      <Background/>
      <div style={contentStyle}>
        <h1 style={headerStyle}>Habit Tracker</h1>
        <h2 style={subHeaderStyle}>Daily Motivation</h2>
        <p style={{ marginBottom: '30px' }}><MotivationalQuote /> </p>
        <HabitForm addHabit={addHabit} />
        <HabitList habits={habits} /> </div>
    </div>
  );
}

export default App;