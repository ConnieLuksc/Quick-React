import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CourseList from './components/CourseList';




const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <CourseList />
    </div>
  </QueryClientProvider>
);

export default App;
