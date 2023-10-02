import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import TermSelector from './components/TermSelector';

const Main = () => {
  const [term, setTerm] = useState('Fall');
  const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading courses data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading courses data...</h1>;
  if (!data) return <h1>No courses data found</h1>;

  return (
    <>
    <h1>CS Courses for 2018-2019</h1>
    <TermSelector selection={term} setSelection={setTerm} />
    <div className="course-grid">
      {Object.entries(data.courses)
      .filter(([key, course]) => course.term === term)
      .map(([key, course]) => (
        <div className="card" key={key}>
          <div className="card-title">{course.term} CS {course.number}</div>
          <div className="card-body">{course.title}</div>
          <div className="card-footer">{course.meets}</div>
        </div>
      ))}
    </div>
    </>
  );
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
