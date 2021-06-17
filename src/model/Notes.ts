// import fs from "fs";

// import { config } from "../config";
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

export default class Notes implements NoteAttributes {
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

    // public transferAttachmentFile(): void {
    //     if (this.resources) {
    //         this.resources.forEach((resource) => {
    //             const fileName = resource.getFilename();
    //             const file = `${config.profilePath}/resources/${fileName}`;
    //             fs.copyFileSync(file, `${config.targetPath}/${fileName}`);
    //         });
    //     }
    // }

    // public writeToFile(): void {
    //     const fileName = `${config.targetPath}/${this.id}.md`;
    //     let bodyData = this.body;
    //
    //     if (this.resources) {
    //         this.resources.forEach((resource) => {
    //             const resourceFileName = resource.getFilename();
    //             const file = `${config.profilePath}/resources/${resourceFileName}`;
    //             const regx = new RegExp(`\\(:/${resource.id}\\)`, "img");
    //
    //             fs.copyFileSync(file, `${config.targetPath}/resources/${resourceFileName}`);
    //             bodyData = bodyData.replace(regx, `(./resources/${resourceFileName})`);
    //         });
    //     }
    //
    //     const data = `${this.getFrontMatter()}\n${bodyData}\n`;
    //     fs.writeFileSync(fileName, data, "utf-8");
    // }
}
