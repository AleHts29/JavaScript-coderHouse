// Intro - bienvenida
let welcome = $(".pricing-header");
welcome.show(2000);

// Carts
$("#lista-productos").fadeIn(2500);
$("#lista-productos").delay(100).fadeOut(1500, function(){
    $("#lista-productos").fadeIn(1000);
    $("body").fadeIn(1000).css("background-color", "#F9E79F");
    welcome.fadeIn(1000).css("color","black");
});


