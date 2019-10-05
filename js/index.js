// <vars>
let galleryBigRow = document.querySelector(".works__content__bigRow").cloneNode();
galleryBigRow.innerHTML = document.querySelector(".works__content__bigRow").innerHTML;
let gallerySmallRow = document.querySelector(".works__content__smallRow").cloneNode();
gallerySmallRow.innerHTML = document.querySelector(".works__content__smallRow").innerHTML;
// </vars>

// <app>
// <Gallery>
document.querySelector(".works__more__btn").addEventListener("click", function () {
	document.querySelector(".works__content").appendChild(galleryBigRow);
	galleryBigRow = document.querySelector(".works__content__bigRow").cloneNode();
	galleryBigRow.innerHTML = document.querySelector(".works__content__bigRow").innerHTML;
	document.querySelector(".works__content").appendChild(gallerySmallRow);
	gallerySmallRow = document.querySelector(".works__content__smallRow").cloneNode();
	gallerySmallRow.innerHTML = document.querySelector(".works__content__smallRow").innerHTML;
});
// </Gallery>
// </app>