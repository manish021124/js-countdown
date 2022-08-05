const currentDate = Date.now();
let data = document.getElementById('data');

document.getElementById('button').addEventListener("click", start);
console.log(currentDate);

function start(){
    getData();
    dataToMilli();
    calculateCount();
}

function getData(){
    let inputDate = data.elements[0].value;
    let inputTime = data.elements[1].value;
}

function dataToMilli(){
    let totalInput = inputDate + " " + inputTime;
    let inputDateTime = new Date(totalInput);
    let inputMilli = inputDateTime.getTime();
    console.log(inputMilli);
}

function calculateCount(){
    let countingTime = inputMilli - currentDate;
    let countingDays = Math.floor(countingTime / (24 * 60 * 60 * 1000));
    let countingHours = Math.floor((countingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let countingMinutes = Math.floor((countingTime % (60 * 60 * 1000)) / (60 * 1000));
    let countingSeconds = Math.floor((countingTime % (60 * 1000)) / (1000));
    console.log(countingTime);
    console.log(countingDays);
    console.log(countingHours);
    console.log(countingMinutes);
    console.log(countingSeconds);

}



