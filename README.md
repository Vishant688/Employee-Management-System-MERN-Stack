# Employee Management System - MERN Stack

A full-stack task management app with two roles: Admin and Employee. Admins assign tasks to employees and track their status.

**Live Demo:** https://employee-management-system-mern-sta-theta.vercel.app/

## Features

- Separate dashboards for Admin and Employee, with secure login
- Admin selects an employee and assigns a task with a deadline
- Employee is notified by email when a task is assigned
- Employee logs in, views the task and accepts it; admin is notified on acceptance
- Employee marks the task as completed before the deadline, or as failed
- JWT authentication and role-based access control

## Tech Stack

- **Frontend:** React.js, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT
- **Deployment:** Vercel (frontend), Render (backend)

## Run Locally

1. Clone the repo
   ```
   git clone https://github.com/Vishant688/Employee-Management-System-MERN-Stack.git
   cd Employee-Management-System-MERN-Stack
   ```
2. Start the backend
   ```
   cd Backend
   npm install
   npm start
   ```
3. Start the frontend (from the project root)
   ```
   npm install
   npm run dev
   ```
4. Create a `.env` file in `Backend` with your MongoDB connection string and JWT secret.

## Author

Vishant Rawat - [LinkedIn](https://www.linkedin.com/in/vishant-rawat-4948b9292) | [GitHub](https://github.com/Vishant688)
