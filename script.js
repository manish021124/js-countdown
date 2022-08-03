const currentDate = new Date();
let currentHours = currentDate.getHours();
let currentMinutes = currentDate.getMinutes();
let currentSeconds = currentDate.getSeconds();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();
let currentDay = currentDate.getDate();
let data = document.getElementById('data');

document.getElementById('button').addEventListener("click", getData);
// console.log(currentDate);
function getData(){
    let date = data.elements[0].value;
    let time = data.elements[1].value;
    let timer = date + time;
    

        let counter = timer - currentDate;
        console.log(counter);
}
// count();



// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); 
//     var m = date.getMinutes(); 
//     var s = date.getSeconds(); 
    
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
    
//     var time = h + " : " + m + " ";
//     var sec = ": " + s;
//     document.getElementById("MyClockDisplay").innerText = time;
//     document.getElementById("MyClockDisplay").textContent = time;
//     document.getElementById("MySecDisplay").innerText = sec;
//     document.getElementById("MySecDisplay").textContent = sec;
    
//     setTimeout(showTime, 1000);
    
// }


// showTime();



