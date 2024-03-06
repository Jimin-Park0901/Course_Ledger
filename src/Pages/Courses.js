import React from "react";
import CourseCard from "./CourseCard"; // Import the CourseCard component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const courses = [
  { id: 1, title: "Course 1", description: "Description of Course 1", imageUrl: "image1.jpg" },
  { id: 2, title: "Course 2", description: "Description of Course 2", imageUrl: "image2.jpg" },
  { id: 3, title: "Course 3", description: "Description of Course 3", imageUrl: "image3.jpg" },
  { id: 4, title: "Course 4", description: "Description of Course 4", imageUrl: "image4.jpg" },
  { id: 5, title: "Course 5", description: "Description of Course 5", imageUrl: "image5.jpg" },
  { id: 6, title: "Course 6", description: "Description of Course 6", imageUrl: "image6.jpg" },
  { id: 7, title: "Course 7", description: "Description of Course 7", imageUrl: "image7.jpg" },
  { id: 8, title: "Course 8", description: "Description of Course 8", imageUrl: "image8.jpg" },
];

function CourseGrid() {
  return (
    <div className="App">
     <header className="App-header">
        <button className="menu-button">
          <FontAwesomeIcon icon={faBars} />
          <div className="menu-dropdown">
            <ul>
              <li>Courses</li>
              <li>Settings</li>
            </ul>
          </div>
        </button>
        <h1 className="App-subtitle2">Credit Ledger</h1>
      </header>
      <main>
        <h1 className="App-title5">Courses</h1>
      <div className="course-grid">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          imageUrl={course.imageUrl}
        />
      ))}
      </div>
      </main>
    </div>
  );
}

export default CourseGrid;
