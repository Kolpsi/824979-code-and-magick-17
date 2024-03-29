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

var gerRandomElem = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

var createWizard = function () {
  return {
    name: gerRandomElem(wizardNames) + gerRandomElem(wizardSecondNames),
    coatColor: gerRandomElem(coatColors),
    eyeColors: gerRandomElem(eyesColors)
  };
};

var renderWizard = function () {
  var wizardElement = setupSimiliarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = createWizard().name;
  wizardElement.querySelector('.wizard-coat').style.fill = createWizard().coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = createWizard().eyeColors;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}

setupSimiliarCharactersList.appendChild(fragment);

