const express = require('express');
const ProductsService = require('../product/productService');


const router = express.Router();
const service = new ProductsService();
const validatorHandler = require('./../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/productSchema')

router.get('/', async (req, res) => {
    const products = await service.find()
    res.json(products);
})

router.get('/:id',
    validatorHandler(getProductSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params
            const product = await service.findOne(id);
            res.json(product)
        } catch (error) {
            next(error)// para ejecutar los middleware de tipo error
        }
    });

/*Post crea un registro */
router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
})

/*Patch actualiza y puede recibir los objetos de forma parcial,
es decir, solo podría recibir lo que va a actualizar */
router.patch('/:id', 
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.json(product)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }

})

/*Delete elimina un registro */
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const resp = await service.delete(id);
    res.json(resp)
})



module.exports = router