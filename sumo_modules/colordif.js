var cd        =  require('color-difference');
var red       = "#CC0000";
var pink      = "#FF33CC";
var yellow    = "#FFFF00";
var blue      = "#3366FF";
var green     = "#33CC00";
var tabColor  = [red, pink, yellow, blue, green], i;
var tabDiff   = [];

var chooseColor = function(currentColor) {
    for (i=0; i < tabColor.length; i++) {
	tabDiff.push({color: tabColor[i], percentDiff: cd.compare(currentColor, tabColor[i])});
    }
    tabDiff.sort(compare);
    return tabDiff[0];
}


function compare(a,b) {
  if (a.percentDiff < b.percentDiff)
    return -1;
  else if (a.percentDiff > b.percentDiff)
    return 1;
  else 
    return 0;
}

exports.chooseColor = chooseColor;