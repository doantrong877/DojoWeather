
//City weather loading alert
var cities = document.querySelectorAll(".city-list a");

// cities.forEach(city => {
//     city.addEventListener('click', function handleClick(event){
//         alert("Loading weather report of " + city.innerHTML);
//     })
// });

$(".city-list a").click(function(){
    alert("Loading weather report of " + this.innerHTML);
});

//Make Cookie disapear

var acceptBnt = document.querySelector("#accept-btn");

acceptBnt.addEventListener("click", function(){
    document.querySelector(".cookie").remove();
});

//change temperature

var tempOption = document.querySelector("#temp-select");

tempOption.addEventListener("change",function(){
    //change to fehranheit
    if(tempOption.value == "fehranheit"){
        var hi = document.querySelectorAll(".high h3");
        var lo = document.querySelectorAll(".low h3");
        hi.forEach(high => {
            high.innerHTML = Math.floor(Number(high.innerHTML) * 1.8 + 32)         
        });
        lo.forEach(low => {
            low.innerHTML = Math.floor(Number(low.innerHTML) * 1.8 + 32)         
        });   
    }
    //change to celsius
    if(tempOption.value == "celcius"){
        var hi = document.querySelectorAll(".high h3");
        var lo = document.querySelectorAll(".low h3");
        hi.forEach(high => {
            high.innerHTML = Math.ceil((Number(high.innerHTML) - 32) / 1.8)         
        });
        lo.forEach(low => {
            low.innerHTML = Math.ceil((Number(low.innerHTML) - 32) / 1.8)         
        });   
    }
});





