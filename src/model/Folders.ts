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

export default class Folders implements FolderAttributes {
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
