const express = require('express');
const mogoose = require('mongoose');
const User = require('./User');
const route = express.Router();

route.post('/', async (req, res)=> {
    const{username,age,publicid,imageurl} = req.body;
    let user = {};
    user.username = username;
    user.age = age;
    user.publicid = publicid;
    user.imageurl = imageurl;
    let usermodel = new User(user);
    await usermodel.save();
    res.json (usermodel);
})

module.exports = route;