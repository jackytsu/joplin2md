#!/usr/bin/env node

import SequelizeLib from "sequelize";

import { config } from "../src/config";

import Folders from "../src/model/Folders";
import Notes from "../src/model/Notes";
import Tags from "../src/model/Tags";
import Resources from "../src/model/Resources";

const lastUpdateTime = 1606360920000;

(async () => {
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
})();
