import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <p>HomePage</p>
      <Link to="/not-found">404</Link>
      <a to="/not-found">404</a>
    </div>
  );
};

export { HomePage };
