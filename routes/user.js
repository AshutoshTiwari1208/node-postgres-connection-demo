const express = require("express");
const router = express.Router();
const db = require("../config/database");
const User = require("../models/User");


router.get("/", (req,res)=> {
    User.findAll().then(users=> {
        console.log("USers are ::", users);
        res.sendStatus(200);
    }).catch(e=> {
        console.log("Error is :: ", e);
    });
});

router.get("/store", (req,res)=> {

    let data =  {
        title: "The Hackman Edition2",
        technologies: "Kali Linux2",
        budget: "20020",
        description: "A 2 hacking guide for beginning to pro level.",
        email:"ashutosh2@gmail.com"
    }

    let {title, technologies, budget, description, email} = data;

    User.create( {
        title,
        technologies,
        budget,
        description,
        email
    }).then(_=> {
        res.redirect("/users");
    }).catch(err=> {
        res.send("Error occured", err);
    });
});

module.exports = router;