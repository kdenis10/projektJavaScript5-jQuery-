//Długo:
// $('.me').on("click", function(){
//     $('body, html').animate({
//         scrollTop: $('.s1').offset().top
//     }, 500)
// })
// $('.portfolio').on("click", function(){
//     $('body, html').animate({
//         scrollTop: $('.s2').offset().top
//     }, 500)
// })

//Skróconyj zapis:
$('nav a').on("click", function(){
    //Najpierw pobieram element:
    const goToSection = "#"+$(this).attr('class');
    //Wyjdzie tak: #me, #portfolio, #oferta, #contact
    //i zapisze to do zmiennej "goToSection"
        $('body, html').animate({
            //ta funkcja(offset().top) po kliknięciu przeniesie
            //do sekcji na którą wciśniełem w nav-wie
            scrollTop: $(goToSection).offset().top
        }, 500)
    })