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

    .entry {
        position: absolute;
        font-family: Poppins;
        font-weight: 600;
        font-size: 50px;
        line-height: 79px;
        color: #576CF7;
    }

    .salary-period {
        font-size: 18px;
    }

    .participants {
        top: 17%;
        left: 62.25%;
    }

    .salary {
        top: 17%;
        left: 76.75%;
    }

    .duration {
        top: 44%;
        left: 62.25%;
    }

    .count {
        top: 44%;
        left: 76.75%;
    }
    `;
}

export function getHtml(parsedReq: ParsedRequest) {
    const { image, fileType, data: { participants, salary, duration, count } } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss(image, fileType)}
    </style>
    <body>
        <div class="entry participants">${participants}</div>
        <div class="entry salary">
            ${salary} <span class="salary-period">/year</span>
        </div>
        <div class="entry duration">${duration}</div>
        <div class="entry count">${count}</div>
    </body>
</html>`;
}
