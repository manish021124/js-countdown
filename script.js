const currentDate = Date.now();
const data = document.getElementById('data');

document.getElementById('button').addEventListener("click", start);

function start(){
    getData();
}

function getData(){
    let inputDate = data.elements[0].value;
    let inputTime = data.elements[1].value;

    dataToMilli(inputDate, inputTime);
}

function dataToMilli(date, time){
    let totalInput = date + " " + time;
    let inputDateTime = new Date(totalInput);
    let inputMilli = inputDateTime.getTime();

    calculateCount(inputMilli);
}

function calculateCount(milli){
    let countingTime = milli - currentDate;
    let countingDays = Math.floor(countingTime / (24 * 60 * 60 * 1000));
    let countingHours = Math.floor((countingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let countingMinutes = Math.floor((countingTime % (60 * 60 * 1000)) / (60 * 1000));
    let countingSeconds = Math.floor((countingTime % (60 * 1000)) / (1000));

    console.log(countingDays);
    console.log(countingHours);
    console.log(countingMinutes);
    console.log(countingSeconds);

}



