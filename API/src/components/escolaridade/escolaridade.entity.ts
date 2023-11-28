import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('escolaridade')
export class Escolaridade {
  @PrimaryGeneratedColumn()
  idEsc!: number;

  @IsNotEmpty({
    message: 'O atributo escolaridade não pode estar vazio',
  })
  @Column()
  descricaoEsc!: string;
}
