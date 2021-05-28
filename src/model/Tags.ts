import { DataTypes, Model, InitOptions } from "sequelize";
import sequelize from "../DataBase";

export declare interface TagAttributes {
    id: string;
    title: string;
    createdTime: number;
    updatedTime: number;
    userCreatedTime: number;
    userUpdatedTime: number;
    encryptionCipherText: string;
    encryptionApplied: string;
    isShared: number;
    parentId: string;
}

const fields = {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    createdTime: { type: DataTypes.INTEGER, allowNull: false, field: "created_time" },
    updatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "updated_time" },
    userCreatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_created_time" },
    userUpdatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_updated_time" },
    encryptionCipherText: { type: DataTypes.STRING, allowNull: false, field: "encryption_cipher_text" },
    encryptionApplied: { type: DataTypes.STRING, INTEGER: false, field: "encryption_applied" },
    isShared: { type: DataTypes.INTEGER, allowNull: false, field: "is_shared" },
    parentId: { type: DataTypes.STRING, allowNull: false, field: "parent_id" },
};
const option: InitOptions = {
    sequelize,
    modelName: "tags",
    timestamps: false,
};

export default class Tags extends Model<TagAttributes> implements TagAttributes {
    public id!: string;

    public title!: string;

    public createdTime!: number;

    public updatedTime!: number;

    public userCreatedTime!: number;

    public userUpdatedTime!: number;

    public encryptionCipherText!: string;

    public encryptionApplied!: string;

    public isShared!: number;

    public parentId!: string;
}
Tags.init(fields, option);
