const t = setInterval(clock, 1000);
var period = 3
var passing;
var day = 1;
var lunch = 'a';
var start;
var current;
var end;
var endofday;
var passingnum;
function clock(){
    var time;
    time = moment().format('hhmmssa');
    var sec = secondAfy(time.substring(0,2), time.substring(2,4), time.substring(4,6), time.substring(6,8))
    calc(sec);
}


function calc(sec){
    getperiod(sec);
    //period code 
    if(endofday == true){
        updatescreen(period,timeAfy(sec),lunch,'Schools Out');
    }else{
        if(passing == true){
            if(passingnum == 0){
                start = secondAfy(8,00,00);
                end = secondAfy(8,30,00);
                current = sub(sec,end);
                updatescreen(period,timeAfy(current),lunch,'School starts in');
            }
            if(passingnum == 1){
                start = secondAfy(8,00,00);
                end = secondAfy(8,30,00);
                current = sub(sec,end);
                updatescreen(period,timeAfy(current),lunch,'School starts in');
            }
        }
    }
}

function sub(end,start){
    if(parseInt(start, 10) -  parseInt(end,10) < 0){
        return  parseInt(start, 10) -  parseInt(end,10) + (24 * 60) * 60; 
    }else {
        return  parseInt(start, 10) -  parseInt(end,10);
    }
}


function getperiod(sec){
    if(secondAfy(08,00,00) <=sec){
        passing = true;
        passingnum = 0;
    }else passing = false;
    if(secondAfy(08,30,00) <= sec){
        period = 1
    }
    if(secondAfy(09,53,00) >= sec && sec <= secondAfy(10,03,00)){
        passing = 1;
    }
    if(secondAfy(10,03,00) <= sec){
        period = 2
    }
    if(lunch == 'a'){
        if(secondAfy(11,25,00) <= sec && sec <= secondAfy(11,55,00)){
            period = 3
            lunchtime = 'a'
        }
        if(secondAfy(11,55,00) <= sec && sec <= secondAfy(12,05,00)){
            passing = 'a'
        }else{
            passing = false;
        }
        if(secondAfy(12,05,00) <= sec){
            period = 3
        }
    }
    if(lunch == 'b'){
        if(secondAfy(11,25,00) <= sec && sec <= secondAfy(11,35,00)){
            passing = 2
        }else{
            passing = false;
        }
        if(secondAfy(11,35,00) <= sec){
            period = 3
        }
        if(secondAfy(11,55,00) <= sec && sec <= secondAfy(12,25,00)){
            lunchtime = 'b';
        }
        if(secondAfy(12,25,00) <= sec && sec <= secondAfy(12,30,00)){
            passing = 'b'
        }else{
            passing = false;
        }
    }
    if(lunch == 'c'){
        if(secondAfy(11,25,00) <= sec && sec <= secondAfy(11,35,00)){
            passing = 2
        }else{
            passing = false;
        }
        if(secondAfy(11,35,00) <= sec){
            period = 3
        }
        if(secondAfy(12,25,00) <= sec && sec <= secondAfy(12,55,00)){
            lunchtime = 'c';
        }
        if(secondAfy(12,55,00) <= sec && sec <= secondAfy(13,00,00)){
            passing = 'c'
        }else{
            passing = false;
        }
    }
    if(lunch == 'd'){
        if(secondAfy(11,25,00) <= sec && sec <= secondAfy(11,35,00)){
            passing = 2
        }else{
            passing = false;
        }
        if(secondAfy(11,35,00) <= sec){
            period = 3
        }
        if(secondAfy(12,25,00) <= sec && sec <= secondAfy(12,55,00)){
            lunchtime = 'd';
        }
        
    }
    if(secondAfy(13,28,00) <= sec && sec <= secondAfy(13,38,00)){
            passing = 3
        }else{
            passing = false;
        }
    if(secondAfy(13,38,00) <= sec && sec <= secondAfy(15,00,00)){
        period = 4
    }else{
        period = false;
        endofday = true;
    }
}

function updatescreen(p,time,l,msg){
    //period func
    if(endofday == false){
        var percent = Math.abs((current-(end-start)) /(end - start)*100) + '%';

        console.log(percent)
    }else{
        var percent = '100%';
    }
    

    if(day == 1){
        if(!$('#day1').hasClass('active')){
            $('#day1').toggleClass('active');
        }
        if(period == 1){
        if(!$('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    if(period == 2){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if(!$('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    if(period == 3){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if(!$('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    if(period == 4){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if(!$('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    }
    if(day == 2){
        if(!$('#day2').hasClass('active')){
            $('#day2').toggleClass('active');
        }
    if(period == 1){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if(!$('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    if(period == 2){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if(!$('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    if(period == 3){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if(!$('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if($('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    if(period == 4){
        if($('.period1').hasClass('activecircle')){
            $('.period1').toggleClass('activecircle');
        }
        if($('.period2').hasClass('activecircle')){
            $('.period2').toggleClass('activecircle');
        }
        if($('.period3').hasClass('activecircle')){
            $('.period3').toggleClass('activecircle');
        }
        if($('.period4').hasClass('activecircle')){
            $('.period4').toggleClass('activecircle');
        }
        if($('.period5').hasClass('activecircle')){
            $('.period5').toggleClass('activecircle');
        }
        if($('.period6').hasClass('activecircle')){
            $('.period6').toggleClass('activecircle');
        }
        if($('.period7').hasClass('activecircle')){
            $('.period7').toggleClass('activecircle');
        }
        if(!$('.period8').hasClass('activecircle')){
            $('.period8').toggleClass('activecircle');
        }
    }
    }
    $('.clockprogress').css('width', percent)
    $('#info').text(msg)
    $('#time-till-end').text(time)
}

function timeAfy(seconds){
    var convert = function(x) { return (x < 10) ? "0"+x : x; }
    return convert(parseInt(seconds / (60*60))) + ":" +
         convert(parseInt(seconds / 60 % 60)) + ":" +
         convert(seconds % 60)
}    

function secondAfy(hour,min,sec,a){
    var x;
    if(a == 'am'){
        if(hour == 12){
            x = 0
        }else{
            x = (hour * 60) * 60;
        }
    }else if(a == 'pm'){
        if(hour == 12){
            hour = 12
        }else{
            x = (+(parseInt(hour,10)+ +12) * 60) * 60;
        }
        
    }else{
        x = (hour * 60) * 60;
    }
    var y = (min * 60);
    var z = sec;
    var f = (parseInt(x,10) + parseInt(y,10) + parseInt(z,10));
    return (f);
}

function lunchfunc(input){
    if(input != lunch){
        $('.lunch'+lunch).toggleClass('activecircle');
        $('.lunch'+lunch).toggleClass('hoveraffect');
        $('.lunch'+input).toggleClass('activecircle');
        $('.lunch'+input).toggleClass('hoveraffect');
        lunch = input;
    }
}