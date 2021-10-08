import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

const pedidoSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    mesa:String,
    tamano: String,
    chantilly: Boolean, 
    base: String,
    cobertura: String, 
    topping: String,
    date:{type: Date, default: Date.now},
    estado: Boolean
});

//Convertir a modelo
const Pedido = mongoose.model('Pedido', pedidoSchema); 

export default Pedido;