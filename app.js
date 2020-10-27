const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	hamburger.classList.toggle('stay');
	links.forEach(link => {
		link.classList.toggle('fade');
	})
})

navLinks.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	hamburger.classList.toggle('stay');
	links.forEach(link => {
		link.classList.toggle('fade');
	})
})

const callBttn = document.querySelector('#call-bttn');

function callMe(){
	alert('Business Cell: (513)252-3636');
})


// Smooth Scroll



//Scrolling Magic

function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: ".about-title", 
		triggerHook: 0,
	})
	.setPin('.about-title');
	.addTo(controller);
}

splitScroll();
