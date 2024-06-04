const CicisBirtday = new Date('June 08, 2024 00:00:00')
let countdownDisplay = document.getElementById('countdown');
const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const updateCountdown=()=>{
	const diff = CicisBirtday -new Date();
	const timeleft=getTimeLeft(diff);
	daysDisplay.innerText=`${timeleft.days}`;
	hoursDisplay.innerText=`${timeleft.hours}`;
	minutesDisplay.innerText=`${timeleft.minutes}`;
	secondsDisplay.innerText=`${timeleft.seconds}`;
	if (timeleft.days < 0 && 
		timeleft.hours  < 0 && 
		timeleft.minutes < 0 &&
		timeleft.seconds < 0){
		countdownDisplay.innerText=("HAPPY BIRTHDAY  CiCi");
	countdownDisplay.classList.add('birthday-message')
	document.body.style.pointerEvents="none";
	const screenDisplay = document.querySelectorAll('h1,h2');
	screenDisplay.forEach(element=>{
		element.classList.add('hidden')
		});
	}
}

const getTimeLeft = (diff) => {
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)), 
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)), 
    seconds: Math.floor((diff % (1000 * 60)) / 1000) 
  };
};

setInterval(updateCountdown, 1000);
countdownDisplay(updateCountdown());

