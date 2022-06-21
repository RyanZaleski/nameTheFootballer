

/**** FUNCTIONS TO OPEN AND CLOSE HOW TO PLAY SECTION ****/

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

/**** LIST OF FOOTBALLERS ****/

let ibrahimavic = {
	    fullName: 'Zlatan Ibrahimavic',
		lastName: 'Ibrahimavic',
		listOfPlayers: ['Lionel Messi', 'Thiago', 'Juan Mata', 'Rafael van der Vaart', 'Patrick Vieira', 'Gianluigi Buffon', 'Blaise Matuidi', 'Thiago Silva', 'Edinson Cavani', 'Paul Pogba'],
	}

let ferdinand = {
	fullName: 'Rio Ferdinand',
	lastName: 'Ferdinand',
	listofPlayers: ['Frank Lampard', 'Paolo Di Canio', 'Stuart Pearce', 'Mark Viduka', 'Harry Kewell', 'Robbie Fowler', 'Danny Welbeck', 'Fabien Barthez', 'David Beckham', 'Roy Keane']
}

let fabregas = {
	fullName: 'Cesc Fabregas',
	lastName: 'Fabregas',
	listOfPlayers: ['Thibaut Courtois', 'Eden Hazard', 'John Obi Mikel', 'Neymar', 'Alex Song', 'Robin van Persie', 'Kurt Zouma', 'John Terry', 'Messi', 'Nicklas Bendtner']
}

let milner = {
	fullName: 'James Milner',
	lastName: 'Milner',
	listOfPlayers: ['Christian Benteke', 'Danny Ings', 'Kolo Toure', 'Emre Can', 'Frank Lampard', 'Samir Nasri', 'Bacary Sagna', 'Gary Cahill', 'Milan Baros', 'Kazenga LuaLua']
}

let lampard = {
	fullName: 'Frank Lampard',
	lastName: 'Lampard',
	listOfPlayers: ['Sergio Aguero', 'Bacary Sagna', ' Samir Nasri', 'Gael Clichy', 'Mohamed Salah', 'Fernando Torres', 'Demba Ba', "Samuel Eto'o", 'Juan Mata', 'Florent Malouda']
}

let lukaku = {
	fullName: 'Romelu Lukaku',
	lastName: 'Lukaku',
	listOfPlayers: ['Fernando Torres', 'David Luiz', 'Ramires', 'Michael Essien', 'Ben Foster', 'Ross Barkley', 'Gareth Barry', 'Kevin De Bruyno', 'Eden Hazard', 'Mason Mount']
}

let lewandowski = {
	fullName: 'Robert Lewandowski',
	lastName: 'Lewandowski',
	listOfPlayers: ['Shinji Kagawa', 'Ilkay Gundogan', 'Ivan Perisic', 'Pierre-Emerick Aubameyang', 'Pepe Reina', 'Douglas Costa', 'James Rodriguez', 'Arturo Vidal', 'Arjen Robben', 'Manuel Neuer']
}

let rodriguez = {
	fullName: 'James Rodriguez',
	lastName: 'Rodriguez',
	listOfPlayers: ['Lucas Digne', 'Dimitar Berbatov', 'Gareth Bale', 'Anthony Martial', 'Eden Hazard', 'Javier Hernandez', 'Christiano Ronaldo', 'Thibaut Courtois', 'Ramadel Falcao', 'Jordan Pickford']
}

let footballers = [ibrahimavic, ferdinand, fabregas, milner, lampard, lukaku, lewandowski, rodriguez]

console.log(footballers)






/**** LIST OF FIRST THREE PLAYERS ****/

document.querySelector('#one').innerText = ibrahimavic.listOfPlayers[0]
document.querySelector('#two').innerText = ibrahimavic.listOfPlayers[1]
document.querySelector('#three').innerText = ibrahimavic.listOfPlayers[2]

/* footballers["Zlatan Ibrahimavic"].listOfPlayers.forEach(element => console.log(element))
console.log(footballers["Zlatan Ibrahimavic"].lastName) */

/**** FUNCTION FOR GAME ****/

document.querySelector('#button').addEventListener('click', result)

let counter = 0

console.log(footballers[0].lastName.toLowerCase())
console.log(footballers[0].fullName.toLowerCase())

function result(){
	let inputedAnswer = document.querySelector('input').value
	let ul = document.getElementById("list")
	let li = document.createElement("li")
	
    if ((inputedAnswer.toLowerCase() !== footballers[0].fullName.toLowerCase()) && (inputedAnswer.toLowerCase() !== footballers[0].lastName.toLowerCase())){
		counter = counter + 1
		document.getElementById('result').value = "";

	 } else {
		document.querySelector('.winner').style.display = 'flex'
		document.querySelector('.gameSection').style.display = 'none'
		document.querySelector('.correctScore').innerHTML = `You guessed todays footballer in ${counter + 1} attempts`
	}

 	if (counter === 1) {
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[3]));
		li.setAttribute('id', 'four');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)
	} else if (counter === 2){
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[4]));
		li.setAttribute('id', 'five');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 3){
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[5]));
		li.setAttribute('id', 'six');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 4){
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[6]));
		li.setAttribute('id', 'seven');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)

	}  else if (counter === 5){
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[7]));
		li.setAttribute('id', 'eight');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 6){
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[8]));
		li.setAttribute('id', 'nine');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 7){
		li.appendChild(document.createTextNode(ibrahimavic.listOfPlayers[9]));
		li.setAttribute('id', 'ten');
		li.setAttribute('class', 'animate__animated animate__backInLeft')
		ul.appendChild(li)
		console.log(li.id)
	} else if (counter > 7) {
		alert('Fail')
	}
}
	

	







