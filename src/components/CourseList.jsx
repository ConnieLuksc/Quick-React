import CourseCard from './CourseCard.jsx';

const CourseList = ({ term, selected = [], toggleSelected, courses = {} }) => (
      <div className="course-grid">
        {Object.entries(courses)
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



export default CourseList;
