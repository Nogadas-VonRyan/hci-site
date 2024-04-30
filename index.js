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

function changeArticle() {
	let new_issuance = document.getElementById("new_issuance");
	let advisories = document.getElementById("advisories");
	let news = document.getElementById("news");
	let programs = document.getElementById("programs");

	let new_issuance_content = document.getElementById(
		"new_issuance_content"
	);
	let advisories_content = document.getElementById(
		"advisories_content"
	);
	let news_content = document.getElementById("news_content");
	let programs_content = document.getElementById("programs_content");
}

function unset_tab_background(element, content) {
	element.style.backgroundColor = "#ffffff";
	element.style.color = "#161d6f";

	if(!content) return;
	content.style.display = "none";
	//console.log(content)
}

function set_tab_background(element, content) {
	let new_issuance = document.getElementById("new_issuance");
	let advisories = document.getElementById("advisories");
	let news = document.getElementById("news");
	let programs = document.getElementById("programs");

	let new_issuance_content = document.getElementById(
		"new_issuance_content"
	);
	let advisories_content = document.getElementById(
		"advisories_content"
	);
	let news_content = document.getElementById("news_content");
	let programs_content = document.getElementById("programs_content");

	if (new_issuance != element)
		unset_tab_background(new_issuance, new_issuance_content);
	if (advisories != element)
		unset_tab_background(advisories, advisories_content);
	if (news != element) unset_tab_background(news, news_content);
	if (programs != element)
		unset_tab_background(programs, programs_content);

	element.style.backgroundColor = "#161d6f";
	element.style.color = "#ffffff";

	content.style.display = "block";
}

function set_new_issuance() {
	let new_issuance = document.getElementById("new_issuance");
	let new_issuance_content = document.getElementById(
		"new_issuance_content"
	);

	set_tab_background(new_issuance, new_issuance_content);
}

function set_advisories() {
	let advisories = document.getElementById("advisories");
	let advisories_content = document.getElementById(
		"advisories_content"
	);

	set_tab_background(advisories, advisories_content);
}

function set_news() {
	let news = document.getElementById("news");
	let news_content = document.getElementById("news_content");

	set_tab_background(news, news_content);
}

function set_programs() {
	let programs = document.getElementById("programs");
	let programs_content = document.getElementById("programs_content");

	set_tab_background(programs, programs_content);
}
