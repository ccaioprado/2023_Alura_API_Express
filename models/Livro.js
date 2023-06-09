import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo:{type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)

// Variável que referencia todo o Schema 
const livros = mongoose.model('livros', livroSchema)

export default livros