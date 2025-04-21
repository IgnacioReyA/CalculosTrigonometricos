import {Circulo} from "../types/db/circulo"
import {Triangulo} from "../types/db/triangulo"
import {Cuadrado} from "../types/db/cuadrado"
import { IDBService } from "../db/types/dbService";

export class CalculosController {

    dbService: IDBService

    constructor(dbService: IDBService){
        this.dbService = dbService;
    }

    async getCirculoArea(): Promise<number>{
        const circulo = await this.dbService.getCirculo()
        const { radio } = circulo;
        return radio * radio * 3.14;
    }

    async getTrianguloArea(): Promise<number>{
        const triangulo = await this.dbService.getTriangulo()
        const { base, altura } = triangulo;
        return base * altura / 2;
    }

    async getCuadradoArea(): Promise<number>{
        const cuadrado = await this.dbService.getCuadrado()
        const { lado } = cuadrado;
        return lado * lado;
    }
}