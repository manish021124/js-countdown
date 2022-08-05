const data = document.getElementById('data');

dateValue();
document.getElementById('button').addEventListener("click", start);

function dateValue(){
    const valueDate = new Date();
    const yearValue = valueDate.getFullYear();
    let monthValue = ((valueDate.getMonth() + 1) < 10) ? "0" + ((valueDate.getMonth() + 1)) : (valueDate.getMonth() + 1);
    let dayValue = (valueDate.getDate()) < 10 ? "0" + (valueDate.getDate()) : valueDate.getDate(); 
    const fullDateValue = yearValue + "-" + monthValue + "-" + dayValue;

    document.getElementById('date').value = fullDateValue;
    document.getElementById('date').min = fullDateValue;

}

function start(){
    const currentDate = Date.now();
    let inputDate = data.elements[0].value;
    let inputTime = data.elements[1].value;
    let totalInput = inputDate + " " + inputTime;
    let inputDateTime = new Date(totalInput);
    let inputMilli = inputDateTime.getTime();
    let countingTime = inputMilli - currentDate;
    let countingDays = Math.floor(countingTime / (24 * 60 * 60 * 1000));
    let countingHours = Math.floor((countingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let countingMinutes = Math.floor((countingTime % (60 * 60 * 1000)) / (60 * 1000));
    let countingSeconds = Math.floor((countingTime % (60 * 1000)) / (1000));
    const dayCount = document.getElementById('daycount');
    const hourCount = document.getElementById('hourcount');
    const minCount = document.getElementById('mincount');
    const secCount = document.getElementById('seccount');

    displayCount(dayCount, countingDays);
    displayCount(hourCount, countingHours);
    displayCount(minCount, countingMinutes);
    displayCount(secCount, countingSeconds);

    setTimeout(start, 1000);
}

function displayCount(count, counting){
    if(counting < 10){
        count.innerHTML = "0" + counting;
    }else{
        count.innerHTML = counting;
    }
}



