const boom = require('@hapi/boom')


//este middleware va a ser dinamico

function validatorHandler(schema, property){
 return (req, res, next)=>{ // este es un middleware de forma dinamica a traves de CLOSURE
    const data = req[property] // le estoy indicando de dónde viene la data
      const {error} = schema.validate(data, {abortEarly: false});
      /*abortEarly: false} sirve para que podamos tener todos los errores en un principio 
      y no esté dando uno por uno como lo hace por defecto */
      
      /*si no cumple (no encuentra la info) entonces debo enviar un error de tipo boom */
      if(error){
        next(boom.badRequest(error))
      }
      next()
 }
};

module.exports = validatorHandler;