import toLetters from './ToLetters';

const App = {
	init: init
}

function init(){
	new toLetters({selector: '#app'});
}

App.init();
