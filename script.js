const currentDate = Date.now();
let data = document.getElementById('data');

document.getElementById('button').addEventListener("click", getData);
console.log(currentDate);
function getData(){
    let date = data.elements[0].value;
    let time = data.elements[1].value;

    let a = Date.parse(date);

    let b = a - currentDate;
    let c = b / (24*60*60*1000);
    console.log(a);
    console.log(c);
}



