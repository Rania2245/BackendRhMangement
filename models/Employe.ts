import { Table, Column, Model, HasOne, HasMany, ForeignKey, DataType, BelongsTo } from "sequelize-typescript";
import CalendrierEmp from "./CalendrierEmp";

@Table({})
export default class Employe extends Model {
  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.STRING)
  nom!: string;

  @Column(DataType.STRING)
  prenom!: string;

  @Column(DataType.STRING)
  poste!: string;

  @Column(DataType.STRING)
  adresse!: string;

  @Column(DataType.STRING)
  departement!: string;

  @HasMany(() => CalendrierEmp)
  calendrier!: CalendrierEmp[];

  @Column(DataType.STRING)
  role!: 'employe' | 'rh'
}