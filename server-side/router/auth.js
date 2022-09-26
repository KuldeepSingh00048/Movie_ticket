const express= require('express');
const router = express.Router();
const User=require('../model/user_schema')

router.post('/book', (req,res) =>{
    const{name,email,phone_number,movie_name,time,city,price} = req.body
    const user = new User({name,email,phone_number,movie_name,time,city,price})
    user.save(err => {
        if(err){
            res.send(err)
        }
        else{
            res.send({message: "Thanks for booking ticket", user:user})
        }
    })
})
module.exports=router
