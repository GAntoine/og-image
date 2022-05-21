export function getFonts() {
    return `
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 100;
        src: local("Lato Hairline"), local("Lato-Hairline"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Hairline.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Hairline.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 100;
        src: local("Lato Hairline Italic"), local("Lato-HairlineItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-HairlineItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-HairlineItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 200;
        src: local("Lato Thin"), local("Lato-Thin"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Thin.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Thin.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 200;
        src: local("Lato Thin Italic"), local("Lato-ThinItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-ThinItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-ThinItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 300;
        src: local("Lato Light"), local("Lato-Light"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Light.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Light.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 300;
        src: local("Lato Light Italic"), local("Lato-LightItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-LightItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-LightItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        src: local("Lato Regular"), local("Lato-Regular"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Regular.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Regular.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 400;
        src: local("Lato Italic"), local("Lato-Italic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Italic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Italic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        src: local("Lato Medium"), local("Lato-Medium"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Medium.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Medium.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        src: local("Lato Medium Italic"), local("Lato-MediumItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-MediumItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-MediumItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 600;
        src: local("Lato Semibold"), local("Lato-Semibold"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Semibold.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Semibold.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 600;
        src: local("Lato Semibold Italic"), local("Lato-SemiboldItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-SemiboldItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-SemiboldItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 700;
        src: local("Lato Bold"), local("Lato-Bold"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Bold.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Bold.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 700;
        src: local("Lato Bold Italic"), local("Lato-BoldItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-BoldItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-BoldItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 800;
        src: local("Lato Heavy"), local("Lato-Heavy"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Heavy.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Heavy.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 800;
        src: local("Lato Heavy Italic"), local("Lato-HeavyItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-HeavyItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-HeavyItalic.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: normal;
        font-weight: 900;
        src: local("Lato Black"), local("Lato-Black"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Black.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-Black.woff) format("woff")
    }
    
    @font-face {
        font-display: swap;
        font-family: Lato;
        font-style: italic;
        font-weight: 900;
        src: local("Lato Black Italic"), local("Lato-BlackItalic"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-BlackItalic.woff2) format("woff2"),
            url(https://fellow.app/wp-content/themes/fellow/build/fonts/Lato-BlackItalic.woff) format("woff")
    }

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
    `;
}
