const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const  opacity = 0.6;

//set first img opacity
imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener('click', 
	imgClick));

function imgClick(e){
	// Reset opacity of all img
	imgs.forEach(img => (img.style.opacity = 1));

	// Change current image to source of clicked img
	current.src = e.target.src;

	//Add fade in class
	current.classList.add('fade-in');

	//remove fade-in class after .5 seconds
	setTimeout(() => current.classList.remove('fade-in'), 500)

	// Change opacity to opacity variable
	e.target.style.opacity = opacity;
}