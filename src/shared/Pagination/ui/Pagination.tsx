import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

type Props = {
  total: number;
  limit: number;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({ total, limit, currentPage }) => {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  const endPage = Math.min(totalPages, Math.max(1, currentPage - 3) + 5);
  const startPage = Math.max(1, endPage - 5);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const renderEllipsis = (key: string) => (
    <span key={key} className={styles['dots-icon']}>
      …
    </span>
  );

  return (
    <nav className={styles.wrapper} aria-label="Pagination">
      <Link
        to={`?page=${Math.max(1, currentPage - 1)}`}
        className={`${styles['arrow-button']} ${currentPage === 1 ? styles['arrow-button-disabled'] : ''}`}
        aria-label="Previous page"
      >
        ←
      </Link>

      {startPage > 1 && (
        <>
          <Link to={`?page=1`} className={styles['page-button']}>
            1
          </Link>
          {renderEllipsis('start-ellipsis')}
        </>
      )}

      {pageNumbers.map((page) => (
        <Link
          key={page}
          to={`?page=${page}`}
          className={`${styles['page-button']} ${page === currentPage ? styles['page-button-active'] : ''}`}
        >
          {page}
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {renderEllipsis('end-ellipsis')}
          <Link to={`?page=${totalPages}`} className={styles['page-button']}>
            {totalPages}
          </Link>
        </>
      )}

      <Link
        to={`?page=${Math.min(totalPages, currentPage + 1)}`}
        className={`${styles['arrow-button']} ${currentPage === totalPages ? styles['arrow-button-disabled'] : ''}`}
        aria-label="Next page"
      >
        →
      </Link>
    </nav>
  );
};
