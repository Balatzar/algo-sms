var calc = function(nbSMS) {
  var i = 0;
  charSupp = "";
  while (++i <= nbSMS) {
    charSupp += " - part " + i + " of " + nbSMS;
  }
  return charSupp.length;
}

var sendSMS = function(str) {
  var answer = [];
  var totalSize = str.length;
  var nbSMS = Math.ceil(totalSize / 160);
  var charSupp = calc(nbSMS);
  if (Math.ceil((totalSize + charSupp) / 160) != nbSMS) {
    charSupp = calc(Math.ceil((totalSize + charSupp) / 160));
  }
  nbSMS = Math.ceil((totalSize + charSupp) / 160);
  var i = 0;
  var index = 0;
  while (++i <= nbSMS) {
    var strToAdd = " - part " + i + " of " + nbSMS;
    if (totalSize > 160 - strToAdd.length) {
      var stop = 160 - strToAdd.length;
      totalSize -= (160 - strToAdd.length);
    } else {
      var stop = totalSize;
    }
    var temp = "";
    var j = 0;
    while (j++ < stop) {
      temp += str[index];
      index++;
    }
    temp += strToAdd;
    answer.push(temp);
  }
  console.log(answer);
}

var test = "";
var i = 540;
while (i--) test += "a";

sendSMS(test);
