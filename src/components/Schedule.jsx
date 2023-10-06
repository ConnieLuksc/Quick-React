const Schedule = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>No course selected. Please click courses to select.</h2>
      : selected.map(course => (
        <div key={course.number}>
        {course.term} CS {course.number} - {course.title} -- {course.meets}
      </div>
        ))
    }
  </div>
);


export default Schedule;