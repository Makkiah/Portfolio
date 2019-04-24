
//Scrolling 

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



