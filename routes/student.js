const express = require("express");
const router = express.Router();

const { registerstd, loginstd,refreshstd,showprofileStu} = require("../controllers/studentControllers");

router.post("/", async (req,res) => {
    res.sendStatus(400);
});

router.post("/register", registerstd);
router.post("/login" , loginstd);
router.post("/refresh" , refreshstd);
router.get("/show/:id" , showprofileStu);
module.exports = router;