
// modal
const modal = document.querySelector('.modal')
const btnFechaModal = document.querySelector(".x-icon")
const btnDoeAgora = document.querySelector('.btn-doe-agora')
const btnCopiaPix = document.querySelector('.button-qr')
const selecionaCodigoCopia = document.querySelector('.qr-code')

const doacao80 = document.querySelector('.doe-80')
const doacao50 = document.querySelector('.doe-50')
const doacao25 = document.querySelector('.doe-25')
const doacaoOutroValor = document.querySelector('.doe-outro')

const modalDisplay = () =>{
    modal.classList.toggle('hidden')
}


const alteraCodCopia80 = function(){
   selecionaCodigoCopia.setAttribute('data-qr','00020126330014BR.GOV.BCB.PIX011135639514892520400005303986540580.005802BR5917Juliana Abbamonte6009Sao Paulo62070503***63044008')
   selecionaCodigoCopia.src = 'assets/image/QR-80.png'
}
const alteraCodCopia50 = function(){
   selecionaCodigoCopia.setAttribute('data-qr','00020126330014BR.GOV.BCB.PIX011135639514892520400005303986540550.005802BR5917Juliana Abbamonte6009Sao Paulo62070503***6304BCE4')
   selecionaCodigoCopia.src = 'assets/image/QR-50.png'
}
const alteraCodCopia25 = function(){
   selecionaCodigoCopia.setAttribute('data-qr','00020126330014BR.GOV.BCB.PIX011135639514892520400005303986540525.005802BR5917Juliana Abbamonte6009Sao Paulo62070503***6304BC0E')
   selecionaCodigoCopia.src = './assets/image/QR-25.png'
}
const alteraCodCopiaOutro = function(){
   selecionaCodigoCopia.setAttribute('data-qr','00020126330014BR.GOV.BCB.PIX0111356395148925204000053039865802BR5917Juliana Abbamonte6009Sao Paulo62070503***6304F922')
   selecionaCodigoCopia.src = './image/qr-qualquer-valor.png'
}



const copiaCodigoQR = function(){
    const copiaCodigo =selecionaCodigoCopia.getAttribute('data-qr')
    navigator.clipboard.writeText(copiaCodigo)
    alert("Códio QR copiado para área de transferência")
}


btnDoeAgora.addEventListener('click', modalDisplay)
btnFechaModal.addEventListener('click', modalDisplay)
btnCopiaPix.addEventListener('click',copiaCodigoQR)
doacao80.addEventListener('click', alteraCodCopia80)
doacao50.addEventListener('click', alteraCodCopia50)
doacao25.addEventListener('click', alteraCodCopia25)
doacaoOutroValor.addEventListener('click', alteraCodCopiaOutro)






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


