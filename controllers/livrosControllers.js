import livros from "../models/Livro"

class LivroController{
    static listarLivros = (req,res) => {
        
        app.get('/livros',(req,res) => {
            livros.find((err, livros) => {
                res.status(200).json(livros)
            })
        })
        
    }
}

export default LivroController