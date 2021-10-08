import express from 'express';
const router = express.Router();

import User from '../models/user';

router.post('/nuevo-usuario', async(req,res)=>{

    const body=req.body;
    try{

        const userDB=await User.create(body);
        res.status(200).json(userDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'ocurrio un error',
            error
        });

    }






})