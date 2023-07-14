const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{
    //limit, offset se usan como estrategia de paginación
    const {limit, offset} = req.query;
    if(limit && offset){
        res.json({
            limit,
            offset
        })
    }else{
        res.send('No hay parámetros')
    }
})


module.exports = router;