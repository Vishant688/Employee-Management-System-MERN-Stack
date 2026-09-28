const express = require("express");
const User = require("../models/User");
const bcrypt =require("bcrypt")
const jwt = require("jsonwebtoken")

const router = express.Router();

//LOGIN
router.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
        const isPasswordCorrect =await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id:user._id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1d"
            }
        )

        res.status(200).json({
            message: "Login successful",
            token: token,
            user:{
                id:user._id,
                firstName:user.firstName,
                email:user.email,
                role:user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
});

// EMOLYE GET
router.get("/employees",async(req,res)=>{

     try{
        const employees = await User.find(
            
              {  role:"employee"},
                {
                    firstName:1,
                    email:1
                }
            );

            res.status(200).json({
                message:"Employee Fetched Successfully",
                employees
            }
        );
    } catch (error){
        res.status(500).json({
            message:"Server error",
            error: error.message
        });
     }
})

module.exports = router;