var main = function (input) {
  var myOutputValue = "";
  var innerCount = 1;

  for (var counter = 0; counter < input; counter += 1) {
    for (var count = 0; count < innerCount; count += 1) {
      myOutputValue += "👍";
    }
    innerCount += 1;
    myOutputValue += `<br>`;
  }

  return myOutputValue;
};
