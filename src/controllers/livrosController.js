import livros from "../models/Livro.js";

class LivroController{

static listarLivros = (req,res) => {
    // O erro em questão é relacionado as requisições do schema de livros
     livros.find((err, livros) => {
    // Manda os item do array de livros no formato JSON
    res.status(200).json(livros)
    })
}

static cadastrarLivro = (req,res) => {
    //Faz um objeto do schema livros
    let livro = new livros(req.body);
    //Salva o livro no schema
    livro.save((err) => {
        if(err){
            // Exibe a mensagem de erro 
            res.status(500).send({message:`${err.message} - falha ao cadastrar livro.`})
        } else {
            // Transforma o livro em formato JSON
            res.status(201).send(livro.toJSON())
        }
    })
}

static atualizarLivro = (req,res) => {
    const id = req.params.id
    livros.findByIdAndUpdate(id,{$set: req.body}, (err) => {
        if(!err){
            res.status(200).send({message:'Livro atualizado com sucesso'})
        }else{
            res.status(500).send({message:err.message})
        }
    })
}
}


export default LivroController