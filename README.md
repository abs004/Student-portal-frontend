# Apex College Student Portal

A sleek, modern, and highly responsive role-based academic portal built with **React** and styled using raw, custom **CSS** variables for maximum performance and design precision. 

The application is tailored with rich design aesthetics (sleek dark mode elements, modern gradients, glassmorphism, responsive grids, and subtle micro-animations) to deliver a premium user experience.

---

## 🚀 Key Features

### 1. Unified Dynamic Login Screen
- Fully styled glassmorphism login card with dynamic background glowing animation blobs.
- Role-based tabs supporting instantaneous context switching between **Student**, **Faculty**, and **Admin** profiles.
- Standard form validations, password visibility toggles, and direct links to recovery services.

### 2. Multi-Role Dashboards (Same Core Design)
#### 🧑‍🎓 Student Portal
- **Key Metrics**: Dynamic Stat Cards detailing Attendance %, Cumulative GPA, Course Enrollments, and Pending Assignments.
- **Academic Progress**: Color-coded progress bars for each subject showing syllabus/performance percentage.
- **Classes**: Clear chronologically ordered timetable items for daily lectures showing room numbers, course, and instructors.
- **Assignment Tracker**: Status badge indicator (Submitted vs Pending) with prioritization alerts (High, Medium, Low).
- **Announcements & Events**: Custom scrollable announcement logs and academic calendar highlights.

#### 👩‍🏫 Faculty Portal
- **Key Metrics**: Average Class Attendance, Active Courses count, Grading desk queue, and Scheduled exam monitors.
- **Teaching Schedule**: Highlights classes slated specifically for the instructor's day.
- **Grading Desk**: List of student project/assignment submissions awaiting evaluation, complete with submission counts.
- **Syllabus Tracker**: Progress indicators of curriculum completion for each assigned course.

#### ⚙️ Admin Console
- **Key Metrics**: Institutional summaries including Total Student registry, Active Faculty, Core Catalog listings, and Tuition fee collection metrics.
- **Activity logs**: Live system action feeds (logs on updates, diagnostics, backups, and user access records).
- **Quick Controls**: Management action deck (shortcuts for Registering Students, Appointing Faculty, Course catalogues, and Diagnostics).
- **Maintenance Schedule**: Server auditing alerts and AWS database downtime windows.

### 3. Session & Navigation Persistence
- **Auto-session lock**: Uses local storage persistence so refreshes do not redirect logged-in users back to the Login panel.
- **Active state lock**: Automatically remembers and loads the last active sidebar tab (e.g. Attendance or Marks) on page reload.
- **Deep Clean Logout**: Cleans out credentials, configurations, and state history on Sign Out to allow clean transitions for secondary logins.

---

## 🛠️ Technology Stack
- **Core**: React 18+ (Functional Components & Custom Hooks)
- **Styling**: Pure CSS3 (Design Tokens, Custom CSS Grid, Flexbox layouts, Transitions, and Custom Scrollbars)
- **Typography**: Google Fonts integration (`Plus Jakarta Sans`)
- **Icons**: Hand-optimized inline SVG vector assets

---

## 📁 Folder Structure
```bash
frontend/
├── src/
│   ├── assets/       # Static web assets (logos, images)
│   ├── components/   # Reusable UI Components
│   │   ├── Navbar.jsx    # Sticky responsive navigation profile bar
│   │   ├── Sidebar.jsx   # Dynamic role-tailored sidebar menu
│   │   └── StatCard.jsx  # Value metrics summary card
│   ├── pages/        # Main route views
│   │   ├── dashboard.jsx # Core multi-role dashboard wrapper & grids
│   │   ├── dashboard.css # Scoped stylesheet for the dashboard
│   │   ├── login.jsx     # Sleek Login panel page
│   │   └── login.css     # Stylesheet for portal authentication
│   ├── App.jsx       # State control & session coordinator
│   ├── index.css     # Global reset & typography config
│   └── main.jsx      # React entry point
```

---

## ⚡ Development Setup

To run this application locally, ensure you have **Node.js** installed, then execute:

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Run Dev server**:
   ```bash
   npm run dev
   ```

3. **Access the portal**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.
