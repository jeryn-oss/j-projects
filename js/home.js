let scrollUp = 0;
let scrollDown = 0;
var page = 1;
var maxpage = 4;
var cooldown = true;
var scrollnum = 30;
var settings = false;
var activesettingsbtn = 'theme';
$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 1) {
        scrollUp++;
        if(page != 1){ 
            if (cooldown == true){
                if(scrollUp >= scrollnum){
                page--;
                scrollUp = 0;
                cooldown = false;
                setTimeout(cooldownl, 700);
                setpage();
                }
            }
            else {
                scrollUp = 0;
            }
        }
    }
    else {
        scrollDown++;
        if(page >= 1 && page + 1 <= maxpage){
            if(cooldown == true){
               
                if(scrollDown >= scrollnum){
                    page++;
                    scrollDown = 0;
                    cooldown = false;
                    setTimeout(cooldownl, 400);
                    setpage();
                }
            } 
            else{
                scrollDown = 0;
            }
        }
        
    }
});

function setpage(){
    if(page <=1){
        $('body').css('top', '0px');
        $('.pageup').css('display', 'none');
        $('.pagedown').css('display', 'flex')
        $('.pagedown').css('right', '10px');
    }
    else if(page <= maxpage){
        $('.pageup').css('display', 'flex');
        var index = page*100-100 ;
        $('body').css('top', -index+'vh');
        $('.pagedown').css('display', 'flex');
        $('.pagedown').css('right', '70px');
    }
    if(page == maxpage){
        $('.pagedown').css('display', 'none');
    }
    $('.page_index').text('0'+ page +' / 04')
}

function cooldownl(){
    cooldown = true;
}

function pagedown(){
    if(page < maxpage){
        page++;
        setpage();
    }
}

function pageup(){
    if(page > 1){
        page--;
        setpage();
    }
}

function settingsview(){
    if(settings == false){
        $('.settings').addClass('viewable');
        $('.settings').css('translate', '0px -40px');
        setTimeout( function(){
            $('.settings').css('translate', '0px 0px');
            $('.settings').css('opacity', 1);
        },400 )
        settings = true;
    }
    else if(settings == true){
        $('.settings').css('opacity', 0)
        $('.settings').css('translate', '0px 40px');
        setTimeout( function(){
            $('.settings').removeClass('viewable');
        },400 )
        settings = false;
    }
}

function settingsbtn(btn){
    if(btn != activesettingsbtn){
            $('.settings'+ activesettingsbtn +'btn').removeClass('activesettingsnav');
            $('.settings'+ btn +'btn').addClass('activesettingsnav');
            activesettingsbtn = btn
    }
    
}

function start(){
    page = 1;
    setpage();
}

function end(){
    page = maxpage;
    setpage();
}

function goTo(pagename){
    window.location = '/pages/'+ pagename +'.html';
}