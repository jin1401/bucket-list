import React from 'react';
import styles from './List.module.css'
import { BsFillTrash3Fill } from "react-icons/bs";

export default function List({list, onChange, onDelete}) {
  const {id, text, status} = list;
  const handleChange = (e) => {
    const status = e.target.checked ? 'accomplished' : 'not-yet';
    onChange({...list, status}); 
  }
  const handleDelete = () => onDelete(list);
  return (
    <li key={id} className={styles.list}>
      <input className={styles.checkbox} type='checkbox' id='checkbox' checked={status === 'accomplished'} onChange={handleChange} />
      <label className={styles.text} htmlFor='checkbox'>{text}</label>
      <button 
      className={styles.button} onClick={handleDelete}><BsFillTrash3Fill /></button>
    </li>
  );
}

