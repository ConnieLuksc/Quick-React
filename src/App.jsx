import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CourseList from './components/CourseList.jsx';
import TermSelector from './components/TermSelector.jsx';

const queryClient = new QueryClient();

const App = () => {
  const [term, setTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>CS Courses for 2018-2019</h1>
        <TermSelector selection={term} setSelection={setTerm} />
        <CourseList term={term} selected={selected} toggleSelected={toggleSelected} />

      </div>
    </QueryClientProvider>
  );
};

export default App;