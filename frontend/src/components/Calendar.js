// src/components/Calendar.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { getTasks } from '../services/api';

const CalendarView = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const tileContent = ({ date }) => {
    const taskDates = tasks.map(task => task.due_date);
    return taskDates.includes(date.toISOString().split('T')[0]) ? (
      <span>📌</span>
    ) : null;
  };

  return <Calendar tileContent={tileContent} />;
};

export default CalendarView;
