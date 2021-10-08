import express from 'express'
const router = express.Router();

//importar el modelo nota

import Pedido from '../models/pedido';

// POST Agregar una nota

router.post('/nuevo-pedido', async(req, res)=>{

const body = req.body;
try {

    const pedidoDB= await Pedido.create(body);
    res.status(200).json(pedidoDB);
    
} catch (error) {

    return res.status(500).json({

        mensaje:'Ocurrio un error',
        error
    })
    
}


});

//Get con parametro

router.get('/pedido/:id', async(req, res)=>{

    const _id=req.params.id;

    try {

        const pedidoDb= await Pedido.findOne({_id});
        res.json(contactoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



});

//Get con todos los documentos

router.get('/pedido',async(req,res)=>{

    try {

        const pedidoDb=await Pedido.find();
        res.json(pedidoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }


});

//Delete eliminar una nota

router.delete('/pedido/:id', async(req,res)=>{


    const _id=req.params.id;

    try {

        const pedidoDb=await Pedido.findByIdAndDelete({_id});
        if(!pedidoDb){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', error 
            }) 
        } 
        res.json(pedidoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }
});

//Actualizar una nota

router.put('/pedido/:id', async(req,res)=>{

    const _id=req.params.id;
    const body =req.body;

    try {

        const pedidoDb= await Pedido.findByIdAndUpdate(_id,body,{new:true});
        res.json(pedidoDb);
        
    } catch (error) {

        return res.status(500).json({

            mensaje:'Ocurrio un error',
            error
        })
        
    }



})

//Exportacion de router
module.exports=router;