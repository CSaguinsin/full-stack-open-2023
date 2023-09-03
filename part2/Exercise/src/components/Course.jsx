import React from 'react';

const Course = ({ course }) => {
  // Calculate the total sum of exercises using reduce for each course
  const totalExercises = course.parts.reduce((accumulator, part) => {
    return accumulator + part.exercises;
  }, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
      </ul>
      <p>Total exercises: {totalExercises}</p>
    </div>
  );
};

export default Course;
