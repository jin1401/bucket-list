import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Add bucket-list' value={bucketList} onChange={handleChange}/>
      <button>Add</button>
    </form>
  );
}

