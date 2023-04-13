import Express from "express";
import livros from "./LivrosRoutes";

const routes = (app) =>{
    app.route("/").get((req,res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    // 
    app.use(
        Express.json(),
        livros
    )
}

export default routes
