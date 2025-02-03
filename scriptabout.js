document.addEventListener('DOMContentLoaded', function () {
    jQuery(function ($) {
      $('.clicktoshow').each(function (i) {
        $(this).click(function (event) {
          event.preventDefault();
          $('.showclick').eq(i).show();
        });
      });
    });
  });

  const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');

const vers1 = document.getElementById('version-1');
const vers2 = document.getElementById('version-2');

const target1 = document.getElementById('target-1');
const target2 = document.getElementById('target-2');

const txt1 = document.getElementById('txt-1');
const txt2 = document.getElementById('txt-2');

const buttons = [btn1, btn2];
const versions = [vers1, vers2];
const targets = [target1, target2];
const txts = [txt1, txt2];
function toggleVersion(activeButton) {
const activeIndex = buttons.indexOf(activeButton); // Get the index of the clicked button

buttons.forEach((button, index) => {
button.classList.toggle('active', index === activeIndex);
button.classList.toggle('inactive', index !== activeIndex);
});

versions.forEach((version, index) => {
version.style.display = index === activeIndex ? "block" : 'none';
});

txts.forEach((txt, index) => {
txt.style.color = index === activeIndex ? "#F7F2E9" : "#2B292B";
});

targets.forEach((target, index) => {
target.style.backgroundColor = index === activeIndex ? "#2B292B" : "#F7F2E9";
});
}

// Re-add event listeners in script.js
buttons.forEach(function(button) {
button.addEventListener('click', function() {
toggleVersion(button); // Toggle based on the clicked button
});
});