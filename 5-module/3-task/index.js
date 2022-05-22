function initCarousel() {
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselInner = document.querySelector('.carousel__inner');
  const width = document.querySelector('.carousel__slide').offsetWidth;
  let position = 0;

  if (position === 0) {
    arrowLeft.style.display = 'none';
  }

  arrowRight.addEventListener('click', (event) => {
    if (event.target.closest(".carousel__arrow_right")) {
      position++;
      moveSlide();
      setArrowVisibility();
    }
  }
  );
  arrowLeft.addEventListener('click', (event) => {
    if (event.target.closest(".carousel__arrow_left")) {
      position--;
      moveSlide();
      setArrowVisibility();
    }
  },
  );

  function moveSlide() {
    carouselInner.style.transform = `translateX(-${width * position}px)`;
  }

  function setArrowVisibility() {
    arrowLeft.style.display = position === 0 ? 'none' : '';
    arrowRight.style.display = position === 3 ? 'none' : '';
  }

}
