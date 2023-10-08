import React, { useState } from 'react';
import '../App.css';
import { isConflicting } from '../utilities/CheckConflict.js'; 

const CourseCard = ({ course, isSelected, isConflicting, onToggle }) => {
    const [showConflictWarning, setShowConflictWarning] = useState(false);
    const handleCourseClick = () => {
        if (isConflicting && isSelected) {
            setShowConflictWarning(true);
        } else {
            onToggle(course.number, course);
            setShowConflictWarning(false); 
        }
    };
    const cardStyle = {
        borderColor: isConflicting ? 'red' : 'defaultBorderColor', 
    };
    
    return (
        <div 
            className={`card ${isSelected ? "selected" : ""}`} style={cardStyle}
            onClick={handleCourseClick}
        >
            <div className="card-title">{course.term} CS {course.number}</div>
            <div className="card-body">{course.title}</div>
            <div className="card-footer">{course.meets}</div>
            {showConflictWarning && <p style={{ color: 'red' }}>It is conflicted</p>}
        </div>
    );
};


export default CourseCard;
