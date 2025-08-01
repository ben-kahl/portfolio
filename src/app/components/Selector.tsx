import React from 'react';
import styles from './Selector.module.css';

const Selector = () => {
  return (
    <div className={styles.selectorContainer}>
      <svg viewBox="0 0 192 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M192 0L187.312 86H0L192 0Z" fill="#FDA4F7" fillOpacity="0.7" />
        <path d="M188 2L182.397 85.4798L16 89L188 2Z" fill="white" />
      </svg>
    </div>
  );
};

export default Selector;
