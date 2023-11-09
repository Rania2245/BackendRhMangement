import { Table, Column, Model, HasOne, HasMany } from "sequelize-typescript";
import CalendrierEmp from "./CalendrierEmp";
import sequelize from "../database"


@Table({})
export default class Employe extends Model {
  @Column
  nom!: string;
  @Column
  prenom!: string;
  @Column
  poste!: string;
  @Column
  adresse!: string;
  @Column
  departement!: string;

  @HasMany(() => CalendrierEmp)
  calendrier!: CalendrierEmp[];
}