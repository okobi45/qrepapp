<<<<<<< Updated upstream
# SWR Secure Web Report
=======
# SWR SECURE WEB REPORT

This is a secure web report for community based reporting built using MERN stack.

# SWR Description

SWR (Secure Web Report) is a community based crime reporting appplication which allows community members to report crime incidents on the application. The app is built to only allow only verified and registered users to access main features of the application.

#SWR Background 

SWR was previously called Qrep app, which was strictly frontend based with no backend or server. The app was built for anonymous crime reporting. The project has been redesigned into community styled web app where verified and registered members will have access.

# SWR Application Functional Features 

    #User Registration:
    name, email, password and confirm password

    ## User Login
        email, password and login is redirected based on role assigned to their dashboard

    ## Incident Reporting
        Registered and logged in users can submit their reports with five fields: Crime type, date, county, location and description

    ## User report mangement
        register, report incident, view incident report, monitor previously submitted report

    # Admin Report Management
        Admin can view all reports from the          reporters, search by crime type or county, can also filter status (pending, Under Review, Resolved) and update report status and can also delete report. 

    #Admin User Management
        Admin can view all users, add new users with role assignment and delete users. 

    #Dynamic Navbar
        The navbar shows (Home, About Us, Contact Us, Login, Register) for users not logged in but for logged in users it shows (Home, About Us, Contact Us, Dashboard, logout).  

# SWR security features (secure-version branch)

1. Argon2id Password Hashing 
2. IDOR Prevention 
3​. NoSQL Injection Prevention 
4. Input Validation 
5. Helmet Security Headers 
6. CORS restricted to CLIENT_URL only
7.​ Dependency Vulnerability Management 

# SWR Vulnerabilities
 
1. Privilege escalation via registration function to access roles.
2. JWT tokens stored in LocalStorage vulnerable to XSS attacks. 
3. No HTTPS requirement, credentials not encrypted
4. No security logging when login attempts are unsuccessful. 

# SWR Repository Structure

qrepapp/
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── backend/
│   ├── .gitignore
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── Report.js
│   │   └── User.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── report.routes.js
│   │   └── user.routes.js
│   └── server.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Pages/
│   │   ├── About.jsx
│   │   ├── AdminDash.jsx
│   │   ├── Contact.jsx
│   │   ├── Error.jsx
│   │   ├── Faqs.jsx
│   │   ├── Home.jsx
│   │   ├── IncidentForm.jsx
│   │   ├── Login.jsx
│   │   ├── Privacy.jsx
│   │   ├── Register.jsx
│   │   └── ReporterDash.jsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
└── vite.config.js

# SWR Installation guide

## Prerequisite
- Node.js (v18 or higher)
- npm
- Git

### 1. Clone the Repo
    git clone https://github.com/okobi45/qrepapp.git

### 2. Check branch and switch to "secure-version" branch
    - git branch
    -git checkout secure-version

### 3. For Frontend 
    - npm install

### 4. For Backend 
    - cd backend
    npm install



   
