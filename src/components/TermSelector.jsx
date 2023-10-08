import { useState } from "react";

const terms = ['Fall', 'Winter', 'Spring'];

const TermButton = ({ term, selection, setSelection }) => (
  <button
    className={`btn btn-light ${term === selection ? 'active' : ''}`}
    onClick={() => setSelection(term)}
  >
    {term}
  </button>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      terms.map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

export default TermSelector;