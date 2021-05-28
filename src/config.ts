import { Options } from "sequelize";

export declare interface Joplin2MDConfig {
    folderNames: Array<string>;
    profilePath: string;
    targetPath: string;
}

const config: Joplin2MDConfig = {
    folderNames: ["指南", "作品"],
    profilePath: "C:/Users/MSI_NB/.config/joplin-desktop",
    targetPath: "D:/projects/hexo-blog/temp",
};

const dataBaseConfig: Options = {
    logging: false,
    dialect: "sqlite",
    storage: `${config.profilePath}/database.sqlite`,
};

export { config };
export { dataBaseConfig };
