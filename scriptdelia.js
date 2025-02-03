const buttons = document.querySelectorAll('.nav-btn');
const rectangles = document.querySelectorAll('.project-rect');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.add('inactive');
      btn.style.color = "#2a3663"; 
    });

    rectangles.forEach(rect => {
      rect.style.backgroundColor = "#2a3663";
    });

    button.classList.remove('inactive');
    button.classList.add('active');
    button.style.color = "#ac8435"; 
    rectangles[index].style.backgroundColor = "#ac8435";
  });
});