import { useState } from 'react';
import { useJsonQuery } from '../utilities/fetch';
import TermSelector from './TermSelector.jsx';

const CourseList = ({ term, selected = [], toggleSelected }) => {
    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
    if (error) return <h1>Error loading courses data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading courses data...</h1>;
    if (!data) return <h1>No courses data found</h1>;
  
    return (
      <div className="course-grid">
        {Object.entries(data.courses)
        .filter(([key, course]) => course.term === term)
        .map(([key, course]) => (
          <div 
            className={`card ${selected.includes(key) ? "selected" : ""}`}
            key={key} 
            onClick={() => toggleSelected && toggleSelected(key)}
          >
            <div className="card-title">{course.term} CS {course.number}</div>
            <div className="card-body">{course.title}</div>
            <div className="card-footer">{course.meets}</div>
          </div>
        ))}
      </div>
    );
};


export default CourseList;
