import { Circulo } from "../../types/db/circulo";
import { Triangulo } from "../../types/db/triangulo";
import { Cuadrado } from "../../types/db/cuadrado";

const CIRCULO = {
    radio: 3
}

const TRIANGULO = {
    base: 3,
    altura: 4
}

const CUADRADO = {
    lado: 5
}

export class FakeService {
    async getCirculo(): Promise<Circulo> {
        return CIRCULO;
    }

    async getTriangulo(): Promise<Triangulo> {
        return TRIANGULO;
    }

    async getCuadrado(): Promise<Cuadrado> {
        return CUADRADO;
    }
}