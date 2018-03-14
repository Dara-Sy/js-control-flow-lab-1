// put code here!


// function myFunction() {
//     var person = prompt("Please enter your name", "Harry Potter");
//     if (person != null) {
//         document.getElementById("demo").innerHTML =
//         "Hello " + person + "! How are you today?";
//     }
// }


let question1 = prompt("Are you hungry?");
console.log(question1);

let question2 = prompt("Did you eat pizza this week?");
console.log(question2);

let question3 = prompt("How many slices of pizza did you eat?");
console.log(question3);

let question4 = prompt("What food are you craving?");
console.log(question4);

let lastAnswer = prompt("Cool! Let's go!");
console.log(lastAnswer);

switch(question2) {
  case "yes":
    // console.log("How many slices of pizza did you eat?");
    prompt(question3);
    break;
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    prompt(question4);
    break;
  case "no":
    prompt(question4);
    break;
  default:
    prompt(lastAnswer);
    break;

  }

  window.location.reload(true);

  // else if (yN === false) {
  //   window.location.reload(true); // I got help from mozilla
  // }

// switch("What food are you craving?") {
//     case "chinese":
//     case "korean":
//     case "japanese":
//     case "french":
//     case "italian":
//     case "german":
//     case "ice cream":
//     case "dessert":
//     prompt("Cool! Let's go!")
//     break;
// }
