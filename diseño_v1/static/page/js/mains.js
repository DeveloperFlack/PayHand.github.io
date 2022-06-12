/* fullpage */
const seccionesPagina = new fullpage('#fullpage', {
    autoScrolling: true,
    fitToSection: false,
    fitToSectionDelay: 300,
    easing: 'easeInOutCubic',
    scrollingSpeed: 700,
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: false,
    navigation: true,
    anchors: ['inicio', 'skills'],
    navigationTooltips: ['Inicio', 'Skills'],
    showActiveTooltip: true,
    sectionsColor: ['#000', '#c2c2c2', '#000'],
    verticalCentered: true,
    controlArrows: true,
    slidesNavigation: true,
    afterLoad: function(origin, destination){
        if (destination.anchor == 'contact'){
            document.querySelector('.footer').querySelector('h2').style.opactiy = 1;
        }
    }
});