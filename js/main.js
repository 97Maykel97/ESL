// Header buttons
const btns = document.querySelectorAll('.header__btn');

// Toggle active state on header button click
btns.forEach(btn => {
	btn.addEventListener('click', e => {
		e.preventDefault();

		const clicked = e.target.closest('.header__btn');
		if (!clicked) return;

		btns.forEach(btn => btn.classList.remove('header__btn--active'));
		clicked.classList.add('header__btn--active');
	});
});
