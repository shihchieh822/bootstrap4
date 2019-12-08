$(document).ready(function () {
    
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    }); 

    $('.tabs').click(function (e) {
        var index =$(e.currentTarget).index();
        $('.tabs').removeClass('active').eq(index).addClass('active');
        $('.product-content .panel-body').removeClass('active').eq(index).addClass('active');
    });

});