import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Employe from "./Employe";
import sequelize from "../database"


@Table
export default class CalendrierEmp extends Model {
  @Column
  jour!:Date; 
  @Column
  heureArriv!: Date;
  @Column
  heureDep!: Date;
  @Column
  heureSup!: number;
  @Column
  heureConge!: number;

  @ForeignKey(() => Employe)
  @Column
  employeId!: number;

  @BelongsTo(() => Employe)
  employe!: Employe;
}
