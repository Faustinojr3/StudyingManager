
import { Router } from "express";
import { UsuarioController } from './usuario.controller';

export class UsuarioRoutes {

    private router: Router = Router();
    private controller: UsuarioController;

    constructor() {
        
        this.controller = new UsuarioController();
        this.init();
    }

    private init(): void {
       
        this.router.post('/', this.controller.create);
        this.router.put('/:cod', this.controller.update);
        this.router.delete('/:cod', this.controller.destroy);
      
    }

    public routes(): Router {
        return this.router;
    }
}
