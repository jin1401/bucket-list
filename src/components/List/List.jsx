import React from 'react';

export default function List({list}) {
  const {id, text, status} = list;
  return (
    <li key={id}>
      <input type='checkbox' id='checkbox' status={status} />
      <label htmlFor='checkbox'>{text}</label>
      <button>Delete button</button>
    </li>
  );
}

