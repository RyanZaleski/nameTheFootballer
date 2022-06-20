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

let ibrahimavic = ['Lionel Messi', 'Thiago', 'Juan Mata', 'Rafael van der Vaart', 'Patrick Vieira', 'Gianluigi Buffon', 'Blaise Matuidi', 'Thiago Silva', 'Edinson Cavani', 'Paul Pogba']

/**** LIST OF FIRST THREE PLAYERS ****/

document.querySelector('#one').innerText = ibrahimavic[0]
document.querySelector('#two').innerText = ibrahimavic[1]
document.querySelector('#three').innerText = ibrahimavic[2]

/* footballers["Zlatan Ibrahimavic"].listOfPlayers.forEach(element => console.log(element))
console.log(footballers["Zlatan Ibrahimavic"].lastName) */

/**** FUNCTION FOR GAME ****/

document.querySelector('#button').addEventListener('click', result)

let counter = 0

function result(){
	let inputedAnswer = document.querySelector('input').value
	let ul = document.getElementById("list")
	let li = document.createElement("li")
	
    if (inputedAnswer.toLowerCase() !== 'ibrahimavic' ){
		counter = counter + 1
	} else { 
		console.log('Correct')
	}


	console.log(counter)

	if (counter === 1) {
		li.appendChild(document.createTextNode(ibrahimavic[3]));
		li.setAttribute('id', 'four');
		ul.appendChild(li)
		console.log(li.id)
	} else if (counter === 2){
		li.appendChild(document.createTextNode(ibrahimavic[4]));
		li.setAttribute('id', 'five');
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 3){
		li.appendChild(document.createTextNode(ibrahimavic[5]));
		li.setAttribute('id', 'five');
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 4){
		li.appendChild(document.createTextNode(ibrahimavic[6]));
		li.setAttribute('id', 'five');
		ul.appendChild(li)
		console.log(li.id)

	}  else if (counter === 5){
		li.appendChild(document.createTextNode(ibrahimavic[7]));
		li.setAttribute('id', 'five');
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 6){
		li.appendChild(document.createTextNode(ibrahimavic[8]));
		li.setAttribute('id', 'five');
		ul.appendChild(li)
		console.log(li.id)

	} else if (counter === 7){
		li.appendChild(document.createTextNode(ibrahimavic[9]));
		li.setAttribute('id', 'five');
		ul.appendChild(li)
		console.log(li.id)

	}
}
	

	







