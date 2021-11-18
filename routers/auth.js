const router =require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//REGISTER

router.post("/registers", async (req,res) => {
    try{
        //generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        //save user and response
        const user = await newUser.save(); //complete time 3
        res.status(200).json(user); //time 4
      } catch(err) {
        console.log(err);
      }
});

module.exports = router;