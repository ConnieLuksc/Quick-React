import React from 'react';
import { useFormData } from '../utilities/useFormData';

const CourseForm = ({ course, onCancel }) => {
  const validateCourseData = (key, val) => {
    switch (key) {
      case 'title':
        return val.length >= 2 ? '' : 'Title must be at least two characters';
      case 'meets':
        // Validating empty string or format like "MWF 12:00-13:20"
        const meetsPattern = /^$|^[MTWThF]+ \d{2}:\d{2}-\d{2}:\d{2}$/;
        return meetsPattern.test(val) ? '' : 'Must contain days and start-end, e.g., MWF 12:00-13:20';
      default:
        return '';
    }
  };

  const [state, change] = useFormData(validateCourseData, course);

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };
  
  const InputField = ({ name, text, state, change }) => (
    <div className="form-group">
      <label htmlFor={name}>{text}</label>
      <input
        type="text"
        className={`form-control ${state.errors?.[name] ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        value={state.values[name] || ''}
        onChange={change}
      />
      <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
  );
  

  return (
    <form onSubmit={handleSubmit}>
      <InputField name="title" text="Course Title" state={state} change={change} />
      <InputField name="meets" text="Meeting Times" state={state} change={change} />
      <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>
    </form>
  );
};

export default CourseForm;