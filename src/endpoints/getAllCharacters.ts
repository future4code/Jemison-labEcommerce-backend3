import { character } from './../types';
import { Request, Response } from "express";
import connection from '../connection';

export const getAllCharacters = async (req: Request, res: Response): Promise<void> => {

    try {
        const { name, orderBy, orderType, page } = req.query

        const resultsPerPage = 5 // Paginação
        const ofsett = resultsPerPage * (Number(page) - 1) //Paginação
        debugger 

        const characters: character[] = await connection("character")
            .where("name", "LIKE", `%${name}%`) // filtrar por name 
            .orderBy(orderBy as string || "name", orderType as string) // ordenação
            .offset(ofsett) // paginação 

        res.send(characters)
    } catch (error) {
        res.status(500).send("Unexpected server error!")
    }
}