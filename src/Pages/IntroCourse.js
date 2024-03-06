import React from "react";

const IntroCourse = () => {
  const courses = [
    { id: 1, title: "Introduction to React", instructor: "John Doe" },
    { id: 2, title: "Advanced React Techniques", instructor: "Jane Smith" },
    { id: 3, title: "React State Management", instructor: "Alice Johnson" },
  ];

  return (
    <div>
      <h1>Welcome to My Course Page</h1>
      <div>
        {courses.map(course => (
          <div key={course.id}>
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroCourse;
