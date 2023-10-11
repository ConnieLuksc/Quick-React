import React from 'react';
import { useFormData } from '../utilities/useFormData';

const CourseForm = ({ course, onCancel }) => {
  const validateCourseData = (key, val) => {
    return '';
  };

  const [state, change] = useFormData(validateCourseData, course);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  
  const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{text}</label>
      <input className="form-control" id={name} name={name} 
        defaultValue={state.values?.[name]} onChange={change} />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Meeting Times" state={state} change={change} />
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default CourseForm;