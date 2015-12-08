var calc = function(nbSMS) {
  var i = 0;
  charSupp = "";
  while (++i <= nbSMS) {
    charSupp += " - part " + i + " of " + nbSMS;
  }
  return charSupp.length;
}

var main = function(str) {
  var answer = [];
  var totalSize = str.length;
  var nbSMS = Math.ceil(str.length / 160);
  console.log("nbSMS", nbSMS);
  var charSupp = calc(nbSMS);
  console.log("charSupp", charSupp)
  if (Math.floor((str.length + charSupp) / 160) != nbSMS) {
    charSupp = calc(Math.ceil((str.length + charSupp) / 160));
  }
  console.log("charSupp2", charSupp)
  nbSMS = Math.ceil((str.length + charSupp) / 160);
  var i = 0;
  var index = 0;
  while (++i <= nbSMS) {
    var strToAdd = " - part " + i + " of " + nbSMS;
    var j = 0;
    if (totalSize > 160) {
      var stop = 160 - strToAdd.length;
      totalSize -= 160;
    } else {
      var stop = totalSize - strToAdd.length;
    }
    console.log(stop)
    var temp = "";
    while (j++ <= stop) {
      temp += str[index];
      index++;
    }
    temp += strToAdd;
    answer.push(temp);
  }
  console.log(answer);
}

var test = "";
var i = 2000;
while (i--)
  test += "a";

main(test);