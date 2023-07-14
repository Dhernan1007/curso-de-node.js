const express = require('express')
const cors = require('cors');
const routerApi = require('./routes')
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorsHandler')

const app = express();
const port = porcess.env.PORT || 3000;

//se encarga de permitir recibir info de tipo json en un post por ejemplo
app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.com']/*restringe desde qué origen(es) va a recibir peticiones (CORS) */
const options = {// limita el acceso
    origin: (origin, callback)=>{
        if(whitelist.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('No permitido'))
        }
    }
}
app.use(cors());/*habilitamos a cualquier origen de esta manera ya que por
defecto solo accede al origen local*/

app.get('/', (req, res)=>{
    res.send('Hola este es  mi server en express');
});
app.get('/nueva-ruta', (req, res)=>{
    res.send('Hola soy una nueva ruta');
});


routerApi(app);
// a partir de acá se pueden definir los middlewares
app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler)


app.listen(port, ()=>{
    console.log('Mi port' + port);
});