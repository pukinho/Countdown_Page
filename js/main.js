
const timer = document.querySelector('.timer');

// Set time
const timerValue = new Date('Jan 1, 2019 00:00:00').getTime();

// Update the count every second
const interval = setInterval(() => {
	// Get time and date in ms
	const currentTime = new Date().getTime();
	// Time difference between current time and set time value
	const timeDifference = timerValue - currentTime;
	// Convert ms to days
	const daysCount = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	// Convert ms to hours
	const hoursCount = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	// Convert ms to minutes
	const minCount = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	// Convert ms to secs
	const secCount = Math.floor((timeDifference % (1000 * 60)) / 1000);
	// Display days/hours/mins/secs
	timer.innerHTML = `
		<div>${daysCount}<span>Days</span></div>
		<div>${hoursCount}<span>Hours</span></div>
		<div>${minCount}<span>Minutes</span></div>
		<div>${secCount}<span>Seconds</span></div>
	`;

	if (timeDifference < 0) {
		clearInterval(interval);
		timer.style.color = '#17a2b8';
		timer.innerHTML = 'Launched';
	}
}, 1000);

