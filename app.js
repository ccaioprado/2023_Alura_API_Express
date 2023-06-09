import Express from 'express'
import db from './config/dbconnect.js'
import livros from './models/Livro.js'
import routes from './routes/index.js'

// Exibe a mensagem de erro caso aconteça
db.on("error", console.log.bind(console,'Erro de conexão'))
// Tenta a conexão com o banco
db.once("open",() => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = Express()

app.use(Express.json())

routes(app);

app.post('/livros',(req,res) => {
    livros.push(req.body)
    res.status(201).send('Livro cadastrado')
})

app.get(('/livros/:id'), (req,res) => {
    let index = buscaLivro(req.params.id)
    // Resposta da requisição por id
    res.json(livros[index])
})

app.put(('/livros/:id'), (req,res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).send(livros)
    // Renomeia o livro e retorna o array todo
})

app.delete(('/livros/:id'), (req,res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} excluido com sucesso`)
})

// Função para encontrar o id do livro 
function buscaLivro(id){
    return livros.findIndex(livro  => livro.id == id)
}

export default app