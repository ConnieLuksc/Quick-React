import CourseCard from './CourseCard.jsx';
import { getConflictingCourses } from '../utilities/CheckConflict.js';

const CourseList = ({ term, selected = [], toggleSelected, courses = {} }) => {
   return(
      <div className="course-grid">
        {Object.entries(courses)
        .filter(([key, course]) => course.term === term)
        .map(([key, course]) => {
          const selectedCourses = selected.map(selKey => courses[selKey]);
          const conflictingCourses = getConflictingCourses(course, selectedCourses);
          const isConflicting = conflictingCourses.length > 0;

          return(
            <CourseCard 
            key={key}
            course={course}
            isSelected={selected.includes(key)}
            isConflicting={isConflicting && !selected.includes(key)}
            onToggle={() => {
              if (!isConflicting || selected.includes(key)) {
                toggleSelected && toggleSelected(key);
              }
            }}
          />
          

          
          
        )})}
        
      </div>
    );
  };



export default CourseList;
