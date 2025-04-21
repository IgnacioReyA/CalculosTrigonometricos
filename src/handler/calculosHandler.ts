import { CalculosController } from "../controller/calculosController";
import express, {Request, Response} from 'express'

export class CalculosHandler {
    calculosController: CalculosController;
    constructor (calculosController: CalculosController){
        this.calculosController = calculosController;
    }

    async getCalculos(request: Request, response: Response) {
        try {
        const circulo = await this.calculosController.getCirculoArea()
        const triangulo = await this.calculosController.getTrianguloArea()
        const cuadrado = await this.calculosController.getCuadradoArea()
        response.json({
            circulo,
            triangulo,
            cuadrado
        })
    }   catch (error){
        response.status(500).json({error: 'an error'});
    }
    }
}