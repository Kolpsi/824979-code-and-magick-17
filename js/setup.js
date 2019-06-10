'use strict';

var setupPopup = document.querySelector('.setup')
var setupSimiliarCharacters = document.querySelector('.setup-similar');
var setupSimiliarCharactersList = document.querySelector('.setup-similar-list');
var setupSimiliarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

setupPopup.classList.remove('hidden');
setupSimiliarCharacters.classList.remove('hidden');

for (var i = 0; i < 4; i++) {
  var wizardElement = setupSimiliarWizardTemplate.cloneNode(true);

  setupSimiliarCharactersList.appendChild(wizardElement);
}
