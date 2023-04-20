import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

//Caso aconteça o erro o console irá escrever "Erro de conexão" e em seguida o erro em si
db.on("error", console.log.bind(console, 'Erro de conexão'))
// Tenta obter a conexão com o banco
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

routes(app)


// const livros = [
//     {id:1, 'titulo':'Senhor dos Aneis'},
//     {id:2, 'titulo':'O Hobiit '},
// ]

app.get('/livros/:id', (req,res) =>{
    res.status(200).send(livros[req.params.id -1])
})

()

app.put('/livros/:id',(req,res) => {
    // Busca o livro na posição do id que foi mandado por parâmetro
    let index = buscaLivros(req.params.id)
    // O titulo anterior recebe o titulo que veio no corpo da requisição
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req,res) => {
    // o Id no formato json ja é vinculado ao parametro da requisição 
    let {id} = req.params;
    let index = buscaLivros(id); 
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function buscaLivros(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app