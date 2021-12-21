let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');
let bodyText = document.querySelector('.bodyText');

let footer = document.querySelector('footer');
let nav = document.querySelector('.nav');

let text_element = document.querySelectorAll('.text_element');
//let rndW = Math.floor(Math.random() * 750) + 250;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const homeGeneratorFonts = [
  'Archia',
  'Mess',

  'Halibut',
  'Mazius',
  'Ribes',
  'Sinistre',
];

let generatorStuff = () => {
  title.style.fontFamily =
    homeGeneratorFonts[getRandomInt(0, homeGeneratorFonts.length)];
  subtitle.style.fontFamily =
    homeGeneratorFonts[getRandomInt(0, homeGeneratorFonts.length)];
  bodyText.style.fontFamily =
    homeGeneratorFonts[getRandomInt(0, homeGeneratorFonts.length)];

  footer.style.fontFamily =
    homeGeneratorFonts[getRandomInt(0, homeGeneratorFonts.length)];
  nav.style.fontFamily =
    homeGeneratorFonts[getRandomInt(0, homeGeneratorFonts.length)];
};

// ANCHOR -- Activación generador espacio

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 32 && e.target == document.body) {
    e.preventDefault();
  }

  if (
    e.keyCode === 32 &&
    document.activeElement !== text_element[0] &&
    document.activeElement !== text_element[1] &&
    document.activeElement !== text_element[2]
  ) {
    generatorStuff();
  }
});
