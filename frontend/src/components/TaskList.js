// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import { getTasks, updateTask } from '../services/api';
import { Checkbox, VStack } from '@chakra-ui/react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
    };
    fetchTasks();
  }, []);

  const handleCheckboxChange = async (taskId, isCompleted) => {
    await updateTask(taskId, { is_completed: isCompleted });
    setTasks((prevTasks) =>
      prevTasks.map(task => task.id === taskId ? { ...task, is_completed: isCompleted } : task)
    );
  };

  return (
    <VStack align="stretch">
      {tasks.map(task => (
        <Checkbox
          key={task.id}
          isChecked={task.is_completed}
          onChange={(e) => handleCheckboxChange(task.id, e.target.checked)}
        >
          {task.name}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default TaskList;
