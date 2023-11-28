
import { IsNotEmpty, IsDateString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuario')
export class Usuario {
    @PrimaryGeneratedColumn()
    idUsu!: number;
  

    @Column()
    senhaUsu!: string;

    @IsNotEmpty({
        message: 'O atributo nome não pode estar vazio'
    })

    @Column()
    nomeUsu!: string;

    @Column()
    sobrenomeUsu!: string;

    @Column()
    nickNameUsu!: string;

    @Column()
    paisDeResidenciaUsu!: string;
    
    @IsDateString({strict: true})
    @Column()
    dataNascUsu!: Date;
        
   
}