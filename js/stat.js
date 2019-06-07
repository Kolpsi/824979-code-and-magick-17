'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 80;
var CLOUD_Y = 40;
var GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var TEXT_Y = 260;
var HISTOGRAMS_HEIGHT = 150;
var BAR_Y = 30;
var BAR_GAP = 40;
var TITLE_POSITION_X = CLOUD_X + FONT_GAP * 2;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.font = 'PT mono 16px';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили', TITLE_POSITION_X, CLOUD_Y);
  ctx.fillText('Список результатов:', TITLE_POSITION_X, CLOUD_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < times.length; i++) {
    var randomColor = 'hsl(228, 100%, ' + Math.floor(Math.random() * 21 + 60) + '%)';
    var barHeight = (HISTOGRAMS_HEIGHT * times[i]) / maxTime;
    var TEXT_POSITION_X = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;

    ctx.setTransform(1, 0, 0, -1, 0, 270);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = randomColor;
    }
    ctx.fillRect(TEXT_POSITION_X, BAR_Y, BAR_WIDTH, barHeight);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), TEXT_POSITION_X, CLOUD_HEIGHT - barHeight - BAR_GAP);
    ctx.fillText(names[i], TEXT_POSITION_X, TEXT_Y);
  }
};
