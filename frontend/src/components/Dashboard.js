// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import { Box, Heading, Text, Progress, VStack } from '@chakra-ui/react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      const fetchedTasks = await getTasks();
      setTasks(fetchedTasks);
      setCompletedTasks(fetchedTasks.filter(task => task.is_completed).length);
    };
    fetchTasks();
  }, []);

  return (
    <VStack spacing={5} align="stretch">
      <Heading>Dashboard</Heading>
      <Box>
        <Text>Motivation Score:</Text>
        <Progress value={(completedTasks / tasks.length) * 100} colorScheme="blue" />
      </Box>
      <Box>
        <Heading size="md">Today's Tasks</Heading>
        {tasks.map(task => (
          <Text key={task.id}>{task.name}</Text>
        ))}
      </Box>
    </VStack>
  );
};

export default Dashboard;
