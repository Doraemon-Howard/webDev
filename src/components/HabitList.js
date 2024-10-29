import React, { useState } from 'react';

function HabitList({ habits }) {
  const [completed, setCompleted] = useState({});

  const handleCheckboxChange = (habit, day) => {
    setCompleted((prevState) => ({
      ...prevState,
      [habit]: { ...prevState[habit], [day]: !prevState[habit]?.[day] }
    }));
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            {habit}
            {days.map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={completed[habit]?.[day] || false}
                  onChange={() => handleCheckboxChange(habit, day)}
                />
                {day}
              </label>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;