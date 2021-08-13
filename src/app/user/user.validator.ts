import { check } from 'express-validator';

exports.validators = [
    check('firstName').isString().isLength({ min: 3 }).notEmpty(),
    check('lastName').isString().isLength({ min: 3 }).notEmpty(),
    check('email').isEmail().notEmpty(),
    check('password').isString().isLength({ min: 6 }).notEmpty()
]