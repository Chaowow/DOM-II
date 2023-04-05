import './less/index.less'

// CLICK
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.style.backgroundColor = '#8F00FF';
        event.target.style.color = 'white';
    });
});

// MOUSE ENTER
let divContainers = document.querySelectorAll('.destination');

divContainers.forEach(container => {
    container.addEventListener('mouseenter', (e) => {
        e.target.style.border = '2px solid teal';
        e.target.style.padding = '10px';
    });

// MOUSE LEAVE    
    container.addEventListener('mouseleave', (e) => {
        e.target.style.border = '';
        e.target.style.padding = '';
    });
});

// MOUSE OVER
let header = document.querySelectorAll('.nav-link');

header.forEach(over => {
    over.addEventListener('mouseover', (evt) => {
        evt.target.style.backgroundColor = '#43A6C6'
        evt.target.style.color = 'white';
    });

// MOUSE LEAVE
    over.addEventListener('mouseleave', (evt) => {
        evt.target.style.backgroundColor = '';
        evt.target.style.color = '';
    });
});

// KEY DOWN
document.addEventListener('keydown', (evet) => {
    if (evet.key === 'Enter') {
        window.location.href = 'https://berserk-me.com/';
    }
})

// WHEEL
const originalBackgroundColor = document.body.style.backgroundColor;

document.addEventListener('wheel', () => {
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop + clientHeight === scrollHeight) {
    document.body.style.backgroundColor = 'skyblue';
  } else {
    document.body.style.backgroundColor = originalBackgroundColor;
  }
});

// LOAD
window.addEventListener('load', () => {
    console.log('Fun Bus has loaded!');
})

// FOCUS 

let headerOne = document.querySelector('.logo-heading');

headerOne.addEventListener('focus', (evxnt) => {
    evxnt.target.style.backgroundColor = '#FCE883';
});

// BLUR
headerOne.addEventListener('blur', (evxnt) =>{
    evxnt.target.style.backgroundColor = '';
});

// RESIZE
window.addEventListener('resize', () => {
    console.log('The window has changed size');
});


