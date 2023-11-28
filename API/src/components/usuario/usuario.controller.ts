import{ validate } from 'class-validator';
import { Request, Response } from 'express';
import { AppDataSource } from '../../config/database/mysql-datasource.config';
import { Usuario } from './usuario.entity';

export class UsuarioController {
 

    //METODO POST - cria um novo usario e salva no banco
    public async create(req: Request, res: Response){

        //atribuindo as propriedades do req.body nas variaveis
        let {nomeUsu, sobrenomeUsu, nickNameUsu,paisDeResidenciaUsu, senhaUsu, dataNascUsu } = req.body;

        //estanciando um objeto da classe Usuario e atribuindo os valores do req.body que foram salvas nas variaveis
        let usuario_new = new Usuario();
        usuario_new.nomeUsu = nomeUsu;
        usuario_new.sobrenomeUsu = sobrenomeUsu;
        usuario_new.nickNameUsu = nickNameUsu;
        usuario_new.paisDeResidenciaUsu = paisDeResidenciaUsu;
        usuario_new.senhaUsu= senhaUsu;
        usuario_new.dataNascUsu = dataNascUsu;
        
        //utilizando o validate para verificar se possui erros na entrada do req.body. Até agora só foi usado o validate no atributo nome (IsNotEmpty) e dataNascUsu (IsDateString)
        const erros = await validate(usuario_new)

        //retornando a mensagem de erro e não salvando os dados no banco
        if(erros.length > 0){
            return res.status(400).json(erros);
        }

        //salvando o objeto no banco e retornando os dados salvos
        const usuario_new_save = await AppDataSource.manager.save(usuario_new);

        return res.status(200).json({
            usuario_new_save ,
            message: 'Novo Autor salvo no Banco de Dados'
        })

    }

    //METODO PUT - atualiza um registro no banco
    public async update(req:Request, res: Response){

        //criando uma constante para receber qual nickname sera atualizado
        const { nickName } = req.params;
       

        //utilizando o AppDatasource para encontrar o nickname do usuario selecionado e salvando dentro de usuario
        const nickName_atl = await AppDataSource.manager.findOneBy(Usuario, {nickNameUsu : nickName })

        //verificando se o nickName foi encontrado - caso tenha sido encontrado nickNameUsu_atualizado não sera vazio
        if(nickName_atl == null){
            return res.status(404).json({erro: 'Autor não encontrado!'});
        }

        let {nomeUsu, sobrenomeUsu, nickNameUsu,paisDeResidenciaUsu, senhaUsu, dataNascUsu } = req.body;

        //atribuindo os novos valores ao autor selecionado pelo id
        let usuario_atl= new Usuario();
        usuario_atl.nomeUsu = nomeUsu;
        usuario_atl.sobrenomeUsu = sobrenomeUsu;
        usuario_atl.nickNameUsu = nickNameUsu;
        usuario_atl.paisDeResidenciaUsu = paisDeResidenciaUsu;
        usuario_atl.senhaUsu= senhaUsu;
        usuario_atl.dataNascUsu = dataNascUsu;
        

        //salvando a atulizacao no banco com o AppDataSource
        const autor_id_updt = await AppDataSource.manager.save(nickNameUsu)

        return res.json({
            nickNameUsu,
            message: 'Usuario atualizdo no Banco de Dados'
        });
    }

    //METODO DELETE - deleta um registro no banco
    public async destroy(req: Request, res: Response){

        const { cod } = req.params;

        if(!Number.isInteger(parseInt(cod))){
            return res.status(400).json({ message: "O id deve ser um numero"});
        }

        const idUsu = await AppDataSource.manager.findOneBy(Usuario, { idUsu:parseInt(cod) })

        if(idUsu == null){
            return res.status(404).json({ erro:"Usuario não encontrado" });
        }

        await AppDataSource.manager.delete(Usuario, idUsu);

        return res.status(204).json()
    }

    
}