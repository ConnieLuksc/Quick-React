import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CourseList from './components/CourseList.jsx';
import TermSelector from './components/TermSelector.jsx';
import Modal from './components/Modal.jsx';
import Schedule from './components/Schedule.jsx';

const queryClient = new QueryClient();

const App = () => {
  const [term, setTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);

  const toggleSelected = (item) => setSelected(
    selected.includes(item)
    ? selected.filter(x => x !== item)
    : [...selected, item]
  );

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <h1>CS Courses for 2018-2019</h1>
        <div className="header-row">
          <TermSelector selection={term} setSelection={setTerm} />
          <button className="btn btn-outline-dark" onClick={openModal}>Course plan<i className="bi bi-cart4"></i></button>
        </div>
        <CourseList term={term} selected={selected} toggleSelected={toggleSelected} />
        <Modal open={open} close={closeModal}>
          <Schedule selected={selected} />
        </Modal>

      </div>
    </QueryClientProvider>
  );
};

export default App;