if(localStorage.getItem('money') === null){
	localStorage.setItem('money', '0');
}
if(localStorage.getItem('coffeeAmount') === null){
	localStorage.setItem('coffeeAmount', '0');
}
if(localStorage.getItem('teaAmount') === null){
	localStorage.setItem('teaAmount', '0');
}
let sailedCoffee = document.querySelector('#amountOfSailedCoffee');
let sailedTea = document.querySelector('#amountOfSailedTea');
let buttonTea = document.querySelector('#tea');
let buttonCoffee = document.querySelector('#coffee');
let money = document.querySelector('#money');
sailedCoffee.value = +localStorage.getItem('coffeeAmount');
sailedTea.value = +localStorage.getItem('teaAmount');
money.value = +localStorage.getItem('money');
buttonCoffee.addEventListener('click', function(){
	sailedCoffee.value++;
	localStorage.setItem('coffeeAmount', sailedCoffee.value);
	money.value = +money.value + 100;
	localStorage.setItem('coffeeAmount', money.value);
})
buttonTea.addEventListener('click', function(){
	sailedTea.value++;
	localStorage.setItem('teaAmount', sailedTea.value);
	money.value = +money.value + 200;
	localStorage.setItem('money', money.value);
})

