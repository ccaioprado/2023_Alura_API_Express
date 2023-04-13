import Express from "express";
import LivroController from "../controllers/livrosControllers";

const router = Express.Router()

router
    .get("/livros", LivroController.listarLivros)

export default router;