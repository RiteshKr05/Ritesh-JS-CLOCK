let time = document.getElementById('time');
let timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
});

let showTime = () =>{
    let date = new Date();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    

    // add zero if value is less than 10
    
    hr = hr<10 ? `0${hr}` : hr;
    mins = mins<10 ? `0${mins}` : mins;
    secs = secs<10 ? `0${secs}` : secs;
    

    time.innerHTML = `${hr} :  ${mins} : ${secs}` ;
    timeformat.innerHTML = hr>12 ? "PM" : "AM"
    // timeformat.innerHTML = hr>12 ? `0${hr}` : hr; 

}