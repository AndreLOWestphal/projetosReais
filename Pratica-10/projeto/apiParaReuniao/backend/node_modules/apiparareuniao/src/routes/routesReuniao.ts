import { Router } from "express";
import { criarReuniao, listarReuniao, atualizarReuniao, deletarReuniao } from "../controllers/controllerReuniao";

const router = Router();

router.post('/', criarReuniao);
router.get('/', listarReuniao);
router.put('/:id', atualizarReuniao);
router.delete('/:id', deletarReuniao);

export default router;
