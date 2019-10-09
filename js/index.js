// <vars>
let galleryBigRow = document.querySelector(".works__content__bigRow").cloneNode();
galleryBigRow.innerHTML = document.querySelector(".works__content__bigRow").innerHTML;
let gallerySmallRow = document.querySelector(".works__content__smallRow").cloneNode();
gallerySmallRow.innerHTML = document.querySelector(".works__content__smallRow").innerHTML;
// </vars>

// <app>
// <menu>
window.addEventListener("scroll", function () {
	if (window.pageYOffset > 810/*document.querySelector(".intro").innerHeight*/) {
		document.querySelector(".header").style.background = "#ffffff";
		document.querySelector(".header").style.zIndex = "10000";
		document.querySelector(".header").style.top = "0";
		document.querySelector(".header").style.left = "50%";
		document.querySelector(".header").style.transform = "translateX(-50%)";
		document.querySelector(".header").style.position = "fixed";
	}
	else {
		document.querySelector(".header").style.position = "static";
		document.querySelector(".header").style.transform = "translateX(0%)";
	}
});
// </menu>
// <gallery>
document.querySelector(".works__more__btn").addEventListener("click", function () {
	document.querySelector(".works__content").appendChild(galleryBigRow);
	galleryBigRow = document.querySelector(".works__content__bigRow").cloneNode();
	galleryBigRow.innerHTML = document.querySelector(".works__content__bigRow").innerHTML;
	document.querySelector(".works__content").appendChild(gallerySmallRow);
	gallerySmallRow = document.querySelector(".works__content__smallRow").cloneNode();
	gallerySmallRow.innerHTML = document.querySelector(".works__content__smallRow").innerHTML;
});
// </gallery>
// </app>