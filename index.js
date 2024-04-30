let sidebar_slide = false;

function slide() {
	let sidebar = document.querySelector(".sidebar");
	if (sidebar_slide) {
		sidebar.classList.add("slide-out");
		sidebar.classList.remove("slide-in");
		sidebar_slide = false;
	} else {
		sidebar.classList.add("slide-in");
		sidebar.classList.remove("slide-out");
		sidebar_slide = true;
	}
	console.log(sidebar_slide);
}

let sidemenu_page = 0;

function nextSlide() {
	sidemenu_page = (sidemenu_page + 1) % 4;

	console.log(sidemenu_page);
	//set all elements to none
	let sidemenus = document.querySelectorAll(".side-menu");
	for (let i in sidemenus) {
		if (!sidemenus[i].style) continue;
		sidemenus[i].style.display = "none";
	}

	let visible_pages = document.querySelectorAll(
		".side-" + sidemenu_page
	);

	for (let i in visible_pages) {
		if (!sidemenus[i].style) continue;
		visible_pages[i].style.display = "block";
	}
}

function prevSlide() {
	if (sidemenu_page == 0) {
		sidemenu_page = 3;
	} else {
		sidemenu_page -= 1;
	}

	console.log(sidemenu_page);
	//set all elements to none
	let sidemenus = document.querySelectorAll(".side-menu");
	for (let i in sidemenus) {
		if (!sidemenus[i].style) continue;
		sidemenus[i].style.display = "none";
	}

	let visible_pages = document.querySelectorAll(
		".side-" + sidemenu_page
	);

	for (let i in visible_pages) {
		if (!sidemenus[i].style) continue;
		visible_pages[i].style.display = "block";
	}
}
