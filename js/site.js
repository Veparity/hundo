


function getValues() {
  //let startValue = parseInt(document.getElementById("startValue").value);
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse the values in to intergers

  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  // && is and or needs both to be true

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    
    //generate the numbers based on user input

    let numbers = generateNumbers(startValue, endValue);

    //display results on page
    displayNumbers(numbers);

  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only intergers are allowed for Hundo",
    });
  }
}

function generateNumbers(startValue, endValue) {
    let numbers = [];

    for(let i = startValue; i <= endValue; i++){
        numbers.push(i);
    }
    return numbers;
}

function displayNumbers(numbers) {
    let className="even";
    let templateRows="";

    for(let i = 0; i < numbers.length; i++){
        let number = numbers[i];
        //if when i divide this number, and the remainder is 0 then it is even
        if(number % 2 == 0){
            className = "even";

        }else{
            className = "odd";

        }
        if (i % 10 == 0){
            templateRows += "<tr>";
        }

        templateRows += `<td class="${className}">${number}</td> `;

        if ((i+1)% 10 ==0){
            templateRows += "</tr>"
        }
    }
    document.getElementById("results").innerHTML = templateRows;
}
