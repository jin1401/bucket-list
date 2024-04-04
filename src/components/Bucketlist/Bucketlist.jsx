import React, { useState } from 'react';
import List from '../List/List';
import AddBucketList from '../AddBucketList/AddBucketList';

export default function Bucketlist() {
  const [lists, setLists] = useState([{id : 123, text: 'travel to mars', status: 'not-yet'}]);

  const handleAdd = (list) => setLists([...lists, list])
  return (
    <>
      <ul>
        {lists.map((list)=>(
            <List 
            key={list.id}
            list={list}
            />
        ))}
      </ul>
      <AddBucketList onAdd={handleAdd} />
    </>
  );
}

