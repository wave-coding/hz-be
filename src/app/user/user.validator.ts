import { check } from 'express-validator';

export const validators = [
    check('firstName').isString().isLength({ min: 3 }).notEmpty(),
    check('lastName').isString().isLength({ min: 3 }).notEmpty(),
    check('email').isEmail().notEmpty(),
    check('password').isString().isLength({ min: 6 }).notEmpty()
];
