const currentDate = Date.now();
let data = document.getElementById('data');

document.getElementById('button').addEventListener("click", getData);
console.log(currentDate);
function getData(){
    let inputDate = data.elements[0].value;
    let inputTime = data.elements[1].value;
    let totalInput = inputDate + " " + inputTime;
    let inputDateTime = new Date(totalInput);
    let inputMilli = inputDateTime.getTime();
    console.log(inputMilli);

    let countingTime = inputMilli - currentDate;
    let countingDays = Math.floor(countingTime / (24 * 60 * 60 * 1000));
    let countingHours = Math.floor(countingTime / (60 * 60 * 1000));
    console.log(countingDays);
    console.log(countingHours);

    // let d = time * 1000 * 60 * 60;

    // console.log(time);
    // console.log(d);
}



