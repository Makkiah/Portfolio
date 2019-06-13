const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	links.forEach(link => {
		link.classList.toggle('fade');
	})
})

const callBttn = document.querySelector('#call-bttn');

callBttn.addEventListener('click', () => {
	alert('Business Cell: (513)252-3636');
})


//Scrolling Magic

function splitScroll() {
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration: '200%',
		triggerElement: ".about-title", 
		triggerHook: 0 
	})
	.setPin('.about-title')
	.addTo(controller);
}

splitScroll();



// Button

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");

// btn1.onclick = function() {
// 	 parent.location='mailto:abc@abc.com';
// }



