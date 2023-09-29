import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

const Main = () => {
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading courses data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading courses data...</h1>;
  if (!data) return <h1>No courses data found</h1>;

  return Object.entries(data.courses).map(([key, course]) => (
    <div key={key}>{course.title} - {course.term} - {course.number} - {course.meets}</div>
  ));
};


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="container">
      <Main />
    </div>
  </QueryClientProvider>
);

export default App;
