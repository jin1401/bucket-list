import React from 'react';
import styles from './Header.module.css'
import { useDarkMode } from '../../Context/DarkmodeProvider';
import { FiSun } from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs";

export default function Header({filters, filter, onFilterChange}) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>{!darkMode && <BsFillMoonFill />}
        {darkMode && <FiSun />}</button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}
          className={styles.filter} >
            <button className={`${styles.filter} ${filter === value && styles.selected}`}
            onClick={() => onFilterChange(value)}>
            {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

