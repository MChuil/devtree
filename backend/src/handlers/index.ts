import type { Request, Response } from 'express'

import slug from 'slug'
import User from '../models/user.ts';
import { checkPassword, hashPassword } from '../utils/auth.ts';


//Crear cuenta
export const createAccount = async (req: Request, res: Response)=>{
    const { email, password, handle } = req.body

    const userExist = await User.findOne({email})
    if(userExist){
        const error = new Error('El Usuario ya esta registrado')
        return res.status(409).json({error: error.message})
    }

    const newHandle = slug(handle, '')
    const handleExist = await User.findOne({handle: newHandle})
    if(handleExist){
        return res.status(409).json({
            error: 'Nombre de usuario no disponible'
        })
    }


    const user = new User(req.body)
    user.password = await hashPassword(password)
    user.handle = newHandle
    
    await user.save()
    res.status(201).send('Registro creado correctamente')
}


// Acceso de usuario
export const login = async( req: Request, res: Response)=>{
    const { email, password } = req.body

    // Revisar si existe la cuenta
    const user = await User.findOne({email})
    if(!user){
        const error = new Error('Correo y/o contraseña incorrecta')
        return res.status(401).json({error: error.message})
    }

    // Comprobar el password
    let isLogin = await checkPassword(password, user.password)
    if(!isLogin){
        const error = new Error('Correo y/o contraseña incorrecta')
        return res.status(401).json({error: error.message})
    }
    
    res.status(200).send('Autenticado...')
}