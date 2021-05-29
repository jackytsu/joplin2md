import SequelizeLib from "sequelize";

import { config } from "./config";

import Folders from "./model/Folders";
import Notes from "./model/Notes";
import Tags from "./model/Tags";
import Resources from "./model/Resources";

const lastUpdateTime = 1606360920000;

const fun = async (): Promise<void> => {
    const notes = await Notes.findAll({
        include: [
            {
                model: Folders,
                attributes: ["title"],
                where: {
                    title: config.folderNames,
                },
            },
            {
                model: Tags,
                attributes: ["title"],
                through: {
                    attributes: [],
                },
            },
            {
                model: Resources,
                attributes: ["id", "title", "filename", "fileExtension", "mime"],
                through: {
                    attributes: [],
                },
            },
        ],
        where: {
            userUpdatedTime: {
                [SequelizeLib.Op.gt]: lastUpdateTime,
            },
        },
        order: [["userUpdatedTime", "asc"]],
    });

    notes.forEach((note) => {
        // console.log(row.getFrontMatter());
        // notes.push(row.toJSON());
        note.transferAttachmentFile();
    });

    console.log(JSON.stringify(notes, null, 4));
};

fun();
