/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const main = document.querySelector('#main');
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const button = document.querySelector('.add_section');
const button2 = document.querySelector('.remove_section');
sectionNum = 1;

console.log(sections);

// Adding active class

function makeActive (section) {
section.classList.add('your-active-class');
};

// Removing active class

function makeNonActive (section) {
section.classList.remove('your-active-class');
};

navBarUpdate(navBar, sections);
window.addEventListener('scroll', activeMananger);
button.addEventListener('click', addSection);
button2.addEventListener('click', removeSection);
navBar.addEventListener('click', scrollSection)

// Clearing the navbar

function navBarClear(navBar) {
  navBar.innerHTML = '';
}

// Updating / building the navbar

function navBarUpdate (navBar, sections)  {

navBar.innerHTML = '';

sections.forEach(section => {
  newElement = document.createElement('li');
  newElement.textContent = section.dataset.nav;
  let newClass = section.id;
  newElement.classList.add(newClass);
  if (section.classList.contains('your-active-class')) {
    newElement.setAttribute('id', 'active-nav');
  }
  navBar.appendChild(newElement);

});

};

// scrolling to a given section in the page

function scrollSection (event) {
scrolltarget = event.target.className;
scrollTarget = document.getElementById('' + scrolltarget);
console.log(scrolltarget);
scrollTarget.scrollIntoView();

}

// Adding a new section to the end of the page

function addSection () {

newSection = document.createElement('section');
newSection.setAttribute('id', "section"+sectionNum)
newSection.dataset.nav = "Section " + sectionNum;
newDiv = document.createElement('div');
newDiv.classList.add('landing__container');
newHeading = document.createElement('h2');
newHeading.textContent = "Section " + sectionNum;
sectionNum += 1;
newParagraph = document.createElement('p');
newParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
newDiv.appendChild(newHeading);
newDiv.appendChild(newParagraph);
newSection.appendChild(newDiv);
main.appendChild(newSection);
var Sections = document.querySelectorAll('section');
navBarClear(navBar);
navBarUpdate(navBar, Sections);

}


// Removing the last section on the page
function removeSection () {


if(main.querySelector('section')) {
main.removeChild(main.lastChild);
sectionNum -= 1;
}

else {
sectionNum = 1;
}

var Sections = document.querySelectorAll('section');
navBarClear(navBar);
navBarUpdate(navBar, Sections);

}

// Adding active class to sections that are within viewport

function activeMananger () {
let sectionz = document.querySelectorAll('section');
sectionz.forEach(section => {

if (section.getBoundingClientRect().top < 300 && section.getBoundingClientRect().top >= -300) {
  makeActive(section);
}

else {
  makeNonActive(section);
}

navBarClear(navBar);
navBarUpdate(navBar, sectionz);
});
};
