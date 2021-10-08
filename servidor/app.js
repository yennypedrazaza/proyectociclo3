import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app=express();

const mongoose = require('mongoose'); 
const uri = 'mongodb://localhost:27017/myappprueba';

//const uri='mongodb+srv://user_notas:A27034286j@cluster0.8evgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()); 
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'public')));

//Configurar las rutas

//app.get('/', function (req,res){

    //res.send('Hola mundo');

// });
/* app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/user'));*/
app.use('/api', require('./routes/contacto')); 
app.use('/api', require('./routes/pedido'));



const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//Puerto

app.set('puerto', process.env.PORT || 3000); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});