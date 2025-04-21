import { CalculosController } from "../controller/calculosController";
import { FakeService } from "../db/fake/fakeService";
import { CalculosHandler } from "../handler/calculosHandler";
import express, {Request, Response, NextFunction} from 'express';
 
const router = express.Router();

const fakeService = new FakeService()
const calculosController = new CalculosController(fakeService);

const calculosHandler = new CalculosHandler(calculosController)

router.get('/', calculosHandler.getCalculos.bind(calculosHandler));

export default router;
