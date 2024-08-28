export type Link = { id: number; title: string; url: string };
const LinkExport = {} as Link;
export default LinkExport;
export interface LinkType {
    url: string;
    title: string;
    id: string | number;
}