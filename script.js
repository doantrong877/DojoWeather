
//City weather loading alert
var cities = document.querySelectorAll(".city-list a");

cities.forEach(city => {
    city.addEventListener('click', function handleClick(event){
        alert("Loading weather report of " + city.innerHTML);
    })
})


