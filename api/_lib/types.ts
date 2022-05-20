export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
    fileType: FileType;
    image: string;
    participants: string;
    salary: string;
    duration: string;
    count: string;
}
