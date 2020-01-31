// selectors
const navbar = document.querySelector('.navbar');
const searchSection = document.querySelector('.search-sources');
const navbarIcon = document.querySelector('a.icon');

// Functions
const stickyNavbar = () => {
  if (window.scrollY > navbar.offsetTop) {
    searchSection.style.paddingTop = navbar.offsetHeight + 'px';
    navbar.classList.add('sticky');
  } else {
    searchSection.style.paddingTop = 0;
    navbar.classList.remove('sticky');
  }
}

const responsiveNavbar = () => {
  if (navbar.className === 'navbar') {
    navbar.className += ' responsive';
    document.body.style.position = 'fixed';
  } else if( navbar.className === 'navbar sticky' ) {
    navbar.className += ' responsive';
    document.body.style.position = 'fixed';
  } else {
    navbar.className = 'navbar';
    document.body.style.position = 'initial';
  }
}

const dateAndTime = () => {
  const span = document.querySelector('.date').children[0];
  span.textContent = (new Date()).toString().slice(0, 15);
}


// Hook functions with events
window.addEventListener('scroll', stickyNavbar);
navbarIcon.addEventListener('click', responsiveNavbar);
window.addEventListener('load', dateAndTime);
// insertFooter();