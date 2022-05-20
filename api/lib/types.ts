export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
    fileType: FileType;
    image: string;
    data: { [key: string]: string };
}
