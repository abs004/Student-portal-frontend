export default function Navbar({ studentName = "Abhishek S", userRole = "student" }) {
  const initials = studentName.split(" ").map(n => n[0]).join("").toUpperCase();

  const roleLabels = {
    student: "B.Tech — CSE, Sem 6",
    teacher: "Faculty — CSE Dept.",
    admin: "System Administrator"
  };

  return (
    <header className="nb-root">
      {/* Left: Page title */}
      <div className="nb-left">
      </div>

      {/* Right: actions */}
      <div className="nb-right">
        {/* Search */}
        <div className="nb-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nb-search-icon"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <input type="text" placeholder="Search courses, marks…" className="nb-search-input" />
        </div>

        {/* Notifications */}
        <button className="nb-icon-btn" aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
          <span className="nb-notif-dot" />
        </button>

        {/* Divider */}
        <span className="nb-divider" />

        {/* Profile */}
        <div className="nb-profile">
          <div className="nb-avatar">{initials}</div>
          <div className="nb-profile-info">
            <span className="nb-profile-name">{studentName}</span>
            <span className="nb-profile-role">{roleLabels[userRole] || roleLabels.student}</span>
          </div>
        </div>
      </div>
    </header>
  );
}