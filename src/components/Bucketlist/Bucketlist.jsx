import React, { useState } from 'react';
import List from '../List/List';
import { v4 as uuidv4 } from 'uuid';

export default function Bucketlist() {
  const [lists, setLists] = useState([{id : 123, text: 'travel to mars', status: 'active'}]);
  return (
    <ul>
      {lists.map((list)=>(
          <List 
          key={list.id}
          list={list}
          />
      ))}
    </ul>
  );
}

