function MyCourses({ subjects }) {
  
  return (
    <div>
      <h1 className="courses-title">My Courses</h1>
      {subjects.map((subject) => (
        
        <div key={subject.id} className="card">
          <h3 className="course-title">{subject.name}</h3>
          <p>Teacher: {subject.teacher}</p>
        </div>
      ))}
    </div>
    
  );
}


export default MyCourses;