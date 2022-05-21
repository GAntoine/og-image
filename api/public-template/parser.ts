import fs from "fs";

import { sanitizeHtml } from '../lib/sanitizer';
import { ParsedRequest } from '../lib/types';

export function parseRequest(extension: string, query: any): ParsedRequest {
    const bitmap = fs.readFileSync(__dirname + `/../../images/public-template.png`);
    const { title } = (query || {});

    return {
        fileType: extension === 'jpeg' ? extension : 'png',
        image: Buffer.from(bitmap).toString('base64'),
        data: {
            title: sanitizeHtml(title as string || 'Welcome to the team! 😃🎉'),
        }
    };
}
