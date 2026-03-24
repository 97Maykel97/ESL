export function initFooterTimer() {
	const timerElement = document.querySelector('.leaderboard__timer');

	if (!timerElement) {
		return;
	}

	let secondsLeft = Number(timerElement.dataset.timerSeconds);

	if (Number.isNaN(secondsLeft) || secondsLeft < 0) {
		return;
	}

	function formatTime(totalSeconds) {
		const minutes = Math.floor(totalSeconds / 60);
		const seconds = totalSeconds % 60;
		const secondsWithZero = String(seconds).padStart(2, '0');

		return `Осталось: ${minutes}мин ${secondsWithZero}сек`;
	}

	function renderTimer() {
		timerElement.textContent = formatTime(secondsLeft);
	}

	renderTimer();

	if (secondsLeft === 0) {
		return;
	}

	const intervalId = window.setInterval(() => {
		secondsLeft -= 1;

		if (secondsLeft <= 0) {
			secondsLeft = 0;
			renderTimer();
			window.clearInterval(intervalId);
			return;
		}

		renderTimer();
	}, 1000);
}
