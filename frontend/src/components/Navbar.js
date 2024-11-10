// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';

const Navbar = () => (
  <HStack spacing={4}>
    <Button as={Link} to="/" colorScheme="blue">Dashboard</Button>
    <Button as={Link} to="/calendar" colorScheme="blue">Calendar</Button>
    <Button as={Link} to="/add-task" colorScheme="blue">Add Task</Button>
  </HStack>
);

export default Navbar;
