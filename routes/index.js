const express = require('express')
const productsRouter = require('./productsRouter')
const usersRouter = require('./usersRouter')
const categoriesRouter = require('./categoriesRoute')
const generalRouter = require('./generalRouter')
function routerApi(app){
    /* estas dos lineas se emplean como buena practica en 
    futuro cuando se cambien versiones*/
    const router = express.Router();
    app.use('/api/v1', router) //path global para versionar


    router.use('/products', productsRouter);
    router.use('/users', usersRouter);
    router.use('/categories', categoriesRouter);
    router.use('/', generalRouter);
}

module.exports = routerApi;