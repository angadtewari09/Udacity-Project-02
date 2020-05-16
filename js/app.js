let secData = document.querySelectorAll("section");


// Create navigation elements
function createNavigation() {
    let navNode = document.getElementById("navbar__list");
    for (let i = 0; i < secData.length; i++) {
        navNode.appendChild(createNavigationItem(secData[i]))
    }
}

// Create navigation item
function createNavigationItem(navigationItem) {
    let liNode = document.createElement("LI");
    let divNode = document.createElement("DIV");
    divNode.classList.add("menu__link");
    let textNode = document.createTextNode(navigationItem.dataset.nav);
    divNode.appendChild(textNode);
    liNode.appendChild(divNode);
    return liNode;
}

// Get page navigation height
function getPageHeaderHeight() {
    return document.getElementsByClassName("page__header")[0].getBoundingClientRect().height;
}

// Set the active class on navigation item and section
function changeActiveClass() {
    let sections = document.getElementsByTagName("SECTION");
    let navigationItem = document.getElementsByTagName("LI");
    let isActiveSet = false;
    for (let i = 0; i < sections.length; i++) {
        let sectionBounding = sections[i].getBoundingClientRect();
        // Calculate the height from top
        let sectionHeight = sectionBounding.top + sectionBounding.height - getPageHeaderHeight();
        // Set the active class to the element that is first in the viewport
        if (isActiveSet) {
            sections[i].removeAttribute("class");
            navigationItem[i].childNodes[0].removeAttribute("class");
            navigationItem[i].childNodes[0].classList.add("menu__link");
        } else if (sectionHeight > 0) {
            if (sections[i].classList[0] !== "your-active-class") {
                sections[i].classList.add("your-active-class");
            }
            if (navigationItem[i].childNodes[0].classList[1] !== "menu__link__active") {
                navigationItem[i].childNodes[0].classList.add("menu__link__active");
            }
            isActiveSet = true;
        } else {
            sections[i].removeAttribute("class");
            navigationItem[i].childNodes[0].removeAttribute("class");
            navigationItem[i].childNodes[0].classList.add("menu__link");
        }
    }
}

createNavigation();
window.onload = function(){

    var navigation = document.getElementById('navbar__list');
navigation.addEventListener('click' , function() {
    event.preventDefault()
});

     document.getElementById('navhome').addEventListener('click', (event)=> {
       event.preventDefault();
       document.getElementById("homes1").scrollIntoView();
      });
      
      document.getElementById('navabout').addEventListener('click', (e)=> {
        e.preventDefault();
        document.getElementById("abouts2").scrollIntoView();
      });

      document.getElementById("navhobbies").addEventListener('click',(e)=>{
        e.preventDefault();
        document.getElementById("hobbies3").scrollIntoView();
      });

      document.getElementById('navcontact').addEventListener('click', (e)=> {
        e.preventDefault();
        document.getElementById("contacts4").scrollIntoView();
      });
      
}
var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};