// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, defaultSystem } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import AddTaskPage from './pages/AddTaskPage';

function App(){
  return (
  
  <ChakraProvider>
    <Router>
      <Box p={4}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/add-task" element={<AddTaskPage />} />
        </Routes>
      </Box>
    </Router>
  </ChakraProvider>
)};

export default App;
