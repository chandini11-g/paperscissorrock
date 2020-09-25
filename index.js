let userchoice = window.prompt("select any one rock,paper or scissor ");

document.write("<p>user's choice is: " + userchoice + "</p>");
var computerchoice = Math.random();
let computchoice =
  computerchoice < 0.3 ? "paper" : computerchoice > 0.6 ? "rock" : "scissor";

document.write("<p> computer's choice is:" + computchoice + "</p>");

if (userchoice === computchoice) document.write("it's a tie");
else if (userchoice === "rock" && computchoice === "scissor") {
  document.write(" user wins!rock smashes scissor");
} else if (userchoice === "paper" && computchoice === "scissor") {
  document.write("computer wins! scissor cuts paper");
} else if (userchoice === "scissor" && computchoice === "paper") {
  document.write("user wins! scissor cuts paper");
} else if (userchoice === "scissor" && computchoice === "rock") {
  document.write(" computer wins!rock smashes scissor");
} else if (userchoice === "rock" && computchoice === "paper") {
  document.write(" computer wins!paper covers rock");
} else if (userchoice === "paper" && computchoice === "rock") {
  document.write(" user wins!paper covers rock");
} else if (
  userchoice !== "rock" &&
  userchoice !== "paper" &&
  userchoice !== "scissors"
) {
  document.write(
    "computer choice is :" +
      computchoice +
      " users choice is : " +
      userchoice +
      " Invalid choice! Choose from rock, paper, or scissors"
  );
}
