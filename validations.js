import {body} from 'express-validator';

export const loginValidation = [
    body('email', 'Невірний формат електронної пошти').isEmail(),
    //Sorry, I can't show all code. But don't worry, it works! 
];
export const registerValidation = [
    //Sorry, I can't show all code. But don't worry, it works! 

];
export const postCreateValidation = [
    //Sorry, I can't show all code. But don't worry, it works! 
];