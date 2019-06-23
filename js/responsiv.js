$(function (){
    isNavbarHidden = true;
    $('body > header .nav_one .mobile_icon img').click(function (){
        if(isNavbarHidden){
            $('body > header .nav_two .nav_bar > section').fadeIn("slow");
            isNavbarHidden = false;
        }
        else{
            $('body > header .nav_two .nav_bar > section').fadeOut("slow");
            isNavbarHidden = true;
        }
    });
    
    isContactInfoHidden = true;
    $('body > header .nav_two .contact_info .mobile_icon').click(function (){
        if(isContactInfoHidden){
            $('body > header .nav_two .contact_info .item + .item').fadeIn("slow");
            isContactInfoHidden = false;
        }
        else{
            $('body > header .nav_two .contact_info .item + .item').fadeOut("slow");
            isContactInfoHidden = true;
        }
    });
});
