var choice = prompt("Rock, Paper or Scissors?");

var computer = Math.random();
  if (computer < 0.34)
    {
      computer = "Rock";
    }
  else if (computer <= 0.67)
    {
      computer = "Scissors";
    }
  else
    {
      computer ="Rock";
    }
console.log(computer)
console.log(choice)

  if (choice === "Rock" && computer === "Paper")
    {
      alert("Computer chose Paper. You won.");
    }
  else if (choice === "Rock" && computer === "Scissors")
    {
      alert("Computer chose Scissors. Computer wins.");
    }
  else if (choice === "Rock" && computer === "Rock")
    {
      alert("Computer chose Rock. It's a draw.");
    }
  else if (choice === "Scissors" && computer === "Rock")
    {
      alert("Computer chose Rock. Computer wins.");
    }
  else if (choice === "Scissors" && computer === "Scissors")
    {
      alert("Computer chose Scissors. It's a Draw");
    }
  else if (choice === "Scissors" && computer === "Paper")
    {
      alert("Computer chose Rock. You won");
    }
  else if (choice === "Paper" && computer === "Rock")
    {
      alert("Computer chose Rock. You won");
    }
  else if (choice === "Paper" && computer === "Scissors")
    {
      alert("Computer chose Scissors. Computer wins.");
    }
  else if (choice === "Paper" && computer === "Paper")
    {
      alert("Computer chose Paper. Computer wins.");
    }
  else
    {
      alert("Error. Refresh Page and try again.");
    }
