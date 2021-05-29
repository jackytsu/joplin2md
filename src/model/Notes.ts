import fs from "fs";
import { DataTypes, Model, Association } from "sequelize";

import { config } from "../config";
import sequelize from "../DataBase";
import Utils from "../Utils";

import Folders from "./Folders";
import Tags from "./Tags";
import Resources from "./Resources";

export declare interface NoteAttributes {
    id: string;
    parentId: string;
    title: string;
    body: string;
    createdTime: number;
    updatedTime: number;
    isConflict: number;
    latitude: number;
    longitude: number;
    altitude: number;
    author: string;
    sourceUrl: string;
    isTodo: number;
    todoDue: number;
    todoCompleted: number;
    source: string;
    sourceApplication: string;
    applicationData: string;
    order: number;
    userCreatedTime: number;
    userUpdatedTime: number;
    encryptionCipherText: string;
    encryptionApplied: number;
    markupLanguage: number;
    isShared: number;
}

const fields = {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    parentId: { type: DataTypes.STRING, allowNull: false, field: "created_time" },
    title: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
    createdTime: { type: DataTypes.INTEGER, allowNull: false, field: "created_time" },
    updatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "updated_time" },
    isConflict: { type: DataTypes.INTEGER, allowNull: false, field: "is_conflict" },
    latitude: { type: DataTypes.NUMBER, allowNull: false },
    longitude: { type: DataTypes.NUMBER, allowNull: false },
    altitude: { type: DataTypes.NUMBER, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    sourceUrl: { type: DataTypes.STRING, allowNull: false, field: "source_url" },
    isTodo: { type: DataTypes.INTEGER, allowNull: false, field: "is_todo" },
    todoDue: { type: DataTypes.INTEGER, allowNull: false, field: "todo_due" },
    todoCompleted: { type: DataTypes.INTEGER, allowNull: false, field: "todo_completed" },
    source: { type: DataTypes.STRING, allowNull: false },
    sourceApplication: { type: DataTypes.STRING, allowNull: false, field: "source_application" },
    applicationData: { type: DataTypes.STRING, allowNull: false, field: "application_data" },
    order: { type: DataTypes.NUMBER, allowNull: false },
    userCreatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_created_time" },
    userUpdatedTime: { type: DataTypes.INTEGER, allowNull: false, field: "user_updated_time" },
    encryptionCipherText: { type: DataTypes.STRING, allowNull: false, field: "encryption_cipher_text" },
    encryptionApplied: { type: DataTypes.INTEGER, allowNull: false, field: "encryption_applied" },
    markupLanguage: { type: DataTypes.INTEGER, allowNull: false, field: "markup_language" },
    isShared: { type: DataTypes.INTEGER, allowNull: false, field: "is_shared" },
};

const option = {
    sequelize,
    modelName: "notes",
    timestamps: false,
};

export default class Notes extends Model<NoteAttributes> implements NoteAttributes {
    public id!: string;

    public parentId!: string;

    public title!: string;

    public body!: string;

    public createdTime!: number;

    public updatedTime!: number;

    public isConflict!: number;

    public latitude!: number;

    public longitude!: number;

    public altitude!: number;

    public author!: string;

    public sourceUrl!: string;

    public isTodo!: number;

    public todoDue!: number;

    public todoCompleted!: number;

    public source!: string;

    public sourceApplication!: string;

    public applicationData!: string;

    public order!: number;

    public userCreatedTime!: number;

    public userUpdatedTime!: number;

    public encryptionCipherText!: string;

    public encryptionApplied!: number;

    public markupLanguage!: number;

    public isShared!: number;

    public readonly tags?: Tags[];

    public readonly resources?: Resources[];

    public readonly folder?: Folders;

    public static associations: {
        tags: Association<Notes, Tags>;
    };

    public getFrontMatter(): string {
        let frontMatter = "---\n";

        frontMatter += `title: ${this.title}\n`;
        frontMatter += `date: ${Utils.dateToString(this.userCreatedTime)}\n`;
        frontMatter += `updated: ${Utils.dateToString(this.userUpdatedTime)}\n`;
        frontMatter += `categories: \n`;
        frontMatter += `  - ${this.folder?.title}\n`;

        if (this.tags) {
            frontMatter += "tags: \n";
            this.tags.forEach((tag) => {
                frontMatter += `  - ${tag.title}\n`;
            });
        }

        return `${frontMatter}---\n`;
    }

    public transferAttachmentFile(): void {
        if (this.resources) {
            this.resources.forEach((resource) => {
                const fileName = resource.getFilename();
                const file = `${config.profilePath}/resources/${fileName}`;
                fs.copyFileSync(file, `${config.targetPath}/${fileName}`);
            });
        }
    }
}
Notes.init(fields, option);

Notes.belongsToMany(Tags, {
    through: "note_tags",
    foreignKey: "note_id",
    otherKey: "tag_id",
    timestamps: false,
});

Notes.belongsToMany(Resources, {
    through: "note_resources",
    foreignKey: "note_id",
    otherKey: "resource_id",
    timestamps: false,
});

Folders.hasMany(Notes, {
    foreignKey: "parent_id",
});
Notes.belongsTo(Folders, {
    foreignKey: "parent_id",
});
