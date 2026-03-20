export function initScheduleSlider() {
	const btnRight = document.querySelector('.schedule__slider-btn--right');
	const btnLeft = document.querySelector('.schedule__slider-btn--left');
	const tabs = document.querySelectorAll('.schedule__tab');
	const panels = document.querySelectorAll('.schedule__panel');
	const slideWidth = 350;
	const gap = 28;
	const swipeThreshold = 50;

	if (!btnRight || !btnLeft) return;

	let currentSlide = 0;
	let touchStartX = 0;
	let touchEndX = 0;

	function getActivePanel() {
		return document.querySelector('.schedule__panel--active');
	}

	function getSlider() {
		return getActivePanel()?.querySelector('.schedule__slider');
	}

	function getSlides() {
		return getActivePanel()?.querySelectorAll('.schedule__slide') || [];
	}

	function getVisibleSlidesCount() {
		const slides = getSlides();
		if (!slides.length) return 1;

		let visibleSlidesCount = 4;

		if (window.innerWidth < 992) {
			visibleSlidesCount = 1;
		} else if (window.innerWidth <= 1439) {
			visibleSlidesCount = 2;
		}

		return Math.min(slides.length, Math.max(1, visibleSlidesCount));
	}

	function goToSlide(slide) {
		const slider = getSlider();
		const slides = getSlides();

		if (!slider || !slides.length) return;

		slider.style.gap = `${gap}px`;

		slides.forEach(item => {
			item.style.width = `${slideWidth}px`;
			item.style.flex = `0 0 ${slideWidth}px`;

			const slideContent = item.querySelector('.schedule__slide-content');
			if (slideContent) {
				slideContent.style.width = `${slideWidth}px`;
			}
		});

		slider.style.transform = `translateX(-${slide * (slideWidth + gap)}px)`;
	}

	function nextSlide() {
		const slides = getSlides();
		const visibleSlidesCount = getVisibleSlidesCount();
		const maxSlide = Math.max(0, slides.length - visibleSlidesCount);

		if (currentSlide >= maxSlide) {
			currentSlide = 0;
		} else {
			currentSlide++;
		}

		goToSlide(currentSlide);
	}

	function prevSlide() {
		const slides = getSlides();
		const visibleSlidesCount = getVisibleSlidesCount();
		const maxSlide = Math.max(0, slides.length - visibleSlidesCount);

		if (currentSlide <= 0) {
			currentSlide = maxSlide;
		} else {
			currentSlide--;
		}

		goToSlide(currentSlide);
	}

	btnRight.addEventListener('click', nextSlide);
	btnLeft.addEventListener('click', prevSlide);

	panels.forEach(panel => {
		panel.addEventListener(
			'touchstart',
			event => {
				touchStartX = event.changedTouches[0].clientX;
			},
			{ passive: true },
		);

		panel.addEventListener(
			'touchend',
			event => {
				touchEndX = event.changedTouches[0].clientX;
				const swipeDistance = touchEndX - touchStartX;

				if (Math.abs(swipeDistance) < swipeThreshold) {
					return;
				}

				if (swipeDistance < 0) {
					nextSlide();
				} else {
					prevSlide();
				}
			},
			{ passive: true },
		);
	});

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			currentSlide = 0;
			setTimeout(() => {
				goToSlide(0);
			}, 0);
		});
	});

	window.addEventListener('resize', () => {
		goToSlide(currentSlide);
	});

	goToSlide(0);
}
