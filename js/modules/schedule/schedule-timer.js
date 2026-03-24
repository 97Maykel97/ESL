export function initScheduleTimer() {
	const timerElements = document.querySelectorAll('.schedule__slide-status[data-schedule-seconds]');

	if (!timerElements.length) {
		return;
	}

	timerElements.forEach(timerElement => {
		let secondsLeft = Number(timerElement.dataset.scheduleSeconds);

		if (Number.isNaN(secondsLeft) || secondsLeft < 0) {
			return;
		}

		function updateTimerText() {
			const hours = Math.floor(secondsLeft / 3600);
			const minutes = Math.floor((secondsLeft % 3600) / 60);

			timerElement.textContent = `Starts in: ${hours} hours ${minutes} min \u2022 Bo 3`;
		}

		updateTimerText();

		if (secondsLeft === 0) {
			return;
		}

		const intervalId = window.setInterval(() => {
			secondsLeft -= 1;

			if (secondsLeft <= 0) {
				secondsLeft = 0;
				updateTimerText();
				window.clearInterval(intervalId);
				return;
			}

			updateTimerText();
		}, 1000);
	});
}
