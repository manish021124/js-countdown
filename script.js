const data = document.getElementById('data');

inputValue();
document.getElementById('button').addEventListener("click", start);

function inputValue(){
    const valueDate = new Date();
    const yearValue = valueDate.getFullYear();
    let monthValue = ((valueDate.getMonth() + 1) < 10) ? "0" + ((valueDate.getMonth() + 1)) : (valueDate.getMonth() + 1);
    let dayValue = (valueDate.getDate() < 10) ? "0" + valueDate.getDate() : valueDate.getDate(); 
    const dateValue = yearValue + "-" + monthValue + "-" + dayValue;
    let hourValue = (valueDate.getHours() < 10) ? "0" + valueDate.getHours() : valueDate.getHours();
    let minuteValue = (valueDate.getMinutes() < 10) ? "0" + valueDate.getMinutes() : valueDate.getMinutes();
    const timeValue = hourValue + ":" + minuteValue;

    document.getElementById('date').value = dateValue;
    document.getElementById('date').min = dateValue;
    document.getElementById('time').value = timeValue;

    setTimeout(inputValue, 1000);
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



