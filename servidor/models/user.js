import mongoose from "mongoose";
const Schema=mongoose.Schema;


const roles={

    values:['ADMIN','USER'],
    message:'{VALUE} no es un rol valido'


}

const userSchema = new Schema({

    nombre:{type:String, requires:[true,'El nombre es requerido']},
    email:{type:String,required:[true,'El email es obligatorio']},
    password:{type:String, required:[true,'El password es obligatorio']},
    date:{type:Date, default:Date.now},
    role:{type:String, default:'USER', enum:roles},
    activo:{type:Boolean,default:true}




});

const User = mongoose.model('User',userSchema);
export default User;