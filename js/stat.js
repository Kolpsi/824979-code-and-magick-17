"use stric"

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 80;
var CLOUD_Y = 40;
var GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40
var barHeight = CLOUD_HEIGHT - GAP * 2 - FONT_GAP;
var TEXT_Y = 260;
var TIME_Y = 100;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i <arr.lenght; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
  console.log(maxElement);
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, 100, 10, "#fff");

  ctx.font = "PT mono 16px";
  ctx.fillStyle = "#000";
  ctx.fillText("Ура вы победили", CLOUD_X + FONT_GAP * 2, CLOUD_Y);
  ctx.fillStyle = "#000";
  ctx.fillText("Список результатов:", CLOUD_X + FONT_GAP * 2, CLOUD_Y + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++ ) {
    ctx.fillText(names[i], CLOUD_X + GAP + ( GAP + BAR_WIDTH) * i, TEXT_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + ( GAP + BAR_WIDTH) * i  , barHeight - 70);
  };

  for (var i = 0; i < names.length; i++ ) {
    var randomColor = "hsl(228, 100%, " + Math.floor(Math.random() * 21 + 60) + "%)";
    ctx.fillRect(CLOUD_X + GAP + (GAP + BAR_WIDTH) * i, 100, BAR_WIDTH, (barHeight * times[i]) / maxTime / 1/4);
    ctx.fillStyle = randomColor;
  };
};
