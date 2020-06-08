import React from 'react'
import './loader.css'

export const Loader = ({ loading }) => {
  if (!loading) {
    return null
  }
  return (
    <div className="container">
      <div className="loader" />
      <span className="text">Loading...</span>
    </div>
  );
};
