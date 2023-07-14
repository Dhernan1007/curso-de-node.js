//CREANDO SERVICIOS


const {faker} = require('@faker-js/faker')
const boom = require('@hapi/boom')
class ProductsService {
    
    constructor() {
        this.products = [];
        this.generate(); //para que al iniciar de una vez me genere los 100 productos
    }

    generate() {
            const limit = 100;
            for (let index = 0; index < limit; index++) {
                this.products.push({
                    id: faker.string.uuid(),
                    name: faker.commerce.productName(),
                    price: parseInt(faker.commerce.price(), 10),
                    image: faker.image.url(),
                    isBlock: faker.datatype.boolean(),
                });

            }        
    }
    async create(data) { 
        const newProduct = {
            id: faker.string.uuid(),
            ...data // concatena todos los valores posteados
        }
        this.products.push(newProduct)
        return newProduct;
    }
   find() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.products);
            },5000)
        });
     }
    async findOne(id) {
        //const name = this.getTotal() // como getTotal no existe va a rrojar un error
       const product = this.products.find(item => item.id === id);
       if(!product){
        throw boom.notFound('product not found')
       }
       if(product.isBlock){// si está bloqueado lanzará un error que entra en conflicto
        throw boom.conflict('product is block') //debe ser 409
       }
       return product;
    }

    //Actualizar
    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id)
        if(index === -1){
            throw boom.notFound('product not found')
        }
        const product = this.products[index] // creando una copia del obj
        this.products[index] = {
        ...product,
        ...changes,
     };
     return this.products[index]
    }

    /*
    async NOTA: si por ejemplo dejaría solo this.products[index] = changes, 
    esto me reemplazaría mi obj original y solo me daría acceso a la
    info que intenté actualizar
    */
    async delete(id) { 
        const index = this.products.findIndex(item => item.id === id);
        if(index === -1){
            throw new Error('product not found');
        }
        this.products.splice(index,1); //splice elimina elementos
        return {id};
    }
}


module.exports = ProductsService;