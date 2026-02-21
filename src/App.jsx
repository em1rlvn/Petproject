import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MyProfile from "./components/myprofile";
import MyCourses from "./components/mycourses";
import MyDeadlines from "./components/mydeadlines";
import MySchedule from "./components/MySchedule";
import Subjects from "./components/subjects";
import React from "react";
import Footer from "./components/footer";
import PageTransition from "./components/PageTransition";
import "./App.css";
import { NavLink } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          id: 1,
          name: 'Web Development',
          teacher: 'Kybanych Dzhyrgalbekov',
          deadline: '16.03.2026, Can be closed earlier',
          schedule: [
        { day: "Monday", time: "15:15 - 16:40" },
        { day: "Wednesday", time: "10:00 - 11:25" }
      ]
        },
        {
          id: 2,
          name: 'History of Kyrgyzstan',
          teacher: 'Gulnura Dyikanbaeva',
          deadline: '19.03.2026, Midterm exam on 16.12.2025',
          schedule: [
        { day: "Monday", time: "13:00 - 13:40" },
        { day: "Friday", time: "10:45 - 12:10" }
      ]
        },
        {
          id: 3,
          name: 'English',
          teacher: 'Aizada Omurkulova',
          deadline: '19.03.2026, Without midterm exam',
          schedule: [
        { day: "Monday", time: "13:45 - 15:10" },
        { day: "Tuesday", time: "13:45 - 15:10" },
        { day: "Wednesday", time: "13:45 - 15:10" }
      ]
        },
        {
          id: 4,
          name: 'German',
          teacher: 'Temirlan Sultanbekov',
          deadline: '19.03.2026, Midterm exam on 19.12.2025',
          schedule: [
        { day: "Tuesday", time: "10:00 - 11:25" },
      ]
        },
        {
          id: 5,
          name: 'Physical Training',
          teacher: 'Azat Shayimbek Uulu',
          deadline: '19.03.2026, Without any midterm exam',
          schedule: [
        { day: "Tuesday", time: "11:30 - 13:40" },
        
      ]
        },
        {
          id: 6,
          name: 'Geography of Kyrgyzstan',
          teacher: 'Emilbek Zholdoshbekov',
          deadline: '19.03.2026, Midterm exam on 17.12.2025',
          schedule: [
        { day: "Wednesday", time: "11:30 - 13:40" },
      ]
        },
        {
          id: 7,
          name: 'Discrete Mathematics',
          teacher: 'Nurmuhammed Abdullaev',
          deadline: '19.03.2026, Without midterm exam',
          schedule: [
        { day: "Thursday", time: "8:30 - 9:55" },
      ]
        },
        {
          id: 8,
          name: 'Manas Studies',
          teacher: 'Toktokan Duisheeva',
          deadline: '19.03.2026, Midterm exam on 18.12.2025',
          schedule: [
        { day: "Thursday", time: "10:00 - 11:25" },
      ]
        },
        {
          id: 9,
          name: 'Algoritmization',
          teacher: 'Mirlan Nurbekov',
          deadline: '19.03.2026, Without midterm exam',
          schedule: [
        { day: "Thursday", time: "13:00 - 14:25" },
        { day: "Friday", time: "13:00 - 15:10" },
      ]
        },
        {
          id: 10,
          name: 'Database Systems',
          teacher: 'Edil Turdumambetov',
          deadline: '19.03.2026, Midterm exam on 16.12.2025',
          schedule: [
        { day: "Friday", time: "8:30 - 9:55" },
      ]
        },
        {
          id: 11,
          name: 'Advisor hour',
          teacher: 'Khadidzha Khazhazh',
          description: 'Chill, no midterm exam',
          schedule: [
        { day: "Friday", time: "10:00 - 10:40" },
        ]

        }
      ]
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        
        <PageTransition>
          <Routes>
            <Route path="/profile" className = "profile" element={<MyProfile />} />
            <Route path="/courses" element={<MyCourses subjects={this.state.subjects} />} />
            <Route path="/deadlines" element={<MyDeadlines subjects={this.state.subjects} />} />
            <Route path="/schedule" element={<MySchedule subjects={this.state.subjects} />} />
          </Routes>
        </PageTransition>
        <Footer />
      </div>
    )
  }
}

export default App
