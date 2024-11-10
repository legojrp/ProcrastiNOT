// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get all tasks
export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

// Add a new task
export const addTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

// Update a task (e.g., mark as completed)
export const updateTask = async (taskId, data) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, data);
  return response.data;
};

// Additional functions for delete, etc., can be added here
