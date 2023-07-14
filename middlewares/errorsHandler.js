//Middleware errors de forma global

function logErrors (err, req, res, next){
    console.error(logErrors);
    next(err);// cuando le envío algo al next es cuando uso un middleware de error
}

//crear un standard de formato por cada error
function errorHandler(err, req, res, next){
    console.log(errorHandler);
res.status(500).json({
    message: err.message,
    stack: err.stack,
})
next(err);// cuando le envío algo al next es cuando uso un middleware de error

}

// se crea un middleware para saber si el error proviene de boom
function boomErrorHandler(err, req, res, next){
   if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
   }else{
       next(err)
   }
}

module.exports = {logErrors, errorHandler, boomErrorHandler}