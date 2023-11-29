import {Router} from 'express'
import {Request, Response} from 'express'
import * as produtoController from '../controllers/produtoController'

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send("TESTANDO!")
})
//criando a rota de produtos
router.get('/produtos',produtoController.index)
router.get('/cadastro',produtoController.index)

export default router