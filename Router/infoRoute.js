const express = require('express');
const userModel = require('../models/infoModel')
const router = express.Router();

//create new user
router.post('/', async(req, res) => {
    const user = await new userModel({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email
    });
 user.save();
    res.status(201).json({Message:"new user created"})
})
// update user
router.patch('/update/:id', async (req,res) => {
 const updateduser = await userModel.findByIdAndUpdate(req.params.id,{
    name:req.body.name,
    age:req.body.age,
    email:req.body.email
 })
 res.json({message:"user updated successfully"});

})
//delete user
router.delete('/delete/:id',async (req,res) => {
    const delUser = await userModel.findByIdAndRemove(req.params.id)
    res.json({message: "user deleted"});
})
//get all infodatas
router.get('/', async (req, res) => {
    const users = await userModel.find();
    res.status(200).json(users)
})
module.exports = router