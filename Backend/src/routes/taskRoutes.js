const express = require("express");
const Task = require("../models/Task");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();


//JWT
router.use(authMiddleware);


// ADMIN CHECK
const adminOnly = (req, res, next) => {

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Only admin can perform this action"
        });
    }

    next();
};


// ==========================================
// CREATE TASK - ADMIN ONLY
// ==========================================

router.post("/", adminOnly, async (req, res) => {

    try {

        const {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            assignedTo
        } = req.body;


        const employee = await User.findOne({
            email: assignedTo,
            role: "employee"
        });


        if (!employee) {

            return res.status(404).json({
                message: "Employee not found"
            });

        }


        const task = await Task.create({

            taskTitle,
            taskDescription,
            taskDate,
            category,
            assignedTo: employee._id,
            status: "new"

        });


        res.status(201).json({

            message: "Task created successfully",
            task

        });


    } catch (error) {

        res.status(500).json({

            message: "Server error",
            error: error.message

        });

    }

});


// ==========================================
// GET ALL TASKS - ADMIN ONLY
// ==========================================

router.get("/", async (req, res) => {

    try {

        if (req.user.role !== "admin") {

            return res.status(403).json({
                message: "Only admin can view all tasks"
            });

        }


        const tasks = await Task.find()
            .populate(
                "assignedTo",
                "firstName email"
            );


        res.status(200).json({

            message: "Tasks fetched successfully",
            tasks

        });


    } catch (error) {

        res.status(500).json({

            message: "Server error",
            error: error.message

        });

    }

});


// ==========================================
// GET MY TASKS - EMPLOYEE
// ==========================================

router.get("/my-tasks", async (req, res) => {

    try {

        const employee = await User.findOne({

            _id: req.user.id,
            role: "employee"

        });


        if (!employee) {

            return res.status(404).json({

                message: "Employee not found"

            });

        }


        const tasks = await Task.find({

            assignedTo: employee._id

        });


        res.status(200).json({

            message: "Tasks fetched successfully",
            tasks

        });


    } catch (error) {

        res.status(500).json({

            message: "Server error",
            error: error.message

        });

    }

});


// ==========================================
// ACCEPT TASK - ONLY OWN TASK
// ==========================================

router.put("/:id/accept", async (req, res) => {

    try {

        const task = await Task.findOneAndUpdate(

            {
                _id: req.params.id,
                assignedTo: req.user.id
            },

            {
                status: "accepted"
            },

            {
                new: true
            }

        );


        if (!task) {

            return res.status(404).json({

                message:
                    "Task not found or not assigned to you"

            });

        }


        res.status(200).json({

            message: "Task accepted successfully",
            task

        });


    } catch (error) {

        res.status(500).json({

            message: "Server error",
            error: error.message

        });

    }

});



// COMPLETE TASK - ONLY OWN TASK


router.put("/:id/complete", async (req, res) => {

    try {

        const task = await Task.findOneAndUpdate(

            {
                _id: req.params.id,
                assignedTo: req.user.id
            },

            {
                status: "completed"
            },

            {
                new: true
            }

        );


        if (!task) {

            return res.status(404).json({

                message:
                    "Task not found or not assigned to you"

            });

        }


        res.status(200).json({

            message: "Task completed successfully",
            task

        });


    } catch (error) {

        res.status(500).json({

            message: "Server error",
            error: error.message

        });

    }

});



// FAIL TASK - ONLY OWN TASK


router.put("/:id/fail", async (req, res) => {

    try {

        const task = await Task.findOneAndUpdate(

            {
                _id: req.params.id,
                assignedTo: req.user.id
            },

            {
                status: "failed"
            },

            {
                new: true
            }

        );


        if (!task) {

            return res.status(404).json({

                message:
                    "Task not found or not assigned to you"

            });

        }


        res.status(200).json({

            message: "Task marked as failed",
            task

        });

    } catch (error) {

        res.status(500).json({

            message: "Server error",
            error: error.message

        });

    }

});


module.exports = router;