import express from 'express';
import mongoose from 'mongoose';
const app = express();
try {
  mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb://127.0.0.1:27017/carga_academica')
  console.log("Conexion estable")
} catch (err) {
  console.log(err)
}
app.use(express.json());
//Modelos Schema mongoDb

const docenteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  email: String

});

const Docente = mongoose.model('docente', docenteSchema);

/* PARA MOSTRAR TODOS LOS DATOS DE LA COLECCION */
app.get('/', (req, res) => {
  Docente.find()
    .then(docente => res.json(docente))
    .catch(err => res.json(err))
})

/* PARA GUADAR DATOS AL MONGO DB*/
app.post('/', (req, res) => {
  const body = req.body;
  const docentes = new Docente(body)
  docentes.save();
  res.json(body)
})

/* PARA EDITAR DATOS AL MONGO DB*/
app.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const newDato = await Docente.findByIdAndUpdate(id, body, { new: true });
  res.json({
    body
  })
})

/* Para eliminar un elemento */
app.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Docente.findByIdAndDelete(id);
  res.json({
    mensaje: "Eliminado"
  })
})


app.listen(3001, () => {
  console.log('listening on 3001')
})
