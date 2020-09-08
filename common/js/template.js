$(function(){
    $(".mobile_nav").click(function(){
        if($(".mobile_menu_list").css("display") == "block"){
            $(".mobile_menu_list").slideUp(400);
        } else {
            $(".mobile_menu_list").slideDown(400);
        }
    });
});