var player_name = document.getElementById('form-name').value;

//Variáveis do contador inicial
var time_left = 5;
var time_show = document.getElementById('countdown-value');
var timer = 0;

//TELA: WELCOME -  Validação idade e transição da tela de Welcome para a de seleção de sinais.
function welcome_forward (age, age_text, button, hide, show, name_from, name_to) {
	var age = document.getElementById(age);

	if (age.value < 6 || age.value > 100 || age.value == '') {
		age.style.border = 'thick solid red';
		age.placeholder = 'Digite uma idade válida';
		document.getElementById(age_text).style.color = 'red';
	}else{
		document.getElementsByClassName(hide)[0].style.display = 'none';
		document.getElementsByClassName(show)[0].style.display = 'block';
		document.getElementById(name_to).innerHTML = document.getElementById(name_from).value;
	}
}

//TELA: CHOOSE OPERATION - Transição da tela de seleção de sinais para a de seleção de níveis.
function signals_forward (sign, hide, show) {
	operation_sign_input = sign;
	document.getElementsByClassName(hide)[0].style.display = 'none';
	document.getElementsByClassName(show)[0].style.display = 'block';
}


//TELA: LEVEL-BG - Controle hover menu.
function menu_hover_on (div) {
	document.getElementById(div).style.visibility = "visible";
}

function menu_hover_off (div) {
	document.getElementById(div).style.visibility = "hidden";
}

//TELA: LEVEL-BG - Transição da tela de seleção de nível para o jogo em si.
function level_forward (level, hide, show) {
	game_level_input = level;
	document.getElementsByClassName(hide)[0].style.display = 'none';
	document.getElementsByClassName(show)[0].style.display = 'block';
	document.getElementsByClassName('challenge-countdown')[0].style.display = 'block';
	timer = setInterval("start_countdown()", 900)
}

function start_countdown () {
	if (time_left == 0) {
		clearInterval(timer);
		document.getElementsByClassName('challenge-countdown')[0].style.display = 'none'
		setTimeout (game_level(), 0);
	}else{
		time_show.innerHTML = time_left;
		time_left--
	}
}