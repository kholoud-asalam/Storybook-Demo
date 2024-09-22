// src/stories/Card.js
import React from "react";
import PropTypes from "prop-types";

export const Card = ({ title, content, backgroundColor }) => {
  const cardStyle = {
    backgroundColor: backgroundColor || "#fff",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "16px",
    maxWidth: "300px",
  };

  return (
    <div style={cardStyle}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Card.defaultProps = {
  backgroundColor: "#fff",
};
