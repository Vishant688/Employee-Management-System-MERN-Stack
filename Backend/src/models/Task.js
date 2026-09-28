const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        taskTitle: {
            type: String,
            required: true
        },

        taskDescription: {
            type: String,
            required: true
        },

        taskDate: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        status: {
            type: String,
            enum: ["new", "accepted", "completed", "failed"],
            default: "new"
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;