import React, { useState } from 'react';
import styles from './Board.module.css'

export default function Board({count, total}) {
  
  return (
    <div className={styles.board}>
        {count} / {total} bucket lists done.
    </div>
  );
}

