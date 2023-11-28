import { Escolaridade } from './escolaridade.entity';
import { Router } from "express";
import { EscolaridadeController } from './escolaridade.controller';

export class EscolaridadeRoutes {

    private router: Router = Router();
    private controller: EscolaridadeController;

    constructor() {
        
        this.controller = new EscolaridadeController();
        this.init();
    }

    private init(): void {
        this.router.get('/', this.controller.list);
        this.router.get('/:cod', this.controller.show);
    }

    public routes(): Router {
        return this.router;
    }
}