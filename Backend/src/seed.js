require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/User");
const Task = require("./models/Task");

const seedDatabase = async () => {
    try {

        // MongoDB connect
        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected");

        // Existing data delete
        await User.deleteMany({});
        await Task.deleteMany({});

        // Password hash
        const hashedPassword = await bcrypt.hash("123", 10);

        // =========================
        // USERS
        // =========================

        const users = await User.insertMany([

            // ADMIN
            {
                firstName: "Rajesh",
                email: "admin@gmail.com",
                password: hashedPassword,
                role: "admin"
            },

            // EMPLOYEE 1
            {
                firstName: "Rahul",
                email: "employee1@gmail.com",
                password: hashedPassword,
                role: "employee"
            },

            // EMPLOYEE 2
            {
                firstName: "Aman",
                email: "employee2@gmail.com",
                password: hashedPassword,
                role: "employee"
            },

            // EMPLOYEE 3
            {
                firstName: "Vivek",
                email: "employee3@gmail.com",
                password: hashedPassword,
                role: "employee"
            },

            // EMPLOYEE 4
            {
                firstName: "Rohit",
                email: "employee4@gmail.com",
                password: hashedPassword,
                role: "employee"
            },

            // EMPLOYEE 5
            {
                firstName: "Arjun",
                email: "employee5@gmail.com",
                password: hashedPassword,
                role: "employee"
            }

        ]);

        console.log("Users inserted");

        // =========================
        // EMPLOYEES
        // =========================

        const rahul = users.find(
            user => user.email === "employee1@gmail.com"
        );

        const aman = users.find(
            user => user.email === "employee2@gmail.com"
        );

        const vivek = users.find(
            user => user.email === "employee3@gmail.com"
        );

        const rohit = users.find(
            user => user.email === "employee4@gmail.com"
        );

        const arjun = users.find(
            user => user.email === "employee5@gmail.com"
        );

        // =========================
        // TASKS
        // =========================

        await Task.insertMany([

            // RAHUL
            {
                taskTitle: "Create Login Page",
                taskDescription: "Create responsive login page using React and Tailwind",
                taskDate: "2026-09-12",
                category: "Development",
                assignedTo: rahul._id,
                status: "accepted"
            },

            {
                taskTitle: "Fix Navbar",
                taskDescription: "Create responsive navbar",
                taskDate: "2026-09-13",
                category: "Development",
                assignedTo: rahul._id,
                status: "accepted"
            },

            {
                taskTitle: "Create Homepage",
                taskDescription: "Create homepage UI",
                taskDate: "2026-09-10",
                category: "UI Design",
                assignedTo: rahul._id,
                status: "completed"
            },

            // AMAN
            {
                taskTitle: "Design Dashboard",
                taskDescription: "Design dashboard UI",
                taskDate: "2026-09-12",
                category: "Design",
                assignedTo: aman._id,
                status: "new"
            },

            {
                taskTitle: "Create Cards",
                taskDescription: "Create cards for dashboard",
                taskDate: "2026-09-09",
                category: "Development",
                assignedTo: aman._id,
                status: "completed"
            },

            {
                taskTitle: "API Integration",
                taskDescription: "Integrate backend API",
                taskDate: "2026-09-08",
                category: "Backend",
                assignedTo: aman._id,
                status: "failed"
            },

            // VIVEK
            {
                taskTitle: "Create Profile Page",
                taskDescription: "Create profile page",
                taskDate: "2026-09-14",
                category: "Development",
                assignedTo: vivek._id,
                status: "new"
            },

            {
                taskTitle: "Test Application",
                taskDescription: "Test the application",
                taskDate: "2026-09-15",
                category: "Testing",
                assignedTo: vivek._id,
                status: "accepted"
            },

            {
                taskTitle: "Create Footer",
                taskDescription: "Create website footer",
                taskDate: "2026-09-10",
                category: "Development",
                assignedTo: vivek._id,
                status: "completed"
            },

            // ROHIT
            {
                taskTitle: "Design Login UI",
                taskDescription: "Design login user interface",
                taskDate: "2026-09-13",
                category: "UI Design",
                assignedTo: rohit._id,
                status: "new"
            },

            {
                taskTitle: "Create Buttons",
                taskDescription: "Create reusable buttons",
                taskDate: "2026-09-09",
                category: "Development",
                assignedTo: rohit._id,
                status: "completed"
            },

            {
                taskTitle: "Fix CSS Issue",
                taskDescription: "Fix CSS related issue",
                taskDate: "2026-09-08",
                category: "CSS",
                assignedTo: rohit._id,
                status: "failed"
            },

            // ARJUN
            {
                taskTitle: "Create Task Component",
                taskDescription: "Create task component",
                taskDate: "2026-09-12",
                category: "Development",
                assignedTo: arjun._id,
                status: "new"
            },

            {
                taskTitle: "Review Code",
                taskDescription: "Review project code",
                taskDate: "2026-09-14",
                category: "Code Review",
                assignedTo: arjun._id,
                status: "accepted"
            },

            {
                taskTitle: "Setup Project",
                taskDescription: "Setup project environment",
                taskDate: "2026-09-07",
                category: "Setup",
                assignedTo: arjun._id,
                status: "completed"
            }

        ]);

        console.log("Tasks inserted");

        console.log("Database seeded successfully");

        process.exit();

    } catch (error) {

        console.log("Seed error:", error);

        process.exit(1);

    }
};

seedDatabase();