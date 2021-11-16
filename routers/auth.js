const router =require("express").Router();
const User = require("../models/User");

//REGISTER

router.post("/registers",  (req,res) => {
    const user = User({
        username:"rimi",
        email:"rimjhim@gmail.com",
        password:"123456"
    })
     user.save();
    res.send("ok!")
});

module.exports = router;