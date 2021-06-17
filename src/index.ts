// import fs from "fs";
import qs from "qs";
// import SequelizeLib from "sequelize";
import bent from "bent";

import { config } from "./config";

// import Folders from "./model/Folders";
// import Notes from "./model/Notes";
// import Tags from "./model/Tags";
// import Resources from "./model/Resources";

// const lastUpdateTime = 0;

// const prepareFun = (): void => {
//     if (!fs.existsSync(config.targetPath)) {
//         fs.mkdirSync(config.targetPath);
//     }
//
//     if (!fs.existsSync(`${config.targetPath}/resources`)) {
//         fs.mkdirSync(`${config.targetPath}/resources`);
//     }
// };

// const fun = async (): Promise<void> => {
//     const notes = await Notes.findAll({
//         include: [
//             {
//                 model: Folders,
//                 attributes: ["title"],
//                 where: {
//                     title: config.folderNames,
//                 },
//             },
//             {
//                 model: Tags,
//                 attributes: ["title"],
//                 through: {
//                     attributes: [],
//                 },
//             },
//             {
//                 model: Resources,
//                 attributes: ["id", "title", "filename", "fileExtension", "mime"],
//                 through: {
//                     attributes: [],
//                 },
//             },
//         ],
//         where: {
//             userUpdatedTime: {
//                 [SequelizeLib.Op.gt]: lastUpdateTime,
//             },
//         },
//         order: [["userUpdatedTime", "asc"]],
//     });
//
//     notes.forEach((note: Notes) => {
//         // console.log(row.getFrontMatter());
//         // notes.push(row.toJSON());
//         // note.transferAttachmentFile();
//         note.writeToFile();
//     });
//
//     // console.log(JSON.stringify(notes, null, 4));
//     console.log("all done.");
// };

// prepareFun();
// fun();

(async (): Promise<void> => {
    const baseUrl = "http://localhost:41184";
    const token = "cb1fa8c68bcdce5c006fcc0a0976b2bd3991be8b5af442765fb9e3996eb83e46bb8533fa55ba723ab88e4e203268a3b0724e99382be52dc7bb819891a35320b2";
    const param = {
        token,
        query: `notebook:${config.folderNames[1]}`,
        order_by: "updated_time",
        order_dir: "desc",
        // limit: "2",
    };
    const url = `${baseUrl}/search?${qs.stringify(param)}`;
    console.log(url);

    const getJson = bent("json");
    const result = await getJson(url);
    result.items.forEach((item: any) => {
        // const tagUrl = `${baseUrl}/notes/${item.id}/tags?${qs.stringify({ token })}`;
        // getJson(tagUrl).then((tagResult: any) => {
        //     console.log("tags: ");
        //     console.log(tagResult);
        // });

        const fields = "id, title, mime, filename, created_time, updated_time, user_created_time, user_updated_time, file_extension, encryption_cipher_text, encryption_applied, encryption_blob_encrypted, size, is_shared, share_id";
        const resourceUrl = `${baseUrl}/notes/${item.id}/resources?${qs.stringify({ token, fields })}`;
        getJson(resourceUrl).then((resourceResult: any) => {
            console.log("resources: ");
            console.log(resourceResult);
        });
    });
    console.log(result);
})();
