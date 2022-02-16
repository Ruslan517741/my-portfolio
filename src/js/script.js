const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElems = document.querySelectorAll('.close'),
      workItems = document.querySelectorAll('.portfolio__item'),
      workItemsInfo = document.querySelectorAll('.portfolio__item-info');
        

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
        /* workItemsInfo[i].classList.remove('hide'); */
    });
    item.addEventListener("mouseout", () => {
        /* workItemsInfo[i].classList.add('hide'); */
        workItemsInfo[i].classList.remove('show');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    } 
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});