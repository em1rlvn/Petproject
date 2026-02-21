import React from 'react'

export default function Deadlines({ subjects }) {
  if (!subjects || subjects.length === 0) {
    return <main><h1>My Deadlines</h1><p>No deadlines available.</p></main>
  }
  return (
    <main>
      <h1>My Deadlines</h1>
      {subjects.map(subject => (
        <div key={subject.id}>
          <h2>{subject.name}</h2>
          <p>Deadline: {subject.deadline}</p>
        </div>
      ))}
    </main>
  )
}