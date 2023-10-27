import React, { useState } from 'react';
import '../App.css';
import './CourseCard.css';
import CourseForm from './CourseForm.jsx';
import { isConflicting } from '../utilities/CheckConflict.js'; 
import { useProfile } from '../utilities/profile';


const CourseCard = ({ course, isSelected, isConflicting, onToggle }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, profileLoading, profileError] = useProfile();
    if (profileError) return <h1>Error loading profile: {`${profileError}`}</h1>;
    if (profileLoading) return <h1>Loading user profile</h1>;
    if (!profile) return <h1>No profile data</h1>;

    const handleEdit = (event) => {
        event.stopPropagation();
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };
    console.log("Admin",profile?.isAdmin)

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
            {profile?.isAdmin ? 
                <button onClick={handleEdit} className="edit-button">Edit</button>
                :
                <div className="not-admin-warning">you cannot change course information since you are not admin</div>
            }
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
