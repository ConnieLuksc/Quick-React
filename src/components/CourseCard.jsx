import React, { useState } from 'react';
import '../App.css';
import './CourseCard.css';
import CourseForm from './CourseForm.jsx';
import { isConflicting } from '../utilities/CheckConflict.js'; 


const CourseCard = ({ course, isSelected, isConflicting, onToggle }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    if (isEditing) {
        return ( 
            <>
            <div 
            className={`card ${isSelected ? "selected" : ""}`}
            onClick={() => onToggle(course.number, course)}
        >
            {isConflicting && <span className="warning-icon">⚠️</span>}
            <div className="card-title">{course.term} CS {course.number}</div>
            <div className="card-body">{course.title}</div>
            <div className="card-footer">{course.meets}</div>
             <button onClick={handleEdit} className="edit-button">Edit</button>
        </div>
        <div className="card-overlay"><CourseForm course={course} onCancel={handleCancel} /></div>
        </>
        )
    }
    return (
        <div 
        className={`card ${isSelected ? "selected" : ""}`}
        onClick={() => onToggle(course.number, course)}
    >
        {isConflicting && <span className="warning-icon">⚠️</span>}
        <div className="card-title">{course.term} CS {course.number}</div>
        <div className="card-body">{course.title}</div>
        <div className="card-footer">{course.meets}</div>
        <button onClick={handleEdit} className="edit-button">Edit</button>
    </div>
    );
};

export default CourseCard;
