let body = document.querySelector('body');

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
  body.style.fontFamily =
    homeGeneratorFonts[getRandomInt(0, homeGeneratorFonts.length)];
};

// ANCHOR -- Activación generador espacio

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 32 && e.target == document.body) {
    e.preventDefault();
  }

  if (e.keyCode === 32) {
    generatorStuff();
  }
});
