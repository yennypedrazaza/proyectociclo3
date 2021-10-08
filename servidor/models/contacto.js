import  mongoose  from "mongoose";
const Schema=mongoose.Schema;

const contactoSchema = new Schema({ 
    nombre: {type: String, required: [true, 'Nombre obligatorio']}, 
    celular:String,
    email: String,
    mensaje: String
});

//Convertir a modelo
const Contacto = mongoose.model('Contacto', contactoSchema); 

export default Contacto;