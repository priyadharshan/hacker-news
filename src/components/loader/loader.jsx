import React from 'react'
import PropTypes from 'prop-types'
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

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}
