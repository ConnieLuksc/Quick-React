import React from 'react';

const Schedule = ({ selected, courses = {} }) => {

  const getCourseByKey = (key) => courses[key];

  return (
    <div className="cart">
      {
        selected.length === 0
        ? <h2>No course selected. Please click courses to select.</h2>
        : selected.map(key => {
            const course = getCourseByKey(key);
            
            if (!course) return null; 
            
            // console.log('Course object:', course);
            // console.log('Course number:', course.number);
            // console.log('Course title:', course.title);
            
            return (
              <div key={key}>
                {course.term} CS {course.number} - {course.title} -- {course.meets}
              </div>
            );
          })
      }
    </div>
  );
};

export default Schedule;
