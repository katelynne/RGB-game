let numSquares = 6;
let colors = [];
let pickedColor;
let squares_div = document.querySelectorAll(".square");
let colorDisplay_span = document.getElementById("colorDisplay");
let messageDisplay_span = document.querySelector("#message");
let h1_tag = document.querySelector("h1");
let reset_button = document.querySelector("#reset");
let mode_buttons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}



function setupModeButtons(){
	//mode button event listeners
	for (let i = 0; i < mode_buttons.length; i++) {
		mode_buttons[i].addEventListener("click", function(){
			mode_buttons[0].classList.remove("selected");
			mode_buttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}



function setupSquares(){
		for (let i = 0; i < squares_div.length; i++) {
		//adding click listeners to squares
		squares_div[i].addEventListener("click", function(){
			//grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			// compare color to picked color
			if(clickedColor === pickedColor) {
				messageDisplay_span.textContent = "Correct";
				reset_button.textContent = "Play Again!";
				changeColors(clickedColor);
				h1_tag.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay_span.textContent = "Try Again"
			}
		});
	}
}



function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay_span.textContent = pickedColor;
	reset_button.textContent = "New Colors";
	messageDisplay_span.textContent = " ";
	//change colors of the squares
	for(let i = 0; i <squares_div.length; i++) {
		if (colors[i]) {
			squares_div[i].style.display = "block";
			squares_div[i].style.backgroundColor = colors[i];
		} else {
			squares_div[i].style.display = "none";
		}
	}
	h1_tag.style.backgroundColor = "steelblue";
}



reset_button.addEventListener("click", function(){
	reset();
});



function changeColors(color) {
	//loop through all squares
	for (let i = 0; i < squares_div.length; i++ ) {
		squares_div[i].style.backgroundColor = color;
	}
}



function pickColor() {
	let random = Math.floor(Math.random() * colors.length); 
	return colors[random];
}



function generateRandomColors(num) {
	//make array 
	let arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		// get random color and push into array
		arr.push(randomColor())
	}
	//return that array
	return arr;
}



function randomColor() {
	//pick a red from 0 - 255
	let r = Math.floor(Math.random() * 256);
	// pick a green from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}












