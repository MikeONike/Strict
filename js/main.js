$(document).ready(function() {

    ScrollReveal().reveal('.home-content', {
        duration: 2000, 
        reset: true,    
        easing: 'ease'
    });

    ScrollReveal().reveal('#simple .container', {
        duration: 2000,
        easing: 'ease',
        reset: true,  
        scale: 0.5,
        rotate: {
            x: 90,
            y: 0,
            z: 0,
        },
    });

    ScrollReveal().reveal('.services .service-item', {
        duration:2000,
        reset: true,
        easing: 'ease',
        distance: '100%',
        origin: 'top'
    });

    ScrollReveal().reveal('.services .service-item span', {
        delay:1000,
        duration:1000,
        reset: true,
        easing: 'ease',
        scale: 0.5,
        rotate: {
            x: 60,
            y: 60,
            z: 180,
        }
    });

    ScrollReveal().reveal('.portfolio .container', {
        duration:2000,
        reset: true,
        easing: 'ease',
        distance: '100%',
        origin: 'left'
    });

    ScrollReveal().reveal('.contact .container', {
        duration:2000,
        reset: true,
        easing: 'ease',
        distance: '100%',
        origin: 'right'
    });

    $('.contact .contact-form').validate({
        rules: {
            name: 'required',
            email: 'required',
            message: 'required'
        }
    })

});