import React, { useState } from 'react';
import '../App.css';
import './CourseCard.css';
import { isConflicting } from '../utilities/CheckConflict.js'; 

const CourseCard = ({ course, isSelected, isConflicting, onToggle }) => {
    return (
        <div 
            className={`card ${isSelected ? "selected" : ""}`}
            onClick={() => onToggle(course.number, course)}
        >
            {isConflicting && <span className="warning-icon">⚠️</span>}
            <div className="card-title">{course.term} CS {course.number}</div>
            <div className="card-body">{course.title}</div>
            <div className="card-footer">{course.meets}</div>
        </div>
    );
};

export default CourseCard;
