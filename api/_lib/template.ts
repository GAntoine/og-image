import { readFileSync } from 'fs';
import { ParsedRequest } from './types';

const poppins100Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Thin.woff2`).toString('base64');
const poppins100Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Thin.woff`).toString('base64');
const poppins100Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ThinItalic.woff2`).toString('base64');
const poppins100Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ThinItalic.woff`).toString('base64');
const poppins200Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraLight.woff2`).toString('base64');
const poppins200Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraLight.woff`).toString('base64');
const poppins200Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraLightItalic.woff2`).toString('base64');
const poppins200Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraLightItalic.woff`).toString('base64');
const poppins300Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Light.woff2`).toString('base64');
const poppins300Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Light.woff`).toString('base64');
const poppins300Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-LightItalic.woff2`).toString('base64');
const poppins300Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-LightItalic.woff`).toString('base64');
const poppins400Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Regular.woff2`).toString('base64');
const poppins400Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Regular.woff`).toString('base64');
const poppins400Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Italic.woff2`).toString('base64');
const poppins400Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Italic.woff`).toString('base64');
const poppins500Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Medium.woff2`).toString('base64');
const poppins500Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Medium.woff`).toString('base64');
const poppins500Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-MediumItalic.woff2`).toString('base64');
const poppins500Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-MediumItalic.woff`).toString('base64');
const poppins600Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-SemiBold.woff2`).toString('base64');
const poppins600Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-SemiBold.woff`).toString('base64');
const poppins600Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-SemiBoldItalic.woff2`).toString('base64');
const poppins600Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-SemiBoldItalic.woff`).toString('base64');
const poppins700Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Bold.woff2`).toString('base64');
const poppins700Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Bold.woff`).toString('base64');
const poppins700Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-BoldItalic.woff2`).toString('base64');
const poppins700Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-BoldItalic.woff`).toString('base64');
const poppins800Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraBold.woff2`).toString('base64');
const poppins800Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraBold.woff`).toString('base64');
const poppins800Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraBoldItalic.woff2`).toString('base64');
const poppins800Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-ExtraBoldItalic.woff`).toString('base64');
const poppins900Normal2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Black.woff2`).toString('base64');
const poppins900Normal = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-Black.woff`).toString('base64');
const poppins900Italic2 = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-BlackItalic.woff2`).toString('base64');
const poppins900Italic = readFileSync(`${__dirname}/../../_fonts/subset-Poppins-BlackItalic.woff`).toString('base64');

function getCss(image: string, fileType: string, width = '1200', height = '630') {
    return `
    /* Poppins-100-normal - latin-ext */
    @font-face {
        font-display: swap;
        font-family: Poppins;
        src: url(data:font/woff2;charset=utf-8;base64,${poppins100Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins100Normal}) format("woff");
        font-weight: 100;
        font-style: normal;
    }

    /* Poppins-100-italic - latin-ext */
    @font-face {
        font-display: swap;
        font-family: Poppins;
        src: url(data:font/woff2;charset=utf-8;base64,${poppins100Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins100Italic}) format("woff");
        font-weight: 100;
        font-style: italic;
    }

    /* Poppins-200-normal - latin-ext */
    @font-face {
        font-display: swap;
        font-family: Poppins;
        src: url(data:font/woff2;charset=utf-8;base64,${poppins200Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins200Normal}) format("woff");
        font-weight: 200;
        font-style: normal;
    }

    /* Poppins-200-italic - latin-ext */
    @font-face {
        font-display: swap;
        font-family: Poppins;
        src: url(data:font/woff2;charset=utf-8;base64,${poppins200Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins200Italic}) format("woff");
        font-weight: 200;
        font-style: italic;
    }

    /* Poppins-300-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins300Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins300Normal}) format("woff");
    font-weight: 300;
    font-style: normal;
    }

    /* Poppins-300-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins300Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins300Italic}) format("woff");
    font-weight: 300;
    font-style: italic;
    }

    /* Poppins-normal-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins400Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins400Normal}) format("woff");
    font-weight: normal;
    font-style: normal;
    }

    /* Poppins-normal-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins400Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins400Italic}) format("woff");
    font-weight: normal;
    font-style: italic;
    }

    /* Poppins-500-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins500Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins500Normal}) format("woff");
    font-weight: 500;
    font-style: normal;
    }

    /* Poppins-500-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins500Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins500Italic}) format("woff");
    font-weight: 500;
    font-style: italic;
    }

    /* Poppins-600-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins600Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins600Normal}) format("woff");
    font-weight: 600;
    font-style: normal;
    }

    /* Poppins-600-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins600Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins600Italic}) format("woff");
    font-weight: 600;
    font-style: italic;
    }

    /* Poppins-bold-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins700Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins700Normal}) format("woff");
    font-weight: bold;
    font-style: normal;
    }

    /* Poppins-bold-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins700Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins700Italic}) format("woff");
    font-weight: bold;
    font-style: italic;
    }

    /* Poppins-800-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins800Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins800Normal}) format("woff");
    font-weight: 800;
    font-style: normal;
    }

    /* Poppins-800-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins800Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins800Italic}) format("woff");
    font-weight: 800;
    font-style: italic;
    }

    /* Poppins-900-normal - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins900Normal2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins900Normal}) format("woff");
    font-weight: 900;
    font-style: normal;
    }

    /* Poppins-900-italic - latin-ext */
    @font-face {
    font-display: swap;
    font-family: Poppins;
    src: url(data:font/woff2;charset=utf-8;base64,${poppins900Italic2}) format("woff2"), url(data:font/woff2;charset=utf-8;base64,${poppins900Italic}) format("woff");
    font-weight: 900;
    font-style: italic;
    }

    body {
        background-image: url(data:image/${fileType};charset=utf-8;base64,${image});
        background-size: ${width}px ${height}px;
        background-repeat: no-repeat;
        height: 100vh;
    }

    .entry {
        font-family: Poppins;
        position: absolute;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 50px;
        line-height: 79px;
        color: #576CF7;
    }

    .participants {
        top: 16%;
        left: 62.25%;
    }

    .salary {
        top: 16%;
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
    const { image, fileType, participants, salary, duration, count } = parsedReq;
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
        <div class="entry salary">${salary}</div>
        <div class="entry duration">${duration}</div>
        <div class="entry count">${count}</div>
    </body>
</html>`;
}
