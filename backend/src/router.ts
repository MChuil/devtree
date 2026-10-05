import { Router } from "express";
import { createAccount, login } from "./handlers/index.ts"
import { body } from 'express-validator'
import { handleInputErrors } from "./middleware/validation.ts";
const router= Router();

// Autenticación y Registro
router.post('/auth/register', 
    body('handle').notEmpty().withMessage('El campo handle no puede estar vacio'),
    body('name').notEmpty().withMessage('El campo nombre no puede estar vacio'),
    body('email').isEmail().withMessage('El correo no es valido'),
    body('password').isLength({min: 8, max: 20}).withMessage('El password es muy corto, minimo 8 caracteres'),
    handleInputErrors,
    createAccount)

router.post('/auth/login',
    body('email').isEmail().withMessage('El correo es obligatorio'),
    body('password').notEmpty().withMessage('El password es obligatorio'),
    handleInputErrors,
    login)

export default router