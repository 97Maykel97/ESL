export function initHeaderButtons() {
	const headerBtns = document.querySelectorAll('.header__btn');
	headerBtns.forEach(btn => {
		btn.addEventListener('click', e => {
			e.preventDefault();

			const clicked = e.target.closest('.header__btn');
			if (!clicked) return;

			headerBtns.forEach(btn => btn.classList.remove('header__btn--active'));
			clicked.classList.add('header__btn--active');
		});
	});
}
