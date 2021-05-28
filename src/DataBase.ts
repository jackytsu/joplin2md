import { Sequelize } from "sequelize";
import { dataBaseConfig } from "./config";

export default new Sequelize(dataBaseConfig);
