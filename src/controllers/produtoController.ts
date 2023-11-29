import {Request, Response} from 'express'
import {Produto} from '../models/Produto'

export const index = async (req:Request, res: Response) =>{

    let produtos = await Produto.findAll()

    res.render("pages/produto",{
        produtos
    })
}

