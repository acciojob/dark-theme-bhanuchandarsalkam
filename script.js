//your code here
function swapTheme(){
	const element=document.getElementById("app");
	element.style.color="black";
	element.className =element.className == "night"? "day": "night";
	const btn = document.getElementById("swap");
	btn.className = btn.className == "button_night"? "button_day": "button_night"
	
}
