import { Request, Response } from 'express';
import { parse } from 'url';

import { getScreenshot } from './lib/chromium';
import { parseRequest as parseMCCRequest } from './meeting-cost-calculator/parser';
import { getHtml as getMCCHtml } from './meeting-cost-calculator/template';

const isDev = !process.env.GOOGLE_CHROME_SHIM;
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

const parserMap = {
    'meeting-cost-calculator': {
        parser: parseMCCRequest,
        html: getMCCHtml,
    }
} as const;

export default async function handler(req: Request, res: Response) {
    try {
        const { pathname, query } = parse(req.url || '/', true);
        
        const filename = (pathname || '/').slice(0, -1).split("/").pop() as string;
        const fl = filename.split('.')[0];

        const parser = parserMap[fl as keyof typeof parserMap];
        const parsedReq = parser.parser(filename, query);
        const html = parser.html(parsedReq);

        if (isHtmlDebug) {
            res.setHeader('Content-Type', 'text/html');
            res.end(html);
            return;
        }

        const { fileType } = parsedReq;
        const file = await getScreenshot(html, fileType, isDev);
        res.statusCode = 200;
        res.setHeader('Content-Type', `image/${fileType}`);
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.end(file);
    } catch (e) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/png');
        res.redirect('https://fellow.app/wp-content/uploads/2020/07/URL-Preview.png')
        console.error(e);
    }
}
