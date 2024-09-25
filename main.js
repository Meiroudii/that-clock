const second_hand = document.querySelector('.second-hand');
const minute_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');

/*
function log() {
	let i = 0;
	const container = document.querySelector("#container");
	const content = document.createElement("div");
	content.classList.add("content");
	content.textContent = `The time has passes by ${i}`;
	container.appendChild(content);
	i++;
}
setInterval(log, 1000);
*/
function digital_clock() {
	const now = new Date();
	const time_now = now.getHours();
	return time_now;
}


function set_date() {
	const now = new Date();

	const seconds = now.getSeconds();
	const seconds_degrees = ((seconds / 60) * 360) + 90;
	second_hand.style.transform = `rotate(${seconds_degrees}deg)`;

	const minutes = now.getMinutes();
	const minutes_degrees = ((minutes / 60) * 360) + 90;
	minute_hand.style.transform = `rotate(${minutes_degrees}deg)`;

	const hours = now.getHours();
	const hours_degrees = ((hours / 12) * 360) + 90;
	hour_hand.style.transform = `rotate(${hours_degrees}deg)`;

	console.log(seconds_degrees);
	if (seconds_degrees === 444) {
		second_hand.style.removeProperty("transition");
		second_hand.style.removeProperty("transform");
	}
}

setInterval(set_date, 1000);
set_date();
