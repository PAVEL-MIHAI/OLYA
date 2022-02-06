
console.log("Всем привет !!! ");
console.log("Hello");

// -------смена языка---------------------------
const portfolioBtnEn = document.querySelector('.en');
const portfolioBtnRus = document.querySelector('.rus');

portfolioBtnRus.addEventListener('click', () => {
  (document.querySelector('.header1')).textContent = 'Оля';
  (document.querySelector('.header2')).textContent = 'Павел';
  (document.querySelector('.header3')).textContent = 'Оля+Павел';
 
  (document.querySelector('.hero-text h1')).textContent = 'Свадьба';
  
  (document.querySelector('.section-olya h2')).textContent = 'Оля';
 
  (document.querySelector('.section-pavel h2')).textContent = 'Павел';
   
  (document.querySelector('.section-olya-pavel h2')).textContent = 'Оля + Павел';
  
  // ------ цвет др кнопок---------
  portfolioBtnRus.style.color = '#bdae82';
  // ----цвет кнопки-------
  portfolioBtnEn.style.color = '#fff';
});

portfolioBtnEn.addEventListener('click', () => {
  (document.querySelector('.header1')).textContent = 'Olya';
  (document.querySelector('.header2')).textContent = 'Pavel';
  (document.querySelector('.header3')).textContent = 'Olya+Pavel';
 
  (document.querySelector('.hero-text h1')).textContent = 'Wedding';
  
  (document.querySelector('.section-olya h2')).textContent = 'Olya';
 
  (document.querySelector('.section-pavel h2')).textContent = 'Pavel';
   
  (document.querySelector('.section-olya-pavel h2')).textContent = 'Olya + Pavel';
  
  // ------ цвет др кнопок---------
  portfolioBtnRus.style.color = '#fff';
  // ----цвет кнопки-------
  portfolioBtnEn.style.color = '#bdae82';
});

