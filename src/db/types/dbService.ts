import {Circulo} from "../../types/db/circulo"
import {Triangulo} from "../../types/db/triangulo"
import {Cuadrado} from "../../types/db/cuadrado"

export interface IDBService {
    getCirculo(): Promise<Circulo>
    getTriangulo(): Promise<Triangulo>
    getCuadrado(): Promise<Cuadrado>
}