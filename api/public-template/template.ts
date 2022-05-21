import { ParsedRequest } from '../lib/types';
import { getFonts } from '../lib/fonts';

function getCss(image: string, fileType: string, width = '1200', height = '630') {
    return `
    ${getFonts()}

    body {
        background-image: url(data:image/${fileType};charset=utf-8;base64,${image});
        background-size: ${width}px ${height}px;
        background-repeat: no-repeat;
        height: 100vh;
    }

    .title {
        position: absolute;
        font-family: Lato;
        font-weight: 700;
        font-size: 37.52px;
        line-height: 52.52px;
        color: #2B353A;
        left: 36%;
        top: 11%;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { image, fileType, data: { title } } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(image, fileType)}
    </style>
    <body>
        <div class="title">${title}</div>
    </body>
</html>`;
}
