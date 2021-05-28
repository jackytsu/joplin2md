import mime from "mime";
import { DataTypes, Model, InitOptions } from "sequelize";
import sequelize from "../DataBase";

export declare interface ResourceAttributes {
    id: string;
    title: string;
    mime: string;
    filename: string;
    createdTime: number;
    updatedTime: number;
    userCreatedTime: number;
    userUpdatedTime: number;
    fileExtension: string;
    encryptionCipherText: string;
    encryptionApplied: number;
    encryptionBlobEncrypted: number;
    size: number;
    isShared: number;
}

const fields = {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    mime: { type: DataTypes.STRING, allowNull: false },
    filename: { type: DataTypes.STRING, allowNull: false },
    createdTime: { type: DataTypes.INTEGER, allowNull: false, field: "created_time" },
    updatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "updated_time" },
    userCreatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_created_time" },
    userUpdatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_updated_time" },
    fileExtension: { type: DataTypes.STRING, allowNull: false, field: "file_extension" },
    encryptionCipherText: { type: DataTypes.STRING, allowNull: false, field: "encryption_cipher_text" },
    encryptionApplied: { type: DataTypes.INTEGER, allowNull: false, field: "encryption_applied" },
    encryptionBlobEncrypted: { type: DataTypes.INTEGER, allowNull: false, field: "encryption_blob_encrypted" },
    size: { type: DataTypes.INTEGER, allowNull: false },
    isShared: { type: DataTypes.INTEGER, allowNull: false, field: "is_shared" },
};

const option: InitOptions = {
    sequelize,
    modelName: "resources",
    timestamps: false,
};

export default class Resources extends Model<ResourceAttributes> implements ResourceAttributes {
    public id!: string;

    public title!: string;

    public mime!: string;

    public filename!: string;

    public createdTime!: number;

    public updatedTime!: number;

    public userCreatedTime!: number;

    public userUpdatedTime!: number;

    public fileExtension!: string;

    public encryptionCipherText!: string;

    public encryptionApplied!: number;

    public encryptionBlobEncrypted!: number;

    public size!: number;

    public isShared!: number;

    public getFilename(): string {
        let extension: string | null = this.fileExtension;
        if (!extension) extension = this.mime ? mime.getExtension(this.mime) : "";
        extension = extension ? `.${extension}` : "";
        return `${this.id}${extension}`;
    }
}
Resources.init(fields, option);
