const express = require('express')

const router = express();

router.get('/', (req, res)=>{
    res.send('Hola este es  mi server en express');
});
router.get('/nueva-ruta', (req, res)=>{
    res.send('Hola soy una nueva ruta');
});


module.exports = router;