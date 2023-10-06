import '../App.css';

const CourseCard = ({ course, isSelected, onToggle }) => {
    return (
        <div 
            className={`card ${isSelected ? "selected" : ""}`}
            onClick={() => onToggle(key, course)}
        >
            <div className="card-title">{course.term} CS {course.number}</div>
            <div className="card-body">{course.title}</div>
            <div className="card-footer">{course.meets}</div>
        </div>
    );
};

export default CourseCard;
