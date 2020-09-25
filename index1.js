// function myFunction() {
//   var x = document.createElement("IMG");
//   x.setAttribute("src", "1.jpg");
//   x.setAttribute("width", "304");
//   x.setAttribute("height", "228");
//   x.setAttribute("alt", "paper image");
//   document.body.appendChild(x);
// }
// function myFunction1() {
//   var x = document.createElement("IMG");
//   x.setAttribute("src", "2.jpg");
//   x.setAttribute("width", "304");
//   x.setAttribute("height", "228");
//   x.setAttribute("alt", "scissor image");
//   document.body.appendChild(x);
// }
// function myFunction2() {
//   var x = document.createElement("IMG");
//   x.setAttribute("src", "3.jpg");
//   x.setAttribute("width", "304");
//   x.setAttribute("height", "228");
//   x.setAttribute("alt", "rock image");
//   document.body.appendChild(x);
// }
let userchoice = window.prompt("select any one 1.paper,2.scissor or 3.rock ");
document.write("<h4>users choice is</h4>");
let userimage = '<img src="' + userchoice + '.jpg">';
if (
  userimage !== '<img src="' + 1 + '.jpg">' &&
  userimage !== '<img src="' + 2 + '.jpg">' &&
  userimage !== '<img src="' + 3 + '.jpg">'
) {
  document.write("inavalid enter only numbers 1,2,3");
} else {
  document.write(userimage);
  document.write("<h4>computer choice is</h4>");
  let computerimage =
    '<img src="' + Math.floor(1 + Math.random() * 3) + '.jpg">';
  document.write(computerimage);
  document.write("<p>results:</p>");
  if (userimage === computerimage) document.write("<p>it's tie.</p>");
  else if (
    userimage === '<img src="' + 3 + '.jpg">' &&
    computerimage === '<img src="' + 2 + '.jpg">'
  ) {
    document.write(" <p>user wins!rock smashes scissor</p>");
  } else if (
    userimage === '<img src="' + 1 + '.jpg">' &&
    computerimage === '<img src="' + 2 + '.jpg">'
  ) {
    document.write("<p>computer wins! scissor cuts paper</p>");
  } else if (
    userimage === '<img src="' + 2 + '.jpg">' &&
    computerimage === '<img src="' + 1 + '.jpg">'
  ) {
    document.write("<p>user wins! scissor cuts paper</p>");
  } else if (
    userimage === '<img src="' + 2 + '.jpg">' &&
    computerimage === '<img src="' + 3 + '.jpg">'
  ) {
    document.write(" <p>computer wins!rock smashes scissor</P>");
  } else if (
    userimage === '<img src="' + 3 + '.jpg">' &&
    computerimage === '<img src="' + 1 + '.jpg">'
  ) {
    document.write("<p> computer wins!paper covers rock</p>");
  } else if (
    userimage === '<img src="' + 1 + '.jpg">' &&
    computerimage === '<img src="' + 3 + '.jpg">'
  ) {
    document.write("<p> user wins!paper covers rock</p>");
  }
}
