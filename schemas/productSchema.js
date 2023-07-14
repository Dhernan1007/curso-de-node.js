const Joi = require('joi')

//se hace un schema para cada campo eso nos ayuda a reutilizar y usar el codigo en actualizaciones

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();


// schema para creación 

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required(),
});
const updateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image
});
const getProductSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createProductSchema,
    updateProductSchema,
    getProductSchema}