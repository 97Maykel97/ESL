const tabs = document.querySelectorAll('.schedule-demo__tab');
const panels = document.querySelectorAll('.schedule-demo__panel');

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const tabName = tab.dataset.tab;

		tabs.forEach(item => item.classList.remove('schedule-demo__tab--active'));
		panels.forEach(panel =>
			panel.classList.remove('schedule-demo__panel--active'),
		);

		tab.classList.add('schedule-demo__tab--active');

		const activePanel = document.querySelector(
			`.schedule-demo__panel--${tabName}`,
		);

		if (activePanel) {
			activePanel.classList.add('schedule-demo__panel--active');
		}
	});
});
