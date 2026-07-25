const express = require("express");
const router = express.Router();

const {
    createUser,
    getUsers
} = require("../models/user");


router.post("/", (req, res) => {

    const user = createUser(req.body);

    res.json({
        message: "User created successfully",
        user
    });

});


router.get("/", (req, res) => {

    res.json({
        users: getUsers()
    });

});


module.exports = router;
