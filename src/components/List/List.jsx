import React from 'react';

export default function List({list, onChange, onDelete}) {
  const {id, text, status} = list;
  const handleChange = (e) => {
    const status = e.target.checked ? 'accomplished' : 'not-yet';
    onChange({...list, status}); 
  }
  const handleDelete = () => onDelete(list);
  return (
    <li key={id}>
      <input type='checkbox' id='checkbox' checked={status === 'accomplished'} onChange={handleChange} />
      <label htmlFor='checkbox'>{text}</label>
      <button onClick={handleDelete}>Delete button</button>
    </li>
  );
}

