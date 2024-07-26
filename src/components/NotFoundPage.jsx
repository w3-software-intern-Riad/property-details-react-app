import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/NotFoundPage.module.css'; // Optional: for custom styling

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={styles.homeLink}>Go back to the homepage</Link>
    </div>
  );
};

export default NotFoundPage;
