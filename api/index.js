const express = require('express')
const cors = require('cors');
const routerApi = require('./routes')
const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/errorsHandler')

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json())

const whitelist = ['http://localhost:8080', 'https://myapp.com']
const options = {
    origin: (origin, callback)=>{
        if(whitelist.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('No permitido'))
        }
    }
}
app.use(cors());

app.get('/api', (req, res)=>{
    res.send('Hola este es  mi server en express');
});
app.get('/nueva-ruta', (req, res)=>{
    res.send('Hola soy una nueva ruta');
});


routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler)


app.listen(port, ()=>{
    console.log('Mi port' + port);
});