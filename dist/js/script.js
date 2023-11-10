const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElems = document.querySelectorAll('.close'),
      workItems = document.querySelectorAll('.portfolio__item'),
      workItemsInfo = document.querySelectorAll('.portfolio__item-info'),
      filteredImage = document.querySelectorAll('.portfolio__item img'),
      arrowUp = document.querySelector("#up");
        

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElems.forEach(elem => {
    elem.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


const percents = document.querySelectorAll('.skills__progress-percent'),
    lines = document.querySelectorAll('.skills__progress-line');

percents.forEach( (item,i) => {
    lines[i].style.width = item.innerHTML;
});

workItems.forEach((item, i) => {
    item.addEventListener("mouseover", () => {
        workItemsInfo[i].classList.add('show');
        filteredImage[i].classList.add('filtered');
    });
    item.addEventListener("mouseout", () => {
        workItemsInfo[i].classList.remove('show');
        filteredImage[i].classList.remove('filtered');
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 1000) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
});

arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
