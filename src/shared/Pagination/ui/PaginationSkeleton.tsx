// PaginationSkeleton.tsx
import React from 'react';
import styles from './Pagination.module.css';

export const PaginationSkeleton: React.FC = () => (
  <div className={styles.wrapper}>
    <div className={`${styles.skeleton} ${styles['skeleton-arrow']}`} />
    {[...Array(6)].map((_, i) => (
      <div key={i} className={`${styles.skeleton} ${styles['skeleton-page']}`} />
    ))}
    <div className={`${styles.skeleton} ${styles['skeleton-arrow']}`} />
  </div>
);
