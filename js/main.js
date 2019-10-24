function openMenu() {               
    //vergrösserung der verschiedenen sachen wie navigation und navigations button//
    $(".nav").css("width","20%");
    $("#home").css("width","80%");
    $("#nav-close").css("visibility","visible");
    $("#nav-button").css("visibility","hidden");
}

function closeMenu() {
    //vergrösserungen der verschiedenen sachen wie navigation und navigations button//
    $(".nav").css("width","0");
    $("#home").css("width","100%");
    $("#nav-close").css("visibility","hidden");
    $("#nav-button").css("visibility","visible");
}