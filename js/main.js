// sidemenu

$(".small").click(function(){
    if($(".logo").css("left") == "0px") {
        $(".logo").css("left","-214px");
        $(".sidebar").css("left","-214px");
        $(".small").text("»");
    } 
    else {
        $(".logo").css("left","0");
        $(".sidebar").css("left","0");
        $(".small").text("«");
    }
})

$("#left li").hover(function(){
    $("#left li").removeClass("hover")
    $(this).addClass("hover")
},function(){
    $(this).removeClass("hover")
})

$("#left li").click(function(){
    $("#left li").removeClass("active");
    $(this).addClass("active");
})

// menuMobile

var mobile = function(){
    $(".burguer").click(menuSliceOut);
}
$(document).ready(mobile);

var menuSliceOut = function(){
    if ($(".menuMobile").css("left") =="-257px") {
        $(".burguer").css("right", "-65.5px");
        $(".menuMobile").css("left", "0px");
    }
    else{
        $(".burguer").css("right", "10");
        $(".menuMobile").css("left", "-257px");
    }
}

// festejo

// function walkCat(){
//     var keyframes = [
//         {backgroundPosition: "0 0"},
//         {backgroundPosition: "0 -2391"}
//     ];
//     var timing = {
//         duration: 750,
//         iterations: 5,
//         easing: "steps(12, end)"
//     };
//     var catRunning = document.getElementById ("festejo").animate(keyframes, timing);
// }

// function sitDown(){
//     var keyframes = [
//         {backgroundPosition: "-400px 0"},
//         {backgroundPosition: "-400px -1000px"}
//     ];
//     var timing = {
//         duration: 740,
//         iterations: 4,
//         easing: "steps(5)"
//     };
//     var catRunning = document.getElementById ("festejo").animate(keyframes, timing);
// }

function correFestejo(){
    var keyframes = [
        {backgroundPosition: "-1px 0"},
        {backgroundPosition: "-1px -2391px"}
    ];
    var timing = {
        duration: 740,
        iterations: 4,
        easing: "steps(12)"
    };
    var catRunning = document.getElementById ("festejo").animate(keyframes, timing);
}

// slide left

$(window).scroll(function() {
    var where = $(this).scrollLeft();

    if ((where > $(this).width() * 0.7)) {
        $(".ego, .perfil").animate({
            top: '0px', 
            opacity: "1"
        }, 1700);
    }
});

var sideMenu = function(){
    $("#festejo").animate({
        left: '390px'
    },4000);
    $("#principal, #in-mob").click(principal);    
    $("#conoceme, #con-mob").click(conoceme);
    $("#skills, #hab-mob").click(power);
    $("#port, #port-mob").click(portafolio);
    $("#contact, #contact-mob").click(contacto);

}

$(document).ready(sideMenu);

var principal = function(){
    $("html, body").animate({
        scrollLeft: 0
    }, 2000);
    $("#festejo").animate({
        left: "390px"
    },2000).addClass("voltearGato");
    correFestejo();
}

var conoceme = function(){
    $("html, body").animate({
        scrollLeft: $(".presentacion").offset().left
    }, 1200);
    $("#festejo").on("")
    $("#festejo").animate({
        left: $(".presentacion").offset().left
    },1000);
    correFestejo();
}

var power = function(){
    $("html, body").animate({
        scrollLeft: $("#power").offset().left
    }, 1200);  
    $("#festejo").animate({
        left: $("#power").offset().left
    },1000);
    correFestejo();
}

var portafolio = function(){
    $("html, body").animate({
        scrollLeft: $("#portafolio").offset().left
    }, 1200);
    $("#festejo").animate({
        left: $("#portafolio").offset().left
    },1000);
    correFestejo();
}

var contacto = function(){
    $("html, body").animate({
        scrollLeft: $("#contacto").offset().left
    }, 1200);
    $("#festejo").animate({
        left: $("#contacto").offset().left
    },1000);
    correFestejo();
}

// habilidades mobile

$(document).ready(function(){
    $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        },6000);
    });
});

