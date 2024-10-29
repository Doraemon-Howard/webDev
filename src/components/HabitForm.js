import React, { useState } from 'react';

function HabitForm({ addHabit }) {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit) {
      addHabit(habit);
      setHabit('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="Enter a new habit"
        style={{
          padding: '10px',
          fontSize: '1rem',
          borderRadius: '5px',
          border: 'none',
          marginRight: '10px',
        }}
      />
      <button style={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
          }} type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm;