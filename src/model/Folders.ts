import { DataTypes, Model, InitOptions } from "sequelize";
import sequelize from "../DataBase";

export declare interface FolderAttributes {
    id: string;
    title: string;
    createdTime: number;
    updatedTime: number;
    userCreatedTime: number;
    userUpdatedTime: number;
    encryptionCipherText: string;
    encryptionApplied: number;
    parentId: number;
    isShared: number;
}

const fields = {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    createdTime: { type: DataTypes.INTEGER, allowNull: false, field: "created_time" },
    updatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "updated_time" },
    userCreatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_created_time" },
    userUpdatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_updated_time" },
    encryptionCipherText: { type: DataTypes.STRING, allowNull: false, field: "encryption_cipher_text" },
    encryptionApplied: { type: DataTypes.INTEGER, allowNull: false, field: "encryption_applied" },
    parentId: { type: DataTypes.INTEGER, allowNull: false, field: "parent_id" },
    isShared: { type: DataTypes.INTEGER, allowNull: false, field: "is_shared" },
};

const option: InitOptions = {
    sequelize,
    modelName: "folders",
    timestamps: false,
};

export default class Folders extends Model<FolderAttributes> implements FolderAttributes {
    public id!: string;

    public title!: string;

    public createdTime!: number;

    public updatedTime!: number;

    public userCreatedTime!: number;

    public userUpdatedTime!: number;

    public encryptionCipherText!: string;

    public encryptionApplied!: number;

    public parentId!: number;

    public isShared!: number;
}
Folders.init(fields, option);
