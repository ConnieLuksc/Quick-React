import { useState } from 'react';
import { useJsonQuery } from '../utilities/fetch.js';
import TermSelector from './TermSelector.jsx';
import CourseCard from './CourseCard.jsx';

const CourseList = ({ term, selected = [], toggleSelected}) => {
    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
  
    if (error) return <h1>Error loading courses data: {`${error}`}</h1>;
    if (isLoading) return <h1>Loading courses data...</h1>;
    if (!data) return <h1>No courses data found</h1>;
  
    return (
      <div className="course-grid">
        {Object.entries(data.courses)
        .filter(([key, course]) => course.term === term)
        .map(([key, course]) => (
            <CourseCard 
            key={key}
            course={course}
            isSelected={selected.includes(key)}
            onToggle={() => toggleSelected && toggleSelected(key)}
          />
        ))}
      </div>
    );
};


export default CourseList;
