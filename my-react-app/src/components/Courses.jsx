import React from 'react'

export default function Courses({ subjects }) {
  if (!subjects || subjects.length === 0) {
    return <main><h1>My Courses</h1><p>No courses available.</p></main>
  }
  return (
    <main>
      <h1>My Courses</h1>
      {subjects.map(subject => (
        <div key={subject.id}>
          <h2>{subject.name}</h2>
          <p>Teacher: {subject.teacher}</p>
        </div>
      ))}
    </main>
  )
}