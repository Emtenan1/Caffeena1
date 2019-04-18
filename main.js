$(document).ready(function(){
    console.log($('.h1'))

    $('.h1').on('click', aboutus);

    function aboutus(){
        console.log('click')
        $('.h1').toggleClass('top');
        $('#AU').fadeToggle();
    }

    $('.Hellopage').on('click',hello);
    function hello(){
        window.location.href = "Index.html"
    }
    
    $('#menu').on('click',menu);
    function menu(){
        $('.menu1').slideToggle()
    }
});

