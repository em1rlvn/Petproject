import React from 'react';

function MySchedule({ subjects }) {
  const getStartTimeInMinutes = (timeString) => {
    const start = timeString.split(" - ")[0].trim(); // "08:30" или "9:15"
    const [hours, minutes] = start.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const daysOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const allLessons = [];

  subjects.forEach(subject => {
    if (subject.schedule) {
      subject.schedule.forEach(lesson => {
        allLessons.push({
          subject: subject.name,
          day: lesson.day,
          time: lesson.time
        });
      });
    }
  });

  allLessons.sort((a, b) => {
    const dayA = daysOrder.indexOf(a.day);
    const dayB = daysOrder.indexOf(b.day);

    const dayIndexA = dayA === -1 ? 999 : dayA;
    const dayIndexB = dayB === -1 ? 999 : dayB;

    if (dayIndexA !== dayIndexB) {
      return dayIndexA - dayIndexB;
    }

    return getStartTimeInMinutes(a.time) - getStartTimeInMinutes(b.time);
  });

  return (
    <div>
      <h1 className="schedule-title">My Schedule</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {allLessons.map((lesson, i) => (
            <tr key={i}>
              <td>{lesson.day}</td>
              <td className="time-cell">{lesson.time}</td>  {/* ← добавил класс, если хочешь жирнее время */}
              <td>{lesson.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MySchedule;