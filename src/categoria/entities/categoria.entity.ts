import { IsNotEmpty, isNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome_categoria: string // exemplos: antitérmico, analgésico, polivitaminico

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string // exemplo: remedio para dor de cabeça, remedio para controle de febre e dor

}