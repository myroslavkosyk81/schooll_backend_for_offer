import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import UserModel from '../models/User.js';

export const register = async (req, res) => {
    try{
        
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    const doc = new UserModel({
        email: req.body.email,
        fullName: req.body.fullName,
        avatarURL: req.body.avatarURL,
        passwordHash: hash,
    });
    const user = await doc.save();

    const token = jwt.sign(
        //Sorry, I can't show all code. But don't worry, it works! 
    });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося зареєструватися'
        })
    }
    
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email});
       //Sorry, I can't show all code. But don't worry, it works! 
        
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        //Sorry, I can't show all code. But don't worry, it works! 
        const token = jwt.sign(
            {
            _id: user._id,
        },
           //Sorry, I can't show all code. But don't worry, it works! 
        {
            expiresIn: '30d',
        }
        );
        const {passwordHash, ...userData} = user._doc;
        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не вдалося авторизуватися'
        })
    }
};

export const getMe = async (req, res) => {
    try {
        const  user = await UserModel.findById(req.userId);

        //Sorry, I can't show all code. But don't worry, it works! 

        const {passwordHash, ...userData} = user._doc;
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Нема доступу'
        })
    }
};