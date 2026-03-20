export function initScheduleTabs() {
	const tabs = document.querySelectorAll('.schedule__tab');
	const tabContainer = document.querySelector('.schedule__tabs');
	const schedulePanels = document.querySelectorAll('.schedule__panel');

	if (!tabContainer) return;

	tabContainer.addEventListener('click', e => {
		const clicked = e.target.closest('.schedule__tab');
		if (!clicked) return;

		tabs.forEach(tab => tab.classList.remove('schedule__tab--active'));
		schedulePanels.forEach(panel =>
			panel.classList.remove('schedule__panel--active'),
		);

		clicked.classList.add('schedule__tab--active');

		const activePanel = document.querySelector(
			`.schedule__panel--${clicked.dataset.tab}`,
		);

		if (activePanel) {
			activePanel.classList.add('schedule__panel--active');
		}
	});
}
