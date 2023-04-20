import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo:{type: String, required: true},
        autor:{type: String, required: true},
        editora:{type: String, required: true},
        numeroPaginas:{type: Number}
    }
);

// livros referencia o schema inteiro      LivroSchema faz referencia de que o schema no banco deve ser igual ao criado aqui
const livros = mongoose.model('livros', livroSchema)

export default livros;