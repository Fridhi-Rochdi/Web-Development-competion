$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        $('.navbar-collapse').toggleClass('show');
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.navbar-toggler') && !$(target).parents().is('.navbar-collapse')) {
            $('.navbar-collapse').removeClass('show');
        }
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('scroll', function() {
    const section = document.getElementById('section-id'); // Remplacez par l'ID de votre section
    if (isInViewPort(section)) {
       
        section.classList.add('loaded');
    }
});

function isInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const sponsorLogos = document.querySelectorAll('.sponsor-logos img');
sponsorLogos.forEach(logo => {
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

