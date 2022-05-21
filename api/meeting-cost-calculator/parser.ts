import fs from "fs";

import { sanitizeHtml } from '../lib/sanitizer';
import { ParsedRequest } from '../lib/types';

export function parseRequest(extension: string, query: any): ParsedRequest {
    const bitmap = fs.readFileSync(__dirname + `/../../images/meeting-cost-calculator.png`);
    const { participants, salary, duration, count } = (query || {});

    return {
        fileType: extension === 'jpeg' ? extension : 'png',
        image: Buffer.from(bitmap).toString('base64'),
        data: {
            participants: sanitizeHtml(participants as string || '5'),
            salary: sanitizeHtml(salary as string || '65K'),
            duration: sanitizeHtml(duration as string || '1 hr'),
            count: sanitizeHtml(count as string || '2'),
        }
    };
}
