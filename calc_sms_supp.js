var calc = function(nbSMS) {
  var i = 0;
  charSupp = "";
  while (++i <= nbSMS) {
    charSupp += " - part " + i + " of " + nbSMS;
  }
  return charSupp.length;
}

var main = function(str) {
  console.log("\n--------\n")
  var answer = [];
  var totalSize = str.length;
  var nbSMS = Math.ceil(totalSize / 160);
  console.log("nbSMS :", nbSMS);
  var charSupp = calc(nbSMS);
  console.log("charSupp :", charSupp)
  if (Math.ceil((totalSize + charSupp) / 160) != nbSMS) {
    charSupp = calc(Math.ceil((totalSize + charSupp) / 160));
  }
  console.log("charSupp2 :", charSupp)
  nbSMS = Math.ceil((totalSize + charSupp) / 160);
  console.log("nbSMS2 :", nbSMS)
  console.log("\n--------\n")
  var i = 0;
  var index = 0;
  while (++i <= nbSMS) {
    console.log("i :", i)
    var strToAdd = " - part " + i + " of " + nbSMS;
    console.log("totalSize :", totalSize)
    if (totalSize > 160 - strToAdd.length) {
      var stop = 160 - strToAdd.length;
      totalSize -= (160 - strToAdd.length);
    } else {
      var stop = totalSize;
    }
    console.log("stop :", stop)
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
  console.log("\n--------\n")
}

var test = "";
var i = 300;
while (i--) test += "a";

main(test);