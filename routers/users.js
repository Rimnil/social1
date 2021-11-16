const router =require("express").Router();

router.get("/",(req,res) => {
    res.send("heyyyy this is users route");
})

module.exports = router;