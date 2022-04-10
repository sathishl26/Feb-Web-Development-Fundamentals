var button = document.querySelector('.button')
var inputvalue = document.querySelector('.inputvalue')
var name1 = document.querySelector('.name1')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')

button.addEventListener('click', function(){
    
fetch('https://api.openweathermap.org/data/2.5/weather? q = '+inputvalue.value +' &appid=501d895227f1a0cacb52daaa0aabf54c')
.then(Response => Response.json())
.then(data => {
    var namevalue   = data ['name'];
    var tempvalue = data ['main']['temp'];
    var descvalue = data ['weather'];

    name1.innerHTML = namevalue;
    temp.innerHTML = tempvalue;
    desc.innerHTML = descvalue;
    } )
.catch (err => alert ("Wrong city name!"))
})