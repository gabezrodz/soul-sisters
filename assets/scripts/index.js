const trackContainer = document.querySelector('.picture__slider');
const carouselImage = document.querySelectorAll('.carousel__image');
const btnPrev = document.querySelector('.btn--prev');
const btnNext = document.querySelector('.btn--next');
let amountToMove = carouselImage[0].offsetWidth;

window.addEventListener('resize',() => {
	amountToMove = carouselImage[0].offsetWidth;
})

let count = 0;
btnNext.addEventListener('click', function() {
	if(count >= carouselImage.length-1 ) return;
	count++;
	let imgSrc = carouselImage[count].firstElementChild;
	if(imgSrc.getAttribute('src') === "") {
		imgSrc.setAttribute('src',imgSrc.dataset.src);
	}
	trackContainer.style.transition = "transform 0.5s ease-in-out"
	trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
	btnShowHide(count);
});

window.addEventListener('resize',() => {
	const widthGallery = document.querySelector('.tour__gallery').offsetWidth;
	trackContainer.style.transition = "none"
	trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
	/*if(count === carouselImage.length-1) {
		trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
	}*/
});

btnPrev.addEventListener('click', function() {
	if(count === 0 ) return;
	count--;
	trackContainer.style.transition = "transform 0.5s ease-in-out"
	trackContainer.style.transform = 'translateX(-' + amountToMove * count + 'px)';
	btnShowHide(count);
});



function btnShowHide(count) {
	if(count === 0) {
		btnPrev.classList.add('is-hidden');
		btnNext.classList.remove('is-hidden');
	}
	else if(count === carouselImage.length-1) {
		btnPrev.classList.remove('is-hidden');
		btnNext.classList.add('is-hidden');
	}
	else {
		btnPrev.classList.remove('is-hidden');
		btnNext.classList.remove('is-hidden');
	}
}