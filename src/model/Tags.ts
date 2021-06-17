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

export default class Tags implements TagAttributes {
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
