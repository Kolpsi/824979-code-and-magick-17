'use strict';

var setupPopup = document.querySelector('.setup');
var setupSimiliarCharacters = document.querySelector('.setup-similar');
var setupSimiliarCharactersList = document.querySelector('.setup-similar-list');
var setupSimiliarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

setupPopup.classList.remove('hidden');
setupSimiliarCharacters.classList.remove('hidden');

var wizardNames = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var wizardSecondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', ' red', 'blue', 'yellow', 'green'];

function random() {
  return Math.random() - 0.5;
}

wizardNames.sort(compareRandom);
wizardSecondNames.sort(compareRandom);
coatColors.sort(compareRandom);
eyesColors.sort(compareRandom);

var wizards = [
  {
    name: wizardNames[0] + wizardSecondNames[0],
    coatColor: coatColors[0],
    eyeColors: eyesColors[0]
  },
  {
    name: wizardNames[1] + wizardSecondNames[1],
    coatColor: coatColors[1],
    eyeColors: eyesColors[1]
  },
  {
    name: wizardNames[2] + wizardSecondNames[2],
    coatColor: coatColors[2],
    eyeColors: eyesColors[2]
  },
  {
    name: wizardNames[3] + wizardSecondNames[3],
    coatColor: coatColors[3],
    eyeColors: eyesColors[3]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = setupSimiliarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyeColors;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimiliarCharactersList.appendChild(fragment);
