const data = document.getElementById('data');
// let temp = 1;

inputValue();

document.getElementById('button').addEventListener("click", start);
document.getElementById('button').addEventListener("click", startCount);

//value for date and time
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
}

function startCount(){
    const currentDate = Date.now();     //date in milliseconds
    let inputDate = data.elements[0].value;     //getting input from user
    let inputTime = data.elements[1].value;
    let totalInput = inputDate + " " + inputTime;       //to get same format to get difference
    let inputDateTime = new Date(totalInput);       
    let inputMilli = inputDateTime.getTime();       //input date and time in milliseconds
    let countingTime = inputMilli - currentDate;       //difference in milliseconds
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

    setTimeout(startCount, 1000);
}

function start(){
    document.getElementById('data').style.visibility = "hidden";
    document.getElementById('button').style.backgroundColor = "red";
    document.getElementById('button').innerHTML = "Stop";
    document.getElementById('button').addEventListener("click", stop);
}

function stop(){
    document.getElementById('data').style.visibility = "visible";
    document.getElementById('button').style.backgroundColor = "green";
    document.getElementById('button').innerHTML = "Start";
}

function displayCount(count, counting){
    if(counting < 10 && counting > -1){
        count.innerHTML = "0" + counting;
    }else{
        count.innerHTML = counting;
    }
}




