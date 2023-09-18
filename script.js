// <============================ JavaScript DOM ===============================>

// 1. What is DOM(Document Object Model)?
// --> With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// 2. There are four Pillars of DOM(Document Object Model) --->

// A. Selection of an Element -------------------------------->
// var a = document.querySelector("h1");
// console.log(a);

// B. Changing HTML ------------------------------------------>
// document.querySelector("h1").innerHTML = "I am Learn to JavaScript DOM."

// var a = document.querySelector("h1");
// a.innerHTML = "Hey, How are You?";

// C. Changing CSS ------------------------------------------->
// var a = document.querySelector("h1");
// a.style.color = "red";
// a.style.backgroundColor = "#222";

// document.querySelector("h1").style.color = "red";
// document.querySelector("h1").style.backgroundColor = "#222";

// D. Event Listener ----------------------------------------->
// var a = document.querySelector("h1");

// a.addEventListener("click", function() {
//     console.log("hey");
// })

// var a = document.querySelector("h1");

// a.addEventListener("click", function() {
//     a.innerHTML = "Hello, Good Morning Rohit.";
//     a.style.color = "red";
//     a.style.backgroundColor = "#222";
// })

// <========================= project for addEventListener ===========================>
// <------- Simple example of bulb or whatever clicking on the same button ---------->
// var blub = document.querySelector("#blub");
// var btn = document.querySelector("button");
// var flag = 0;

// btn.addEventListener("click", function() {
//     if(flag == 0) {
//         blub.style.backgroundColor = "yellow";
//         btn.innerHTML = "OFF";
//         flag = 1;
//     }
//     else {
//         blub.style.backgroundColor = "transparent";
//         btn.innerHTML = "ON";
//         flag = 0;
//     }
// })
// <------------ selecting multiple elements at a same time --------------->
// var h = document.querySelectorAll("h1");
// console.log(h);

// var h = document.querySelectorAll("h1");
// console.log(h);

// h.forEach(function(e) {
//     console.log(e);
// })

// <----------- selecting Id element --------------->
// var h = document.getElementById("head");
// h.innerHTML = "I am here."

// document.getElementById("head");

// <------------- selecting class element ------------->
// document.getElementsByClassName("heading");

// <---------- selecting textContent for text data ------------->

// var h = document.querySelector("#box");
// h.innerHTML = "<h1>Hello</h1>";

// var h = document.querySelector("#box");
// h.textContent = "<h1>Hello</h1>";

// var h = document.querySelector("#box");
// h.textContent = "<h1>Hello</h1>";