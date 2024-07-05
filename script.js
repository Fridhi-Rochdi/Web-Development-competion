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
