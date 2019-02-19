// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function newDiv() {
  var coords = [];
  var hex = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  var i = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
  shuffleArray(hex);
  var color1 = "#" + hex[i[0]] + hex[i[1]] + hex[i[2]] + hex[i[3]] + hex[i[4]] + hex[i[5]];

  shuffleArray(hex);
  i = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
  var color2 = "#" + hex[i[0]] + hex[i[1]] + hex[i[2]] + hex[i[3]] + hex[i[4]] + hex[i[5]];

  shuffleArray(hex);
  i = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
  var color3 = "#" + hex[i[0]] + hex[i[1]] + hex[i[2]] + hex[i[3]] + hex[i[4]] + hex[i[5]];
  shuffleArray(hex);
  i = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)];
  var color4 = "#" + hex[i[0]] + hex[i[1]] + hex[i[2]] + hex[i[3]] + hex[i[4]] + hex[i[5]];
  for (i=0; i<48; i++) {
    coords.push(Math.floor((Math.random() * 400) + 1).toString())
  }
  var string = 'M' + coords[0] + ' ' + coords[1] + ' C ' + coords[2]  + ' ' +  coords[3] + ', ' + coords[4]  + ' ' + coords[5] + ', ' + coords[6]  + ' ' +  coords[7] + 'S' + ''+ coords[8]  + ' ' + coords[9] + ', ' + coords[10]  + ' ' +  coords[11]+ 'S' + + coords[12]  + ' ' + coords[13] + ', ' + coords[14]  + ' ' +  coords[15];
    var string2 = 'M' + coords[16] + ' ' + coords[17] + ' C ' + coords[18]  + ' ' +  coords[19] + ', ' + coords[20]  + ' ' + coords[21] + ', ' + coords[22]  + ' ' +  coords[23] + 'S' + + coords[24]  + ' ' + coords[25] + ', ' + coords[26]  + ' ' +  coords[27]+ 'S' + + coords[28]  + ' ' + coords[29] + ', ' + coords[30]  + ' ' +  coords[31];
      var string3 = 'M' + coords[32] + ' ' + coords[33] + ' C ' + coords[34]  + ' ' +  coords[35] + ', ' + coords[36]  + ' ' + coords[37] + ', ' + coords[38]  + ' ' +  coords[39] + 'S' + + coords[40]  + ' ' + coords[41] + ', ' + coords[42]  + ' ' +  coords[43]+ 'S' + + coords[44]  + ' ' + coords[45] + ', ' + coords[46]  + ' ' +  coords[47];
w = window.innerWidth;
if (w < 460) {
  var width = w - 60;
}
else {
  var width = 400;
}

art.innerHTML = "<svg viewBox='0 0 400 400' width='" + width + "' height='" + width + "' version='1.1' xmlns='http://www.w3.org/2000/svg;'><rect width='100%' height='100%' fill='" + color4 + "'/><path d='" + string3 + " z' stroke='" + color1 + "' fill='" + color1 + "'/><path d='" + string2 + " z' stroke='" + color2 + "' fill='" + color2 + "'/><path d='" + string + " z' stroke='" + color3 + "' fill='" + color3 + "'/></svg>";

document.getElementById("painting_color1").value = color1;
document.getElementById("painting_color2").value = color2;
document.getElementById("painting_color3").value = color3;
document.getElementById("painting_color4").value = color4;
document.getElementById("painting_coords1").value = string;
document.getElementById("painting_coords2").value = string2;
document.getElementById("painting_coords3").value = string3;
document.getElementById("hide").classList.add("show");
};
