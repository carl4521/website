/* 
const element1 = document.getElementById("txt1");

setTimeout(() => {
    element1.style.display = "block";
}, 1000); 


const element2 = document.getElementById("txt2");


setTimeout(() => {
    element2.style.display = "block";
}, 1400);

const element3 = document.getElementById("txt3");


setTimeout(() => {
    element3.style.display = "block";
}, 1800);

const element4 = document.getElementById("txt4");


setTimeout(() => {
    element4.style.display = "block";
}, 1000);
const element5 = document.getElementById("txt5");


setTimeout(() => {
    element5.style.display = "block";
}, 1000);

const element6 = document.getElementById("txt6");


setTimeout(() => {
    element6.style.display = "block";
}, 1000);

const element7 = document.getElementById("txt7");


setTimeout(() => {
    element7.style.display = "block";
}, 1000);
const element8 = document.getElementById("txt8");


setTimeout(() => {
    element8.style.display = "block";
}, 1000);

const element9 = document.getElementById("txt9");


setTimeout(() => {
    element9.style.display = "block";
}, 1000);

const element10 = document.getElementById("txt10");


setTimeout(() => {
    element10.style.display = "block";
}, 1000);

const element11 = document.getElementById("txt11");


setTimeout(() => {
    element11.style.display = "block";
}, 1000);

const element12 = document.getElementById("txt12");


setTimeout(() => {
    element12.style.display = "block";
}, 1000);
const element13 = document.getElementById("txt13");


setTimeout(() => {
    element13.style.display = "block";
}, 1000);

 */

for (let i = 1; i <= 13; i++) {
    const element = document.getElementById("txt" + i);

    setTimeout(() => {
        element.style.display = "block";
    }, 500 + (500 * i)); 
}