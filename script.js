var main = function (input) {
  var myOutputValue = "";
  var innerSquareCount = 1;

  //loop for the outer square
  for (var counter = 0; counter < input; counter += 1) {
    //condition for first and last row
    if (innerSquareCount == 1 || innerSquareCount == input) {
      //loop for the first and last row
      for (var firstRowCount = 0; firstRowCount < input; firstRowCount += 1) {
        myOutputValue += "✊";
      }
    }
    //condition for not the outline rows
    if (innerSquareCount > 1 && innerSquareCount < input) {
      myOutputValue += "✊";
      //loop for adding the inner box
      for (var count = 0; count < input - 2; count += 1) {
        myOutputValue += "👍";
      }
      myOutputValue += "✊";
    }
    innerSquareCount += 1;
    myOutputValue += `<br>`;
  }

  return myOutputValue;
};
