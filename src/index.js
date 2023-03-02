import express from 'express';
import mongoose from 'mongoose';
const app = express();

//Coneccion con Mongo db, y el uso de strictQuery
try {
  mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/carga_academica')
  console.log("Conexion estable")
} catch (err) {
  console.log(err)
}

// Use: para que express pueda usar express.json
app.use(express.json());

//Modelos Schema mongoDb - Una coleccion
const docenteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  email: String

});

// Creando la variable para hacer get,post,put y delete
const Docente = mongoose.model('docente', docenteSchema);

/* PARA MOSTRAR TODOS LOS DATOS DE LA COLECCION */
app.get('/', (req, res) => {
  // Pedimos todos los datos de la coleccion
  Docente.find()
    .then(docente => res.json(docente))
    .catch(err => res.json(err))
})

/* PARA GUADAR DATOS AL MONGO DB*/
app.post('/', (req, res) => {
  //Recibimos nuestros datos y lo guardamos, finalmente lo guardamos con save
  const body = req.body;
  const docentes = new Docente(body)
  docentes.save();
  res.json(body)
})

/* PARA EDITAR DATOS AL MONGO DB*/
app.put('/:id', async (req, res) => {
  // Recibimos nuestro id y tambien los datos a editar, finalmente buscamos por Id y actualizamos con el metodo {new=true}
  const { id } = req.params;
  const body = req.body;

  const newDato = await Docente.findByIdAndUpdate(id, body, { new: true });
  res.json({
    body
  })
})

/* Para eliminar un elemento */
app.delete('/:id', async (req, res) => {
  // Recibimos el id y buscamos para finalmente eliminarlo de la coleccion
  const { id } = req.params;
  await Docente.findByIdAndDelete(id);
  res.json({
    mensaje: "Eliminado"
  })
})


app.get("/books/:id", async (req, res) => {
  try {
    const id = req.params.id
    const data = await Docente.findById(id)
    res.send(data)
  } catch (err) {
    res.status(402)
    res.send("ERROR_GET_BOOK")
  }
})

//Escuchamos nuestro servidor creado
app.listen(3001, () => {
  console.log('listening on 3001')
})
