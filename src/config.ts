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

export { config };
