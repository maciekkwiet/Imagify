const _= require('lodash');
const {User,validate} = require('../model/user')
// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const test = express();
test.use(express.json());

router.post('/', async(req,res)=>
{
   

    //sprawdzenie czy nie ma błędu w przesłanych danych od użytkownika
    // const {error1}=validate;
    const error= validate(req.body
    console.log(error);
    if(error) return res.status(400)


    //tworzymy użytkownika jako obiekt, który zwraca Promisa i sprawdzamy czy email juz jest w DB
    let user = await User.findOne({ email: req.body.email})

           // //sprawdzenie czy istnieje w bazie
    if(user) return res.status(400).send('User already registered');
    else
    {
           // //Jeżeli użytkownika nie ma w bazie to go dodaj
        user = new User (_.pick(req.body,['email','password','favourities']))
    }

    //haszowanie hasła 
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt)

    //wysyłam do bazy danych
    await user.save();

    // wysyłam do klienta tylko wyselekcjonowane dane
    res.send(_.pick(user,['email','favourities']));   
})


module.exports=router;
