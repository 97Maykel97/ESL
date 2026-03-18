// Header buttons
const headerBtns = document.querySelectorAll('.header__btn');
// Schedule tabs
const scheduleTabs = document.querySelectorAll('.schedule__tab');
// Toggle active state on header button click
headerBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault();

		const clicked = e.target.closest('.header__btn');
		if (!clicked) return;

		headerBtns.forEach(btn => btn.classList.remove('header__btn--active'));
		clicked.classList.add('header__btn--active');
	});
});

// Toggle active state on schedule tabs click
scheduleTabs.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault();

		const clicked = e.target.closest('.schedule__tab');
		if (!clicked) return;

		scheduleTabs.forEach(btn => btn.classList.remove('schedule__tab--active'));
		clicked.classList.add('schedule__tab--active');
	});
});
