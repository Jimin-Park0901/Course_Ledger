import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css"; // Import CSS for styling
import placeHolderPic from "../assets/coursesimage.png";

const CourseCard = ({ id, title, description }) => {
  return (
    <Link to={`/course/${id}`}>
      <div className="course-card">
        <img src={placeHolderPic} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default CourseCard;
