document.querySelectorAll('.exit').forEach(elem => elem.addEventListener('click', hide))

function hide(){
	document.querySelector('#howToPlay').style.display = 'none'
	document.querySelector('.gameSection').style.display = 'flex'
}

document.querySelector('.showHowToPlay').addEventListener('click', show)

function show(){
	document.querySelector('#howToPlay').style.display = 'flex'
	document.querySelector('.gameSection').style.display = 'none'
}

let footballers = {
	'Zlatan Ibrahimavic': {
	'firstName': 'Zlatan',
	'lastName': 'Ibrahimavic',
	'listOfPlayers': ['Lionel Messi', 'Thiago', 'Juan Mata', 'Rafael van der Vaart', 'Patrick Vieira', 'Gianluigi Buffon', 'Blaise Matuidi', 'Thiago Silva', 'Edinson Cavani', 'Paul Pogba']
}
}

/* footballers["Zlatan Ibrahimavic"].listOfPlayers.forEach(element => console.log(element))
console.log(footballers["Zlatan Ibrahimavic"].lastName) */

document.querySelector('#button').addEventListener('click', result)

function result(){
	let inputedAnswer = document.querySelector('input').value
	let ul = document.getElementById("list")
	let li = document.createElement("li")
	if (inputedAnswer.toLowerCase() === footballers["Zlatan Ibrahimavic"].lastName.toLowerCase()) {
		console.log('Correct')
	} else {
		li.appendChild(document.createTextNode(footballers["Zlatan Ibrahimavic"].listOfPlayers[+2]));
		li.setAttribute('id', 'four');
		ul.appendChild(li)
		console.log(li.id)
	}
}

document.querySelector('#one').innerText = footballers["Zlatan Ibrahimavic"].listOfPlayers[0]
document.querySelector('#two').innerText = footballers["Zlatan Ibrahimavic"].listOfPlayers[1]
document.querySelector('#three').innerText = footballers["Zlatan Ibrahimavic"].listOfPlayers[2]



