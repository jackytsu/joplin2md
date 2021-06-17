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

export default class Resources implements ResourceAttributes {
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

    // public getFilename(): string {
    //     let extension: string | null = this.fileExtension;
    //     if (!extension) extension = this.mime ? mime.getExtension(this.mime) : "";
    //     extension = extension ? `.${extension}` : "";
    //     return `${this.id}${extension}`;
    // }
}
