import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import "./dashboard.css";

export default function Dashboard({ onLogout, userRole = "student" }) {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "dashboard";
  });

  const handleSetActiveTab = (tab) => {
    localStorage.setItem("activeTab", tab);
    setActiveTab(tab);
  };

  const studentData = { name: "John Doe" };
  const displayName = userRole === "admin" ? "Administrator" : userRole === "teacher" ? "Prof. John Doe" : "John Doe";

  const courseProgress = [
    { name: "Mathematics IV", percentage: 85, color: "#6366f1" },
    { name: "Database Management Systems", percentage: 90, color: "#10b981" },
    { name: "Operating Systems", percentage: 75, color: "#f59e0b" },
    { name: "Computer Networks", percentage: 80, color: "#8b5cf6" },
    { name: "Software Engineering", percentage: 95, color: "#06b6d4" },
    { name: "Design & Analysis of Algorithms", percentage: 70, color: "#ef4444" },
  ];

  const announcements = [
    { title: "End Semester Examinations Schedule", date: "01 Jun 2026", description: "The end semester theory and practical examinations schedule is officially released. Exams are slated to start from June 15, 2026.", category: "Exam" },
    { title: "Google Virtual Pre-Placement Talk", date: "31 May 2026", description: "Google University Relations is hosting a virtual talk at 10:00 AM regarding software engineering internship opportunities.", category: "Placement" },
    { title: "System Maintenance Downtime Window", date: "30 May 2026", description: "The student portal will undergo database maintenance on Wednesday, June 3, from 2:00 AM to 5:00 AM.", category: "General" },
  ];

  const events = [
    { title: "Apex Annual Hackathon 2026", day: "05", month: "JUN", time: "10:00 AM", location: "Seminar Hall 1" },
    { title: "Guest Lecture: AI in Software Engineering", day: "12", month: "JUN", time: "02:00 PM", location: "Main Auditorium" },
    { title: "Sports Day Registrations Deadline", day: "18", month: "JUN", time: "05:00 PM", location: "Physical Ed. Office" },
  ];

  const todayClasses = [
    { subject: "Database Management Systems", time: "09:00 – 10:00 AM", room: "302", instructor: "Prof. R. Sharma", color: "#10b981" },
    { subject: "Operating Systems", time: "10:15 – 11:15 AM", room: "405", instructor: "Prof. S. Rao", color: "#f59e0b" },
    { subject: "Design & Analysis of Algorithms", time: "11:30 AM – 12:30 PM", room: "302", instructor: "Prof. A. Gupta", color: "#6366f1" },
    { subject: "Computer Networks Lab", time: "02:00 – 04:00 PM", room: "Lab 3", instructor: "Prof. M. Verma", color: "#8b5cf6" },
  ];

  const assignments = [
    { title: "DBMS Normalization Project", subject: "Database Management Systems", dueDate: "08 Jun 2026", priority: "High", status: "Pending" },
    { title: "Socket Programming Exercises", subject: "Computer Networks", dueDate: "05 Jun 2026", priority: "High", status: "Pending" },
    { title: "OS Semaphores Implementation Report", subject: "Operating Systems", dueDate: "10 Jun 2026", priority: "Medium", status: "Pending" },
    { title: "Algorithms Asymptotic Quiz", subject: "Design & Analysis of Algorithms", dueDate: "14 Jun 2026", priority: "Low", status: "Submitted" },
  ];

  const currentDate = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  const getStatCards = () => {
    if (userRole === "admin") {
      return [
        {
          title: "Total Students", value: "1,248", trend: "+24 new admissions", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        },
        {
          title: "Total Faculty", value: "86", trend: "All departments active", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        },
        {
          title: "Active Courses", value: "48", trend: "Across 6 departments", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h8M8 11h6"/></svg>
        },
        {
          title: "Fee Collections", value: "94%", trend: "+2.5% this month", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><rect width="6" height="4" x="9" y="10" rx="1"/></svg>
        }
      ];
    } else if (userRole === "teacher") {
      return [
        {
          title: "Class Attendance", value: "88%", trend: "-1.2% this week", trendUp: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        },
        {
          title: "Active Courses", value: "3", trend: "DBMS, OS, CN Lab", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M8 7h8M8 11h6"/></svg>
        },
        {
          title: "Submissions to Grade", value: "57", trend: "Across 3 assignments", trendUp: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
        },
        {
          title: "Scheduled Exams", value: "1", trend: "DBMS Theory - June 18", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
        }
      ];
    } else {
      return [
        {
          title: "Attendance", value: "92%", trend: "+0.5% this week", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
        },
        {
          title: "Cumulative GPA", value: "8.7", trend: "Rank #4 in class", trendUp: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        },
        {
          title: "Courses Enrolled", value: "6", trend: "Active semester", trendUp: true,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M8 7h8M8 11h6" /></svg>
        },
        {
          title: "Pending Assignments", value: "3", trend: "2 due this week", trendUp: false,
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
        }
      ];
    }
  };

  const getWelcomeContent = () => {
    if (userRole === "admin") {
      return {
        heading: "Good morning, Admin 👋",
        sub: <>Core systems are active and healthy. System diagnostics database is <strong>fully optimized</strong>.</>,
        badge: "System Admin"
      };
    } else if (userRole === "teacher") {
      return {
        heading: "Good morning, Prof. John 👋",
        sub: <>You have <strong>2 lectures</strong> scheduled today. Keep track of 57 pending assignments on your grading desk.</>,
        badge: "Faculty Access"
      };
    } else {
      return {
        heading: `Good morning, ${studentData.name.split(" ")[0]} 👋`,
        sub: <>You're in the top 5% for attendance. Keep it up — <strong>3 assignments</strong> are due this week.</>,
        badge: "Semester 6 · Active"
      };
    }
  };

  const formatTabTitle = (tab) => {
    return tab
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const renderDashboardContent = () => {
    if (userRole === "admin") {
      return (
        <div className="db-content-grid">
          {/* LEFT COLUMN */}
          <div className="db-col-left">
            {/* System Logs */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">System Activity Logs</h3>
                <span className="db-card-tag">Live Status</span>
              </div>
              <div className="db-class-list">
                {[
                  { log: "User 'teacher_sharma' updated grades for DBMS Lab.", time: "10 mins ago", type: "update", color: "#10b981" },
                  { log: "System backup database.bak completed successfully.", time: "1 hour ago", type: "system", color: "#6366f1" },
                  { log: "Admin published new Announcement: End Sem Exams Schedule.", time: "2 hours ago", type: "info", color: "#8b5cf6" },
                  { log: "User 'student_john' logged in from Chrome/Windows.", time: "3 hours ago", type: "login", color: "#cbd5e1" },
                  { log: "Warning: High memory usage detected on Web Server.", time: "5 hours ago", type: "warning", color: "#f59e0b" },
                ].map((l, i) => (
                  <div key={i} className="db-class-item" style={{ "--cls-color": l.color }}>
                    <div className="db-class-stripe" />
                    <div className="db-class-body">
                      <p className="db-class-subject" style={{ fontSize: '13.5px', fontWeight: '600' }}>{l.log}</p>
                      <p className="db-class-instructor">{l.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Performance Distribution */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">CGPA Distribution (All Students)</h3>
                <span className="db-card-tag">Overview</span>
              </div>
              <div className="db-progress-list">
                {[
                  { name: "CGPA > 9.0 (Excellent)", percentage: 12, color: "#10b981" },
                  { name: "CGPA 8.0 – 9.0 (Very Good)", percentage: 48, color: "#6366f1" },
                  { name: "CGPA 7.0 – 8.0 (Good)", percentage: 32, color: "#f59e0b" },
                  { name: "CGPA < 7.0 (Needs Improvement)", percentage: 8, color: "#ef4444" },
                ].map((d, i) => (
                  <div key={i} className="db-progress-item">
                    <div className="db-progress-meta">
                      <span className="db-progress-name">{d.name}</span>
                      <span className="db-progress-pct" style={{ color: d.color }}>{d.percentage}%</span>
                    </div>
                    <div className="db-progress-track">
                      <div className="db-progress-fill" style={{ width: `${d.percentage}%`, background: d.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="db-col-right">
            {/* Quick Actions */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Quick Actions</h3>
                <span className="db-card-tag">Control Panel</span>
              </div>
              <div className="db-class-list">
                {[
                  { title: "Register Student", desc: "Add new student profile to directory", icon: "👤" },
                  { title: "Appoint Faculty", desc: "Create teacher credentials & assign courses", icon: "🎓" },
                  { title: "Manage Course Catalog", desc: "Edit core curriculum & credit limits", icon: "📚" },
                  { title: "Run Portal Diagnostics", desc: "Verify status of API and backend servers", icon: "⚡" },
                ].map((a, i) => (
                  <div key={i} className="db-class-item" style={{ cursor: 'pointer' }}>
                    <div style={{ fontSize: '20px', paddingRight: '8px' }}>{a.icon}</div>
                    <div className="db-class-body">
                      <p className="db-class-subject" style={{ fontSize: '13.5px' }}>{a.title}</p>
                      <p className="db-class-instructor">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance Schedule */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Maintenance Schedule</h3>
                <span className="db-card-tag">SysAdmin</span>
              </div>
              <div className="db-evt-list">
                {[
                  { title: "System Database Maintenance Window", day: "03", month: "JUN", time: "02:00 AM", location: "US-East AWS Cluster" },
                  { title: "Annual Portal Audit Report Submission", day: "10", month: "JUN", time: "05:00 PM", location: "Registrar Office" },
                ].map((e, i) => (
                  <div key={i} className="db-evt-item">
                    <div className="db-evt-cal">
                      <span className="db-evt-month">{e.month}</span>
                      <span className="db-evt-day">{e.day}</span>
                    </div>
                    <div className="db-evt-details">
                      <p className="db-evt-title">{e.title}</p>
                      <p className="db-evt-meta">{e.time} · {e.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (userRole === "teacher") {
      return (
        <div className="db-content-grid">
          {/* LEFT COLUMN */}
          <div className="db-col-left">
            {/* Teaching Schedule */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Today's Teaching Schedule</h3>
                <span className="db-card-tag">2 Sessions Today</span>
              </div>
              <div className="db-class-list">
                {[
                  { subject: "Database Management Systems", time: "09:00 – 10:00 AM", room: "302", enrolled: "64 Students", color: "#10b981" },
                  { subject: "Operating Systems", time: "10:15 – 11:15 AM", room: "405", enrolled: "58 Students", color: "#f59e0b" },
                ].map((c, i) => (
                  <div key={i} className="db-class-item" style={{ "--cls-color": c.color }}>
                    <div className="db-class-stripe" />
                    <div className="db-class-body">
                      <p className="db-class-subject">{c.subject}</p>
                      <p className="db-class-instructor">{c.enrolled}</p>
                    </div>
                    <div className="db-class-right">
                      <span className="db-class-time">{c.time}</span>
                      <span className="db-class-room">Room {c.room}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submissions Pending Grading */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Submissions to Grade</h3>
                <span className="db-card-tag">Grading Desk</span>
              </div>
              <div className="db-asgn-list">
                {[
                  { title: "DBMS Normalization Project", subject: "Database Management Systems", dueDate: "24 pending", priority: "High", status: "Grade Now" },
                  { title: "Socket Programming Exercises", subject: "Computer Networks Lab", dueDate: "18 pending", priority: "High", status: "Grade Now" },
                  { title: "OS Semaphores Implementation Report", subject: "Operating Systems", dueDate: "15 pending", priority: "Medium", status: "Grade Now" },
                ].map((a, i) => (
                  <div key={i} className="db-asgn-item">
                    <div className="db-asgn-left">
                      <span className={`db-prio-dot prio-high`} />
                      <div>
                        <p className="db-asgn-title">{a.title}</p>
                        <p className="db-asgn-subject">{a.subject}</p>
                      </div>
                    </div>
                    <div className="db-asgn-right">
                      <span className="db-status-badge st-pending">{a.status}</span>
                      <span className="db-asgn-due">{a.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="db-col-right">
            {/* Syllabus progress */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Syllabus Completion</h3>
                <span className="db-card-tag">Academic Progress</span>
              </div>
              <div className="db-progress-list">
                {[
                  { name: "Database Management Systems (DBMS)", percentage: 75, color: "#10b981" },
                  { name: "Operating Systems (OS)", percentage: 80, color: "#f59e0b" },
                  { name: "Computer Networks Lab (CN)", percentage: 60, color: "#8b5cf6" },
                ].map((c, i) => (
                  <div key={i} className="db-progress-item">
                    <div className="db-progress-meta">
                      <span className="db-progress-name">{c.name}</span>
                      <span className="db-progress-pct" style={{ color: c.color }}>{c.percentage}%</span>
                    </div>
                    <div className="db-progress-track">
                      <div className="db-progress-fill" style={{ width: `${c.percentage}%`, background: c.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming events for teachers */}
            <div className="db-card">
              <div className="db-card-header">
                <h3 className="db-card-title">Academic Calendar</h3>
                <span className="db-card-tag">Events</span>
              </div>
              <div className="db-evt-list">
                {[
                  { title: "Apex Annual Faculty Review meeting", day: "05", month: "JUN", time: "10:00 AM", location: "Boardroom 2" },
                  { title: "End Sem Theory Marks Upload Deadline", day: "20", month: "JUN", time: "11:59 PM", location: "Academic Office Portal" },
                ].map((e, i) => (
                  <div key={i} className="db-evt-item">
                    <div className="db-evt-cal">
                      <span className="db-evt-month">{e.month}</span>
                      <span className="db-evt-day">{e.day}</span>
                    </div>
                    <div className="db-evt-details">
                      <p className="db-evt-title">{e.title}</p>
                      <p className="db-evt-meta">{e.time} · {e.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Student Layout
    return (
      <div className="db-content-grid">
        {/* LEFT */}
        <div className="db-col-left">
          {/* Academic Progress */}
          <div className="db-card">
            <div className="db-card-header">
              <h3 className="db-card-title">Academic Progress</h3>
              <span className="db-card-tag">Sem 6</span>
            </div>
            <div className="db-progress-list">
              {courseProgress.map((c, i) => (
                <div key={i} className="db-progress-item">
                  <div className="db-progress-meta">
                    <span className="db-progress-name">{c.name}</span>
                    <span className="db-progress-pct" style={{ color: c.color }}>{c.percentage}%</span>
                  </div>
                  <div className="db-progress-track">
                    <div className="db-progress-fill" style={{ width: `${c.percentage}%`, background: c.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Classes */}
          <div className="db-card">
            <div className="db-card-header">
              <h3 className="db-card-title">Today's Classes</h3>
              <span className="db-card-tag">4 sessions</span>
            </div>
            <div className="db-class-list">
              {todayClasses.map((c, i) => (
                <div key={i} className="db-class-item" style={{ "--cls-color": c.color }}>
                  <div className="db-class-stripe" />
                  <div className="db-class-body">
                    <p className="db-class-subject">{c.subject}</p>
                    <p className="db-class-instructor">{c.instructor}</p>
                  </div>
                  <div className="db-class-right">
                    <span className="db-class-time">{c.time}</span>
                    <span className="db-class-room">Room {c.room}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignment Tracker */}
          <div className="db-card">
            <div className="db-card-header">
              <h3 className="db-card-title">Assignment Tracker</h3>
              <span className="db-card-tag">3 pending</span>
            </div>
            <div className="db-asgn-list">
              {assignments.map((a, i) => (
                <div key={i} className={`db-asgn-item ${a.status === "Submitted" ? "db-asgn-done" : ""}`}>
                  <div className="db-asgn-left">
                    <span className={`db-prio-dot ${prioClass[a.priority]}`} />
                    <div>
                      <p className="db-asgn-title">{a.title}</p>
                      <p className="db-asgn-subject">{a.subject}</p>
                    </div>
                  </div>
                  <div className="db-asgn-right">
                    <span className={`db-status-badge ${a.status === "Submitted" ? "st-done" : "st-pending"}`}>{a.status}</span>
                    <span className="db-asgn-due">Due {a.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="db-col-right">
          {/* Announcements */}
          <div className="db-card db-card-scroll">
            <div className="db-card-header">
              <h3 className="db-card-title">Announcements</h3>
              <span className="db-card-tag">{announcements.length} new</span>
            </div>
            <div className="db-ann-list">
              {announcements.map((a, i) => (
                <div key={i} className="db-ann-item">
                  <div className="db-ann-meta">
                    <span className={`db-ann-cat ${catClass[a.category]}`}>{a.category}</span>
                    <span className="db-ann-date">{a.date}</span>
                  </div>
                  <p className="db-ann-title">{a.title}</p>
                  <p className="db-ann-desc">{a.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="db-card">
            <div className="db-card-header">
              <h3 className="db-card-title">Upcoming Events</h3>
              <span className="db-card-tag">{events.length} events</span>
            </div>
            <div className="db-evt-list">
              {events.map((e, i) => (
                <div key={i} className="db-evt-item">
                  <div className="db-evt-cal">
                    <span className="db-evt-month">{e.month}</span>
                    <span className="db-evt-day">{e.day}</span>
                  </div>
                  <div className="db-evt-details">
                    <p className="db-evt-title">{e.title}</p>
                    <p className="db-evt-meta">{e.time} · {e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const catClass = { "Exam": "cat-exam", "Placement": "cat-placement", "General": "cat-general" };
  const prioClass = { "High": "prio-high", "Medium": "prio-medium", "Low": "prio-low" };

  const welcomeContent = getWelcomeContent();
  const statCards = getStatCards();

  return (
    <div className="db-layout">
      <Sidebar activeTab={activeTab} setActiveTab={handleSetActiveTab} onLogout={onLogout} userRole={userRole} />

      <div className="db-main">
        <Navbar studentName={displayName} userRole={userRole} />

        <div className="db-body">
          {activeTab === "dashboard" ? (
            <>
              {/* Welcome Banner */}
              <div className="db-welcome">
                <div className="db-welcome-text">
                  <h2 className="db-welcome-heading">{welcomeContent.heading}</h2>
                  <p className="db-welcome-date">{currentDate}</p>
                  <p className="db-welcome-sub">{welcomeContent.sub}</p>
                </div>
                <div className="db-welcome-badge">
                  <span className="db-sem-badge">{welcomeContent.badge}</span>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="db-stats-grid">
                {statCards.map((s, i) => (
                  <StatCard key={i} title={s.title} value={s.value} icon={s.icon} trend={s.trend} trendUp={s.trendUp} />
                ))}
              </div>

              {/* Content Grid */}
              {renderDashboardContent()}
            </>
          ) : (
            <div className="db-placeholder">
              <div className="db-placeholder-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
              </div>
              <h2>{formatTabTitle(activeTab)}</h2>
              <p>This section is coming soon. Check back later for your real-time academic data.</p>
              <button className="db-back-btn" onClick={() => handleSetActiveTab("dashboard")}>Back to Dashboard</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}