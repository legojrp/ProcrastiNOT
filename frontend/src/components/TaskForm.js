// src/components/TaskForm.js
import React, { useState } from 'react';
import { addTask } from '../services/api';
import { Button,  Input, Select, VStack } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

const TaskForm = () => {
  const [task, setTask] = useState({
    name: '',
    due_date: '',
    priority: 'Normal',
    reminder: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(task);
    setTask({ name: '', due_date: '', priority: 'Normal', reminder: '' });
  };

  return (
    <VStack as="form" onSubmit={handleSubmit} spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Task Name</FormLabel>
        <Input name="name" value={task.name} onChange={handleChange} required />
      </FormControl>
      <FormControl>
        <FormLabel>Due Date</FormLabel>
        <Input type="date" name="due_date" value={task.due_date} onChange={handleChange} required />
      </FormControl>
      <FormControl>
        <FormLabel>Priority</FormLabel>
        <Select name="priority" value={task.priority} onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Reminder</FormLabel>
        <Input name="reminder" value={task.reminder} onChange={handleChange} />
      </FormControl>
      <Button type="submit" colorScheme="blue">Add Task</Button>
    </VStack>
  );
};

export default TaskForm;
