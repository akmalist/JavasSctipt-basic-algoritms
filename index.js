// Check the results of your assignGrade function
// from the conditionals exercise by logging every value from 60 to 100: your log should show 
// "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc.,
//   logging each grade point in the range. 
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}


// Write a for loop that will iterate from 0 to 20. For each iteration,
//     it will check if the current number is even or odd, 
//     and report that to the screen (e.g. "2 is even").

for (let i=0; i<=20; i++){
  if (i%2===0){
    console.log(i+' is even')
  } else {
    console.log(i+ ' is odd')
  }
};



