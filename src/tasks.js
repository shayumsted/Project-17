// U78784426
const tasks = [
    { id: 1, name: "Complete a React challenge", isCompleted: false },
    { id: 2, name: "Incorporate motivatonal messages ", isCompleted: false },
    { id: 3, name: "Complete 3 practice lessons", isCompleted: false },];
  export default tasks;

  // src/FancyText.js
import React from 'react';
import './FancyText.css'; // Next file created

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'fancy-text-title' : 'fancy-text'}>
      {text}
    </div>);};

export default FancyText;

// src/TaskGenerator.js
import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = () => {
    tasks[currentTaskIndex].isCompleted = !tasks[currentTaskIndex].isCompleted;
  };

  const task = tasks[currentTaskIndex];
  const motivationalMessages = [
    "Keep going, you're doing awesome!",
    "Remember mistakes are okay.",
    "Good effort is always repaid.",
    // Add more motivational messages
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div>
      <FancyText title text="Current Task" />
      <p>{task.name} - {task.isCompleted ? "Completed ✔" : "Pending"}</p>
      <button onClick={toggleTaskCompletion}>
        {task.isCompleted ? "Mark Pending" : "Mark as Completed"}
      </button>
      <button onClick={handleNextTask}>Next Task</button>
      <FancyText text={randomMessage} />
    </div>
  );
};

export default TaskGenerator;