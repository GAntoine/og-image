import fs from "fs";
import { IncomingMessage } from 'http';
import { parse } from 'url';

import { sanitizeHtml } from './sanitizer';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage): ParsedRequest {
    const { pathname, query } = parse(req.url || '/', true);
    const { participants, salary, duration, count } = (query || {});
    
    const file = (pathname || '/').slice(0, -1).split("/").pop() as string;
    const [filename, extension] = file.split('.');
    console.log(filename);

    const bitmap = fs.readFileSync(__dirname + `/../../_images/${file}`);
    return {
        fileType: extension === 'jpeg' ? extension : 'png',
        participants: sanitizeHtml(participants as string || '5'),
        salary: sanitizeHtml(salary as string || '65K'),
        duration: sanitizeHtml(duration as string || '1'),
        count: sanitizeHtml(count as string || '2'),
        image: Buffer.from(bitmap).toString('base64'),
    };
}
