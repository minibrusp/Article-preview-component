document.addEventListener('DOMContentLoaded', (event) => {
   'use strict';
   console.log('Hello');
   const shareButton = document.querySelector('.button__share');
   shareButton.addEventListener('click', (event) => {
      let socialIcons = document.querySelector('aside');
      socialIcons.classList.toggle('aside__show');
      shareButton.classList.toggle('button__share__clicked');
   });
});