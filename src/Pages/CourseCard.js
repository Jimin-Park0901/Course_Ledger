import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css"; // Import CSS for styling

const CourseCard = ({ id, title, description, imageUrl }) => {
  return (
    <Link to={`/course/${id}`} className="course-card-link">
      <button>
        <div className="course-card">
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </button>
    </Link>
  );
};

export default CourseCard;
