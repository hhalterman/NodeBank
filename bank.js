var fs = require("fs");

fs.readFile("bank.txt", "utf8", function(error, data) {

  // console.log(data);
  var dataArr = data.split(", ");
  console.log(dataArr);
  var total = 0.0;
  
  if (error) {
    console.log(error);
  }
  else if (process.argv[2] === "total"){

    for (var i=0; i<dataArr.length; i++) {
      total = total + parseFloat(dataArr[i]);
    }
    console.log(total);
  }
  else if (process.argv[2] === "deposit"){
    for (var i=0; i<dataArr.length; i++) {
      total = total + parseFloat(dataArr[i]);
    }
    total = total + parseFloat(process.argv [3]);
    console.log(total);
    fs.appendFile("bank.txt", ", " + process.argv[3], (err) => {
      if (err) throw err;
      console.log("$" + process.argv[3] + " was deposited to the account");
    });
  }
  else if (process.argv[2] === "withdraw"){
    for (var i=0; i<dataArr.length; i++) {
      total = total + parseFloat(dataArr[i]);
    }
    total = total - parseFloat(process.argv[3]);
    console.log(total);
    fs.appendFile("bank.txt", ", -" + process.argv[3], (err) => {
      if (err) throw err;
      console.log("$" + process.argv[3] + " was widthrawn from the account");
    });
  }
  else if (process.argv[2] === "lotto"){
    var lottoCost = .25;
    for (var i=0; i<dataArr.length; i++) {
      total = total + parseFloat(dataArr[i]);
    }
    fs.appendFile("bank.txt", ", -.25",  (err) => {
      if (err) throw err;
    });
    total  = total - lottoCost;
    console.log(total);
    var win = Math.floor(Math.random()*100) + 1;
    var userChoice = parseFloat(process.argv[3]);
    if (userChoice === win) {
      console.log("You win!!")
      total = total + 2;
      console.log(total);
    }
    else {
      console.log("Sorry, you lose! Play again soon!")
    }
  }




});