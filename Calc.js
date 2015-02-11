var acumulativo = "";
var haveFirst = false;

function one(){
	var display = document.getElementById("display");
	display.innerHTML += 1;
}

function zero(){
	var display = document.getElementById("display");
	display.innerHTML += 0;
}

function plus(){
	var display = document.getElementById("display");
	var number = display.innerHTML;
	if(number == ""){
		alert("No has introducido ningun numero");
	}else if(haveFirst){
		alert("Ya has introducido dos numeros, dale a = para ver el resultado");
	}else{
		acumulativo = parseInt(number,2);
		display.innerHTML = "";
		haveFirst = true;
	}
	
}

function equals(){
	var display = document.getElementById("display");
	var result = document.getElementById("result");
	var number = display.innerHTML;
	if(number == ""){
		alert("No has introducido ningun numero")
	}else{
		var sumando = parseInt(number,2);
		var suma = sumando+acumulativo
		result.innerHTML = "Decimal: " + suma +" Binario: " + suma.toString(2) ;
		acumulativo = "";
	}
	
}

function restart(){
	acumulativo = "";
	var display = document.getElementById("display");
	var result = document.getElementById("result");
	result.innerHTML = "";
	display.innerHTML = "";
}