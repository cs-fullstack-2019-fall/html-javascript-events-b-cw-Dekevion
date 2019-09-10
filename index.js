
let log = document.getElementById('texField');

let blankLabel = document.getElementById('abc');
console.log(blankLabel);

let defaultString = "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness.";

// for(i = 0; i < defaultString.length; i++){
//   console.log(defaultString[i])
// }
otherVar = 0;
counter = 0;
log.onkeydown = function(texField){
    blankLabel.innerText = (texField.target.value);
    blankLabel.innerText = defaultString[counter++];
    otherVar += defaultString[counter++];
    console.log(otherVar);


    // blankLabel.innerText = (texField.target.value)
  };

  // blankLabel.innerText = (texField.target.value);



