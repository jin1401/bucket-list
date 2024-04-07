import React, { useState } from 'react';
import List from '../List/List';
import AddBucketList from '../AddBucketList/AddBucketList';
import styles from './Bucketlist.module.css'
import Board from '../Board/Board';

export default function Bucketlist({filter}) {
  const [lists, setLists] = useState([{id : 123, text: 'travel to mars', status: 'not-yet'}]);

  const handleAdd = (list) => setLists([...lists, list])

  const handleChange = (updated) => setLists(lists.map((list)=>(list.id === updated.id ? updated : list)));
  const handleDelete = (deleted) => setLists(lists.filter((list) => (list.id !== deleted.id)));
  const filtered = getFilteredItems(lists, filter);
  const accomplishedNumber = lists.filter(list => list.status==='accomplished').length;
  const totalListsNumber = lists.length;
  return (
    <section className={styles.container}>
      <Board count={accomplishedNumber} total={totalListsNumber}/>
      <ul className={styles.list}>
        {filtered.map((list)=>(
            <List 
            key={list.id}
            list={list}
            onChange={handleChange}
            onDelete={handleDelete}
            />
        ))}
      </ul>
      <AddBucketList onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(lists, filter) {
  if(filter === 'all'){
    return lists;
  } else {
    return lists.filter((list) => (list.status === filter));
  }
}

