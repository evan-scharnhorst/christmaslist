// var audio = new Audio("hollyjolly.m4a");
// audio.loop = true;

// var hoho = new Audio("hoho.mp3");

// var countDownDate = new Date("Dec 25 2023 12:00:00.001 AM").getTime();

// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     var splits = distance / 1000;

//     document.getElementById("seconds").innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s " + addLeadingZeros(getDecimalPart(splits), 3) + "ms";

//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "IT'S CHRISTMAS!!";
//         document.getElementById("demo").style.fontSize = "120px";
//         audio.play();
//     }
//     if (minutes == 0 && seconds == 0) {
//         hoho.play();
//         setTimeout(function() {
//             document.getElementsByClassName("kevin")[0].style.opacity = 1;
//             setTimeout(function() {
//                 document.getElementsByClassName("kevin")[0].style.opacity = 0;
//             }, 5000);
//         }, Math.floor(Math.random()*1000));
//     }
    
// }, 1);



// function getDecimalPart(num) {
//     if (Number.isInteger(num)) {
//         return 0;
//     }

//     const decimalStr = num.toString().split('.')[1];
//     return Number(decimalStr);
// }

// function addLeadingZeros(num, totalLength) {
//     return String(num).padStart(totalLength, '0');
// }