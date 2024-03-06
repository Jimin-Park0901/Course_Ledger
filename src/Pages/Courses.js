import React from "react";
import CourseCard from "./CourseCard"; // Import the CourseCard component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const courses = [
  { id: 1, title: "Introductory", description: "8/12 completed"},
  { id: 2, title: "Intermediate", description: "7/10 completed"},
  { id: 3, title: "Advanced", description: "10/12 completed"},
  { id: 4, title: "Seminar", description: "4/8 completed"},
  { id: 5, title: "Language", description: "18/22 completed"},
  { id: 6, title: "Untitled", description: "0/0 completed"},
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
