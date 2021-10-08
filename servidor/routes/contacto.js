import express from 'express'
const router = express.Router();

//importar el modelo nota

import Contacto from '../models/contacto';

// Agregar una nota

router.post('/nuevo-contacto', async(req, res)=>{

const body = req.body;
try {

    const contactoDB= await Contacto.create(body);
    res.status(200).json(contactoDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
    })
    
}


});

//Get con parametro

router.get('/contacto/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const contactoDb= await Contacto.findOne({_id});
        res.json(contactoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



});

//Get con todos los documentos

router.get('/contacto',async(req,res)=>{

    try {

        const contactoDb=await Contacto.find();
        res.json(contactoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//Delete eliminar una nota

router.delete('/contacto/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const contactoDb=await Contacto.findByIdAndDelete({_id});
        if(!contactoDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(contactoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar una nota

router.put('/contacto/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const contactoDb= await Contacto.findByIdAndUpdate(_id,body,{new:true});
        res.json(contactoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



})

//Exportacion de router
module.exports=router;