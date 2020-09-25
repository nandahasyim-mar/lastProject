function check() {
  let ques1 = document.page1.question1.value;
  let ques2 = document.page1.question2.value;
  counter = 0

  if (ques1 == "Abraham Lincoln") {
    counter++
  }
  if (ques2 == "Amerika Serikat") {
    counter++
  }


  if (counter == 2) {
    document.getElementById('corNum').innerHTML = `You got ${counter} correct. Good job.` 
  } else if (counter < 2) {
    document.getElementById('corNum').innerHTML = `You failed.  Try again.` 
    document.getElementById('grey').style.filter = "grayscale(100%)";
    document.getElementById('grey1').style.filter = "grayscale(100%)";

  }

}