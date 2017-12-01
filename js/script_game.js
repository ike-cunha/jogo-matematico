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

//Variárias para checagem de nível
var locker = 0


//Variáveis Event Listener
var analyze = document.getElementsByClassName("analyze");

function game_level () {

	move_time = 5;
	
	switch (game_level_input) {
		case 0:
			number1 = Math.floor(Math.random()*10);
			number2 = Math.floor(Math.random()*10);
			break;
		case 1:
			number1 = Math.floor(Math.random()*21);
			number2 = Math.floor(Math.random()*21);
			break;
		case 2:
			number1 = Math.floor(Math.random()*51);
			number2 = Math.floor(Math.random()*51);
			break;
		default:
			alert('Falha no sorteio dos números. Game level = ' + game_level_input);
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
	organizing_the_game()
}

function organizing_the_game () {
	
	switch (game_level_input) {
		case 0:
			number1_value.value = number1;
			number2_value.value = number2;
			result_value.placeholder = '';
			result_value.readOnly = false;
			insert_value_position = 0
			break;
		case 1:
			random_position = Math.floor(Math.random()*3);
			switch (random_position) {
				case 0:
					number1_value.value = number1;
					number2_value.value = number2;
					result_value.placeholder = '';
					result_value.readOnly = false;
					insert_value_position = 0;
					break;
				case 1:
					number1_value.value = number1;
					number2_value.placeholder = '';
					number2_value.readOnly = false;
					insert_value_position = 2;
					result_value.value = correct_result;
					break;
				case 2:
					number1_value.placeholder = '';
					number1_value.readOnly = false;
					insert_value_position = 1;
					number2_value.value = number2;
					result_value.value = correct_result;
					break;
				default:
					alert('Falha na organização do jogo. Game level = ' + game_level_input + '. Random = ' + random_position);
					break;
			}
			break;
		case 2:
			var random_position = Math.floor(Math.random()*3);
			switch (random_position) {
				case 0:
					number1_value.value = number1;
					number2_value.value = number2;
					result_value.placeholder = '';
					result_value.readOnly = false;
					insert_value_position = 0;
					break;
				case 1:
					number1_value.value = number1;
					number2_value.placeholder = '';
					number2_value.readOnly = false;
					insert_value_position = 2;
					result_value.value = correct_result;
					break;
				case 2:
					number1_value.placeholder = '';
					number1_value.readOnly = false;
					insert_value_position = 1;
					number2_value.value = number2;
					result_value.value = correct_result;
					break;
				default:
					alert('Falha na organização do jogo. Game level = ' + game_level_input + '. Random = ' + random_position);
					break;
				}
				break;
		default:
			alert('Falha (GERAL) na organização do jogo. Game level = ' + game_level_input + '. Random = ' + random_position);;
			break;
	}
	timer_trigger = setInterval("move_timer_trigger()", 1000);
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
			balance_points.innerHTML = acertos - erros;
			level_checker();
			break;
		case 2:
			erros++;
			negative_points.innerHTML = erros;
			balance_points.innerHTML = acertos - erros;
			set_style_back();
			break;
		default:
			alert('Erro ao inserir pontuação.');
			break;
	}

	
}

function level_checker () {

	if (acertos % 3 == 0) {
		if (game_level_input >= 0 && game_level_input < 2) {
			game_level_input++;
			document.getElementsByClassName('multifunctional-div')[0].style.display = 'block';
			document.getElementById('multi-text').innerHTML = 'Nível';
			document.getElementById('multi-text-bg').innerHTML = (game_level_input +1);
			setTimeout ("set_style_back()", 1500);
		}else if (game_level_input == 2) {

			document.getElementsByClassName('challenge-header')[0].style.visibility = 'hidden'
			document.getElementsByClassName('challenge-main-operation')[0].style.visibility = 'hidden';
			document.getElementsByClassName('challenge-score')[0].style.visibility = 'hidden';
			document.getElementsByClassName('challenge-timer')[0].style.visibility = 'hidden';


			var element_class = document.getElementsByClassName('multifunctional-div')[0]
			element_class.style.width = '42%';
			element_class.style.height = '60%';
			element_class.style.top = '2rem';
			element_class.style.left = '26rem';
			element_class.style.display = 'block';

			for(var i=0;i<analyze.length;i++){
				analyze[i].removeEventListener('keyup', verification);
			}

			document.getElementById('multi-text-bg').innerHTML = '=)';
			document.getElementById('multi-text').innerHTML = 'Uhull, você <br> GANHOU!!';
		}
	}else{
		set_style_back();
	}
}

function set_style_back () {

	if (document.getElementsByClassName('multifunctional-div')[0].style.display == 'block') {
		document.getElementsByClassName('multifunctional-div')[0].style.display = 'none';
	}

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