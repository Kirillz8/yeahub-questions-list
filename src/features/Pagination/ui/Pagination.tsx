import { Link } from 'react-router-dom';
import styles from './Pagination.module.css';

type Props = {
  total: number;
  limit: number;
  currentPage: number;
};

const DOTS = '...';

function getPageNumbers(currentPage: number, totalPages: number): (number | typeof DOTS)[] {
  const delta = 2; // сколько «соседних» номеров вокруг current
  const pages: (number | typeof DOTS)[] = [];

  const left = Math.max(2, currentPage - delta);
  const right = Math.min(totalPages - 1, currentPage + delta);

  // 1 всегда есть
  pages.push(1);

  // если есть разрыв между 1 и left
  if (left > 2) {
    pages.push(DOTS);
  }

  // номера от left до right
  for (let i = left; i <= right; i++) {
    pages.push(i);
  }

  // если есть разрыв между right и последней страницей
  if (right < totalPages - 1) {
    pages.push(DOTS);
  }

  // последняя страница
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}

export const Pagination = ({ total, limit, currentPage }: Props) => {
  const totalPages = Math.ceil(total / limit);
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav className={styles.wrapper} aria-label="Pagination">
      <Link to={`?page=${Math.max(1, currentPage - 1)}`} className={styles.arrow}>
        ←
      </Link>

      {pages.map((p, idx) =>
        p === DOTS ? (
          <span key={`dots-${idx}`} className={styles.ellipsis}>
            …
          </span>
        ) : (
          <Link
            key={p}
            to={`?page=${p}`}
            className={p === currentPage ? `${styles.page} ${styles.active}` : styles.page}
          >
            {p}
          </Link>
        ),
      )}

      <Link to={`?page=${Math.min(totalPages, currentPage + 1)}`} className={styles.arrow}>
        →
      </Link>
    </nav>
  );
};
