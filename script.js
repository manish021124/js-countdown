const currentDate = new Date();
let data = document.getElementById('data');

document.getElementById('button').addEventListener("click", getData);
console.log(currentDate);
function getData(){
    let date = data.elements[0].value;
    let time = data.elements[1].value;
}



