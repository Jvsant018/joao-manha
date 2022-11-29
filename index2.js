function Calculo(){
	var altura=document.getElementById("altura").value/100
	var peso=document.getElementById("peso").value
	var resultado=document.getElementById("resultado").value
	console.log(altura)

	var resultado = peso / altura * 2  
	if(resultado<18.5){
		window.alert("Você está abaixo do peso!😮")
	}
	else if(resultado<24.9){
		window.alert("Você está no peso ideal, Parabens!!!✅✅✅")
	}
	else if(resultado<29.9){
		window.alert("Você está com sobrepeso, Procure se exercitar 😉")
	}
	else if(resultado > 30.0 || resultado <34.9){
		window.alert("Você está na Obesidade I, Procure auxilio de um nutricionista 😉")
	}
	else if(resultado > 35.0 || resultado< 39.9){
		window.alert("Você está na Obesidade II, Procure auxulio de um nutricionista e experimente se exercitar 😮")
	}
	else if(resultado > 40.0){
		window.alert("Você está na Obesidade III,Procure a ajuda de um medico 😷")
	}
	else{
		alert("MINHA VÓ TÁ MALUCA!!!!!")
	}
}