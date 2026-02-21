import React from 'react';

function MyDeadlines({ subjects }) {
  return (
    <div>
      <h1>My Deadlines</h1>
      {subjects.map((subject) => (
        <div key={subject.id}>
          <h3>{subject.name}</h3>
          <p>{subject.deadline}</p>
        </div>
      ))}
    </div>
  );
}

export default MyDeadlines;