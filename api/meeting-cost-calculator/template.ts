import { ParsedRequest } from '../lib/types';

function getCss(image: string, fileType: string, width = '1200', height = '630') {
    return `
    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:100;
        src: local("Poppins Thin"), local("Poppins-Thin"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Thin.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Thin.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:100;
        src: local("Poppins Thin Italic"), local("Poppins-ThinItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ThinItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ThinItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:200;
        src: local("Poppins ExtraLight"), local("Poppins-ExtraLight"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraLight.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraLight.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:200;
        src: local("Poppins ExtraLight Italic"), local("Poppins-ExtraLightItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraLightItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraLightItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:300;
        src: local("Poppins Light"), local("Poppins-Light"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Light.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Light.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:300;
        src: local("Poppins Light Italic"), local("Poppins-LightItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-LightItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-LightItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:400;
        src: local("Poppins Regular"), local("Poppins-Regular"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Regular.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Regular.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:400;
        src: local("Poppins Italic"), local("Poppins-Italic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Italic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Italic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:500;
        src: local("Poppins Medium"), local("Poppins-Medium"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Medium.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Medium.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:500;
        src: local("Poppins Medium Italic"), local("Poppins-MediumItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-MediumItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-MediumItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:600;
        src: local("Poppins SemiBold"), local("Poppins-SemiBold"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-SemiBold.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-SemiBold.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:600;
        src: local("Poppins SemiBold Italic"), local("Poppins-SemiBoldItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-SemiBoldItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-SemiBoldItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:700;
        src: local("Poppins Bold"), local("Poppins-Bold"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Bold.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Bold.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:700;
        src: local("Poppins Bold Italic"), local("Poppins-BoldItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-BoldItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-BoldItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:800;
        src: local("Poppins ExtraBold"), local("Poppins-ExtraBold"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraBold.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraBold.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:800;
        src: local("Poppins ExtraBold Italic"), local("Poppins-ExtraBoldItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraBoldItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-ExtraBoldItalic.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:normal;
        font-weight:900;
        src: local("Poppins Black"), local("Poppins-Black"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Black.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-Black.woff) format("woff");
    }

    @font-face {
        font-display: swap;
        font-family:Poppins;
        font-style:italic;
        font-weight:900;
        src: local("Poppins Black Italic"), local("Poppins-BlackItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-BlackItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/subset-Poppins-BlackItalic.woff) format("woff");
    }

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
