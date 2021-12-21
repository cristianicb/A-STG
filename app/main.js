let personalityOptions = [
    "Traditional",
    "Sophisticated",
    "Formal",
    "Modern",
    "Stylish",
    "Trendy",
    "Friendly",
    "Bold",
    "Sensitive",
    "Glamour",
    "Authoritative",
    "Welcoming",
    "Techy",
];

let purposeOptions = ["Digital", "Print", "Logo", "Modern", "SmallText"];

let fontStyleOptions = [
    "Serif",
    "SansSerif",
    "Display",
    "Handwriting",
    "Monospace",
];
//-----
//-----

// Menu Right
let fontFamily = document.querySelectorAll(".fontFamily");

let specimenTitleFontName = document.querySelector(".specimenTitleFontName");

let specimenSubtitleFontName = document.querySelector(
    ".specimenSubtitleFontName"
);
let specimenBodyFontName = document.querySelector(".specimenBodyeFontName");

let downloadTitle = document.querySelector(".downloadTitle");
let downloadSubtitle = document.querySelector(".downloadSubtitle");
let downloadBodyText = document.querySelector(".downloadBodyText");

let titleFontFamily = document.getElementById("title");
let subtitleFontFamily = document.getElementById("subtitle");
let bodyFontFamily = document.getElementById("bodyText");

let title = document.querySelectorAll(".title");
let subtitle = document.querySelectorAll(".subtitle");
let bodyText = document.querySelectorAll(".bodyText");

let text_element = document.querySelectorAll(".text_element");

let personality = document.getElementById("personality");
let purpose = document.getElementById("purspose");
let availableFonts = document.getElementById("availableFonts");
let fontStyle = document.getElementById("fontStyle");

let canvas = document.getElementById("canvas");

let titleFontName;

const resetVariables = () => {
    title = document.querySelectorAll(".title");
    subtitle = document.querySelectorAll(".subtitle");
    bodyText = document.querySelectorAll(".bodyText");
    specimenTitleFontName = document.querySelector(".specimenTitleFontName");
    specimenSubtitleFontName = document.querySelector(
        ".specimenSubtitleFontName"
    );

    text_element = document.querySelectorAll(".text_element");

    canvas = document.getElementById("canvas");
    specimenBodyFontName = document.querySelector(".specimenBodyFontName");
};

// --- ANCHOR GLOBAL VARIABLES

let randomIndex = (e) => {
    e.selectedIndex = Math.floor(Math.random() * e.length - 1) + 1;
};

let changeFontFamily = (e, font) => {
    for (i = 0; i < e.length; i++) {
        e[i].style.fontFamily = font.value;
    }
};

let changeInner = (e, font) => {
    for (i = 0; i < e.length; i++) {
        e[i].innerHTML =
            font.value + ", " + window.getComputedStyle(e[i]).fontSize;
    }
};

let downloadLink = () => {
    downloadTitle.href = ` https://fonts.google.com/specimen/${titleFontFamily.value
        .split(" ")
        .join("+")}`;
    downloadSubtitle.href = ` https://fonts.google.com/specimen/${subtitleFontFamily.value
        .split(" ")
        .join("+")}`;
    downloadBodyText.href = ` https://fonts.google.com/specimen/${bodyFontFamily.value
        .split(" ")
        .join("+")}`;
};

const generatorView = () => {
    switch (changeView.value) {
        case "main":
            canvasContainer.innerHTML = `
            <div id="canvasMainView">
            <div class="text__container" contenteditable="true">
                <p class="title text_element">Title</p>
            </div>
            <div class="text__container" contenteditable="true">
            <p class="subtitle  text_element">Subtitle</p>
            </div>
            <div class="text__container" contenteditable="true">
            <p class="bodyText  text_element">Body Text</p>
            </div>
        </div>
            `;
            break;
        case "canvas":
            canvasContainer.innerHTML = `
            <div id="canvas">
                        <p class="title text_element" contenteditable="true">Title</p>
                        <p class="subtitle text_element" contenteditable="true">Subtitle</p>
                        <p class="bodyText text_element" contenteditable="true">Aaa</p>
                    </div>
            `;
            break;
        case "scale":
            canvasContainer.innerHTML = `
                <div id="canvasTextScale">
                        <p class="title scaleSize01">Title</p>

                        <p class="title scaleSize02">Subtitle</p>

                        <p class="title scaleSize03">Body Text</p>
                        <p class="subtitle scaleSize04">subtitle</p>
                        <p class="subtitle scaleSize05">subtitle</p>
                        <p class="bodyText scaleSize06">Body Text</p>
                        <p class="bodyText scaleSize07">Body Text</p>
                        <p class="bodyText scaleSize08">Body Text</p>
                        <p class="bodyText scaleSize09">Body Text</p>
                        <p class="bodyText scaleSize10">Body Text</p>
                    </div>
                `;
            break;
        case "mockup":
            canvasContainer.innerHTML = `
                <img src="./assets/img/mockup.svg" alt="" class="mockup" />
                <div id="canvasMockup">
                    <p class="title">This is a cool Website</p>

                    <p class="bodyText">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatem reprehenderit ipsum sequi?
                    </p>
                </div>
                `;
            break;
        case "specimen":
            canvasContainer.innerHTML = `
            <div id="canvasSpecimen">


                    <h2>Body size comparison</h2>

                    <div class="bodysize">
                    <p class="title bodySizeComparison">Xx</p>

                    <p class="subtitle  bodySizeComparison">Xx</p>

                    <p class="bodyText  bodySizeComparison">Xx</p>
                    </div>
                    <!-- end .bodysize -->

            
            <div class="grid_8 charset">
                <h2 class="specimenTitleFontName">${titleFontFamily.value}</h2>
                <p class="title specimenGlifos">
                    A&#8201;B&#8201;C&#8201;D&#8201;E&#8201;F&#8201;G&#8201;H&#8201;I&#8201;J&#8201;K&#8201;L&#8201;M&#8201;N&#8201;O&#8201;P&#8201;Q&#8201;R&#8201;S&#8201;T&#8201;U&#8201;V&#8201;W&#8201;X&#8201;Y&#8201;Z
                    a&#8201;b&#8201;c&#8201;d&#8201;e&#8201;f&#8201;g&#8201;h&#8201;i&#8201;j&#8201;k&#8201;l&#8201;m&#8201;n&#8201;o&#8201;p&#8201;q&#8201;r&#8201;s&#8201;t&#8201;u&#8201;v&#8201;w&#8201;x&#8201;y&#8201;z
                    1&#8201;2&#8201;3&#8201;4&#8201;5&#8201;6&#8201;7&#8201;8&#8201;9&#8201;0&#8201;&amp;&#8201;@&#8201;.&#8201;,&#8201;?&#8201;!&#8201;&#8217;&#8201;&#8220;&#8201;&#8221;&#8201;(&#8201;)
                </p>
                <h2 class="specimenSubtitleFontName">${subtitleFontFamily.value}</h2>
                <p class="subtitle specimenGlifos">
                    A&#8201;B&#8201;C&#8201;D&#8201;E&#8201;F&#8201;G&#8201;H&#8201;I&#8201;J&#8201;K&#8201;L&#8201;M&#8201;N&#8201;O&#8201;P&#8201;Q&#8201;R&#8201;S&#8201;T&#8201;U&#8201;V&#8201;W&#8201;X&#8201;Y&#8201;Z
                    a&#8201;b&#8201;c&#8201;d&#8201;e&#8201;f&#8201;g&#8201;h&#8201;i&#8201;j&#8201;k&#8201;l&#8201;m&#8201;n&#8201;o&#8201;p&#8201;q&#8201;r&#8201;s&#8201;t&#8201;u&#8201;v&#8201;w&#8201;x&#8201;y&#8201;z
                    1&#8201;2&#8201;3&#8201;4&#8201;5&#8201;6&#8201;7&#8201;8&#8201;9&#8201;0&#8201;&amp;&#8201;@&#8201;.&#8201;,&#8201;?&#8201;!&#8201;&#8217;&#8201;&#8220;&#8201;&#8221;&#8201;(&#8201;)
                </p>
                <h2 class="specimenBodyFontName">${bodyFontFamily.value}</h2>
                <p class="bodyText specimenGlifos">
                    A&#8201;B&#8201;C&#8201;D&#8201;E&#8201;F&#8201;G&#8201;H&#8201;I&#8201;J&#8201;K&#8201;L&#8201;M&#8201;N&#8201;O&#8201;P&#8201;Q&#8201;R&#8201;S&#8201;T&#8201;U&#8201;V&#8201;W&#8201;X&#8201;Y&#8201;Z
                    a&#8201;b&#8201;c&#8201;d&#8201;e&#8201;f&#8201;g&#8201;h&#8201;i&#8201;j&#8201;k&#8201;l&#8201;m&#8201;n&#8201;o&#8201;p&#8201;q&#8201;r&#8201;s&#8201;t&#8201;u&#8201;v&#8201;w&#8201;x&#8201;y&#8201;z
                    1&#8201;2&#8201;3&#8201;4&#8201;5&#8201;6&#8201;7&#8201;8&#8201;9&#8201;0&#8201;&amp;&#8201;@&#8201;.&#8201;,&#8201;?&#8201;!&#8201;&#8217;&#8201;&#8220;&#8201;&#8221;&#8201;(&#8201;)
                </p>
            </div>
            </div>

            
            <!-- end .container-16 -->
        </div>
                `;
            break;
    }
};

// ANCHOR ACTIVATORS

// ANCHOR -- Window On Load

window.onload = function () {
    // ANCHOR ------ Populate

    // Populate Font Family

    $.getJSON(googleApi, function (data) {
        for (i = 0; i < fontFamily.length; i++) {
            for (o = 0; o < data.items.length; o++) {
                optionFonts = document.createElement("option");
                optionFonts.text = data.items[o].family;
                optionFonts.value = data.items[o].family;

                fontFamily[i].add(optionFonts);
            }
        }
    });

    // Populate Personality

    for (o = 0; o < personalityOptions.length; o++) {
        optionFonts = document.createElement("option");
        optionFonts.text = personalityOptions[o];
        optionFonts.value = personalityOptions[o];

        personality.add(optionFonts);
    }

    // Populate Purpose

    for (o = 0; o < purposeOptions.length; o++) {
        optionFonts = document.createElement("option");
        optionFonts.text = purposeOptions[o];
        optionFonts.value = purposeOptions[o];

        purpose.add(optionFonts);
    }

    for (o = 0; o < fontStyleOptions.length; o++) {
        optionFonts = document.createElement("option");
        optionFonts.text = fontStyleOptions[o];
        optionFonts.value = fontStyleOptions[o];

        fontStyle.add(optionFonts);
    }

    generatorView();
    resetVariables();

    downloadLink();
};

document.addEventListener(
    "DOMContentLoaded",
    function () {
        console.log(titleFontFamily.length);
    },
    false
);

randomIndex(titleFontFamily);

// ANCHOR -- On Input change

fontFamily.forEach((item) => {
    item.addEventListener("change", (event) => {
        changeFontFamily(title, titleFontFamily);
        changeFontFamily(subtitle, subtitleFontFamily);
        changeFontFamily(bodyText, bodyFontFamily);
        downloadLink();
    });
});

// ANCHOR -- Change view

changeView.onchange = function () {
    generatorView();
    resetVariables();

    changeFontFamily(title, titleFontFamily);
    changeFontFamily(subtitle, subtitleFontFamily);
    changeFontFamily(bodyText, bodyFontFamily);

    if (changeView.value == "scale" || changeView.value == "main") {
        changeInner(title, titleFontFamily);
        changeInner(subtitle, subtitleFontFamily);
        changeInner(bodyText, bodyFontFamily);
    }

    if (changeView.value == "canvas") {
        let rndW = Math.floor(Math.random() * 750) + 250;
        let rndH = Math.floor(Math.random() * 750) + 250;
        canvas.style.width = rndH / 10 + "%";
        canvas.style.height = rndW / 10 + "%";
    }

    if (changeView.value == "specimen") {
        specimenTitleFontName.innerHTML = titleFontFamily.value;
        specimenSubtitleFontName.innerHTML = subtitleFontFamily.value;
        specimenBodyFontName.innerHTML = bodyFontFamily.value;
    }
};

// ANCHOR -- Activación generador

window.addEventListener("keydown", function (e) {
    if (
        (e.keyCode === 32 && e.target == document.body) ||
        e.target == document.button
    ) {
        e.preventDefault();
    }

    if (
        e.keyCode === 32 &&
        document.activeElement !== text_element[0] &&
        document.activeElement !== text_element[1] &&
        document.activeElement !== text_element[2]
    ) {
        downloadLink();

        randomIndex(titleFontFamily);
        randomIndex(subtitleFontFamily);
        randomIndex(bodyFontFamily);

        changeFontFamily(title, titleFontFamily);
        changeFontFamily(subtitle, subtitleFontFamily);
        changeFontFamily(bodyText, bodyFontFamily);

        switch (changeView.value) {
            case "scale":
                changeInner(title, titleFontFamily);
                changeInner(subtitle, subtitleFontFamily);
                changeInner(bodyText, bodyFontFamily);
                break;
            case "canvas":
                let rndW = Math.floor(Math.random() * 750) + 250;
                let rndH = Math.floor(Math.random() * 750) + 250;
                canvas.style.width = rndH / 10 + "%";
                canvas.style.height = rndW / 10 + "%";

                let rndTitle = Math.floor(Math.random() * 20) + 80;
                let rndSubtitle = Math.floor(Math.random() * 1) + 20;
                let rndBodyText = Math.floor(Math.random() * 24) + 8;

                title[0].style.fontSize = rndTitle + "px";
                subtitle[0].style.fontSize = rndSubtitle + "px";
                bodyText[0].style.fontSize = rndBodyText + "px";
                break;
            case "specimen":
                specimenTitleFontName.innerHTML = titleFontFamily.value;
                specimenSubtitleFontName.innerHTML = subtitleFontFamily.value;
                specimenBodyFontName.innerHTML = bodyFontFamily.value;
                break;
        }

        availableFonts.innerHTML = titleFontFamily.length;
    }
});

$("#wSystem").chosen({
    no_results_text: "Oops, nothing found!",
});
