var main = function (input) {
  var myOutputValue = "";

  for (var counter = 0; counter < input; counter += 1) {
    for (var count = 0; count < input; count += 1) {
      myOutputValue += "👍";
    }
    myOutputValue += `<br>`;
  }

  return myOutputValue;
};
