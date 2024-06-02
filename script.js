const CicisBirtday = new Date('June 08, 2024 00:00:00')
const countdownDisplay = document.getElementById('countdown');
const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const updateCountdown=()=>{
	const diff = CicisBirtday -new Date();
	const timeleft=getTimeLeft(diff);
	daysDisplay.innerText=`${timeleft.days}  `;
	hoursDisplay.innerText=`${timeleft.hours} `;
	minutesDisplay.innerText=`${timeleft.minutes} `;
	secondsDisplay.innerText=`${timeleft.seconds} `;
}

const getTimeLeft = (diff) => {
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)), // days in days
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // hours in hours
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), // minutes in minutes
    seconds: Math.floor((diff % (1000 * 60)) / 1000) // seconds in seconds
  };
};

countdownDisplay.addEventListener("input" ,updateCountdown());
setInterval(updateCountdown, 1000);
