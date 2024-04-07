import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddBucketList.module.css'

export default function AddBucketList({onAdd}) {
  const [bucketList, setBucketList] = useState('');
  const handleChange = (e) => setBucketList(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(bucketList.trim('').length === 0) return;
    onAdd({id : uuidv4(), text: bucketList, status: 'not-yet'});
    setBucketList('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input className={styles.input} type='text' placeholder='Add bucket-list' value={bucketList} onChange={handleChange}/>
      <button className={styles.button}>Add</button>
    </form>
  );
}

