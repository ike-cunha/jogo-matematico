//Variáveis da seleção de operação
var operation_sign_input = 0;
var correct_result = 0;

//Variaveis da selecao de nível
var game_level_input, number1, number2, random_position, number_entered;
var number1_value = document.getElementById('number1-value');
var number2_value = document.getElementById('number2-value');
var result_value = document.getElementById('result-value');

//Variáveis do tempo da jogada
var move_time = 5;
var timer_trigger;

//Variáveis da verificação do resultado
var insert_value_position;

//Variáveis da pontuação
var positive_points = document.getElementById('positive-number');
var negative_points = document.getElementById('negative-number');
var balance_points = document.getElementById('total-number');
var acertos = 0;
var erros = 0;


//Variáveis Event Listener
var analyze = document.getElementsByClassName("analyze");

function game_level () {

	move_time = 5;
	
	switch (game_level_input) {
		case 0:
			number1 = Math.floor(Math.random()*10);
			number1_value.value = number1;
			number2 = Math.floor(Math.random()*10);
			number2_value.value = number2;
			result_value.placeholder = '';
			result_value.readOnly = false;
			insert_value_position = 0
			break;
		case 1:
			random_position = Math.floor(Math.random()*3);
			switch (random_position) {
				case 0:
					number1 = Math.floor(Math.random()*21);
					number1_value.value = number1;
					number2 = Math.floor(Math.random()*21);
					number2_value.value = number2;
					result_value.placeholder = '';
					result_value.readOnly = false;
					insert_value_position = 0
					alert("Número 1: "+number1 + "Número 2: "+number2 + "Resultado: " + correct_result);
					break;
				case 1:
					number1 = Math.floor(Math.random()*21);
					number1_value.value = number1;
					number2 = Math.floor(Math.random()*21);
					number2_value.placeholder = '';
					number2_value.readOnly = false;
					insert_value_position = 2;
					result_value.value = correct_result;
					alert("Número 1: "+number1 + "Número 2: "+number2 + "Resultado: " + correct_result);
					break;
				case 2:
					number1 = Math.floor(Math.random()*21);
					number1_value.placeholder = '';
					number1_value.readOnly = false;
					insert_value_position = 1;
					number2 = Math.floor(Math.random()*21);
					number2_value.value = number2;
					result_value.value = correct_result;
					alert("Número 1: "+number1 + "Número 2: "+number2 + "Resultado: " + correct_result);
					break;
				default:
					alert('Falha no sorteio dos números. Game level = ' + game_level_input + '. Random = ' + random_position);
					break;
			}
			break;
		case 2:
			var random_position = Math.floor(Math.random()*3);
			switch (random_position) {
				case 0:
					number1 = Math.floor(Math.random()*51);
					number1_value.value = number1;
					number2 = Math.floor(Math.random()*51);
					number2_value.value = number2;
					result_value.placeholder = '';
					result_value.readOnly = false;
					insert_value_position = 0;
					break;
				case 1:
					number1 = Math.floor(Math.random()*51);
					number1_value.value = number1;
					number2 = Math.floor(Math.random()*51);
					number2_value.placeholder = '';
					number2_value.readOnly = false;
					insert_value_position = 2
					result_value.value = correct_result;
					break;
				case 2:
					number1 = Math.floor(Math.random()*51);
					number1_value.placeholder = '';
					number1_value.readOnly = false;
					insert_value_position = 1
					number2 = Math.floor(Math.random()*51);
					number2_value.value = number2;
					result_value.value = correct_result;
					break;
				default:
					alert('Falha no sorteio dos números. Game level = ' + game_level_input + '. Random = ' + random_position);
					break;
				}
				break;
		default:
			alert('Falha (GERAL) no sorteio dos números. Game level = ' + game_level_input + '. Random = ' + random_position);;
			break;
	}
	operation_signal();
}

function operation_signal () {

	var challenge_sign = document.getElementById('challenge-sign');

	switch (operation_sign_input) {
		case 0:
			challenge_sign.innerHTML = '+';
			correct_result = number1 + number2;
			break;
		case 1:
			challenge_sign.innerHTML = '-';
			correct_result = number1 - number2;
			break;
		case 2:
			challenge_sign.innerHTML = 'x';
			correct_result = number1 * number2;
			break;
		case 3:
			var random_sign = Math.floor(Math.random()*3);
			switch (random_sign) {
				case 0:
					challenge_sign.innerHTML = '+';
					correct_result = number1 + number2;
					break;
				case 1:
					challenge_sign.innerHTML = '-';
					correct_result = number1 - number2;
					break;
				case 2:
					challenge_sign.innerHTML = 'x';
					correct_result = number1 * number2;
					break;
				default:
					alert('Falha ao randomizar os sinais')
					break;
			}
			break;
		default:
			alert('Falha no switch de operação')
			break;
	}
	timer_trigger = setInterval("move_timer_trigger()", 900)
}

function move_timer_trigger() {
	if (move_time == 0) {
		clearInterval(timer_trigger);
		setTimeout (points(2), 0);
	}else{
		move_time--
	}
}

function verification () {

	switch (insert_value_position) {
		case 0:
			number_entered = Number(result_value.value);
			if (number_entered == correct_result) {
				result_value.style.borderBottom = '0.7rem solid green';
				clearInterval(timer_trigger);
				setTimeout (points(1), 0);
			}else{
				result_value.style.borderBottom = '0.7rem solid red';
			}
			break;
		case 1:
			number_entered = Number(number1_value.value);
			if (number_entered == number1) {
				number1_value.style.borderBottom = '0.7rem solid green';
				clearInterval(timer_trigger);
				setTimeout (points(1), 0);
			}else{
				number1_value.style.borderBottom = '0.7rem solid red';
			}
			break;
		case 2:
			number_entered = Number(number2_value.value);
			if (number_entered == number2) {
				number2_value.style.borderBottom = '0.7rem solid green';
				clearInterval(timer_trigger);
				setTimeout (points(1), 0);
			}else{
				number2_value.style.borderBottom = '0.7rem solid red';
			}
			break;
		default:
			alert('Verificação incompleta. Posição = ' + insert_value_position);
			break;
	}
}

function points (status) {
	switch (status) {
		case 1:
			acertos++;
			positive_points.innerHTML = acertos;
			break;
		case 2:
			erros++;
			negative_points.innerHTML = erros;
			break;
		default:
			alert('Erro ao inserir pontuação.');
			break;
	}
	set_style_back();
}

function set_style_back () {
	result_value.readOnly = true;
	number1_value.readOnly = true;
	number2_value.readOnly = true;
	result_value.value = '';
	number1_value.value = '';
	number2_value.value = '';
	result_value.style.borderBottom = '0.7rem solid white';
	number1_value.style.borderBottom = '0.7rem solid white';
	number2_value.style.borderBottom = '0.7rem solid white';

	game_level()
}

for(var i=0;i<analyze.length;i++){
    analyze[i].addEventListener('keyup', verification);
}