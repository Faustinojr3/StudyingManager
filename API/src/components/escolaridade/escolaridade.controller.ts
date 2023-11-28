
    import{ validate } from 'class-validator';
    import { Request, Response } from 'express';
    import { AppDataSource } from '../../config/database/mysql-datasource.config';
    import { Escolaridade } from './escolaridade.entity';

    export class EscolaridadeController {
        //METODO GET - retorna a lista de escolaridades cadastrado no banco
        public async list(req: Request, res: Response){
            
            const escolaridade = await AppDataSource.manager.find(Escolaridade);

            return res.status(200).json({
                Total_Escolaridades: escolaridade.length,
                Escolaridade_Cadastrados: escolaridade
            })
        }

       

        //METODO GET- consultado por ID
        public async show(req: Request, res: Response){
            const { cod } = req.params;

            if(!Number.isInteger(parseInt(cod))) {
                return res.status(400).json({ erro: "Digite um id valido"})
            }

            const escolaridade_id = await AppDataSource.manager.findOneBy(Escolaridade, { idEsc: parseInt(cod)});

            if(escolaridade_id == null){
                return res.status(404).json({ erro: "Escolaridade não encontrado"})
            }

            return res.json(escolaridade_id)
        }
    }