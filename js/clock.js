var time;
const t = setInterval(clock, 10);
var period = 0;
var Passing;
var day = 1;
var lunch = lunchfunc('var');
var lunchtime = false;
var start;
var current;
var end;
var endofday = false;
var passingnum = 0;
var mintest = 25;
var hourtest = 11;
var timer =0;
var periodsub;
setInterval(() => {
            $('.loader').css('opacity', 0)
            setInterval(() => {
                if($('.loader').hasClass('loadview')){
                    $('.loader').removeClass('loadview')
                }
            }, 400);
            
}, 3000);
function clock(){
    time = moment().format('hhmmssa');
    secs = secondAfy(time.substring(0,2),time.substring(2,4),time.substring(4,6),time.substring(6,8));
    calc(secs);
}

function calc(sec){
    if(day != 0){
        //period code 
        getperiod(sec);
        if(endofday == true){
            updatescreen(period,clockAfy(time),lunch,"School's Out");
        }else{
            if(Passing == true){
                if(passingnum == 0){
                    start = secondAfy(8,00,00);
                    end = secondAfy(8,30,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'School starts in');
                    if(current <= 0){
                        Passing = false; 
                    } 
                }
                else if(passingnum == 1){
                    start = secondAfy(9,53,00);
                    end = secondAfy(10,03,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Passing period ends in');
                    if(current <= 0){
                        Passing = false; 
                    } 
                }
                else if(passingnum == 2){
                        start = secondAfy(11,25,00);
                        end = secondAfy(11,35,00);
                        current = sub(sec,end);
                        updatescreen(period,timeAfy(current),lunch,'Passing period ends in');
                        if(current <= 0){
                            Passing = false; 
                        } 
                }
                else if(passingnum == 'a'){
                    start = secondAfy(11,55,00);
                    end = secondAfy(12,05,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Passing period ends in');
                    if(current <= 0){
                        Passing = false; 
                    } 
                }
                else if(passingnum == 'b'){
                    start = secondAfy(12,25,00);
                    end = secondAfy(12,30,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Passing period ends in');
                    if(current <= 0){
                        Passing = false; 
                    } 
                }
                else if(passingnum == 'c'){
                    start = secondAfy(12,55,00);
                    end = secondAfy(13,00,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Passing period ends in');
                    if(current <= 0){
                        Passing = false; 
                    } 
                }
                else if(passingnum == 3){
                    start = secondAfy(13,28,00);
                    end = secondAfy(13,38,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Passing period ends in');
                    if(current <= 0){
                        Passing = false; 
                    } 
                }
            }
            if(lunchtime == true){
                if(lunch == 'a'){
                    if(secondAfy(11,55,00) >= sec && sec >= secondAfy(11,25,00)){
                        start = secondAfy(11,25,00);
                        end = secondAfy(11,55,00);
                        current = sub(sec,end);
                        updatescreen(period,timeAfy(current),lunch,'Lunch ends in');
                    }else lunchtime = false;
                }
                if(lunch == 'b'){
                    if(secondAfy(11,55,00) <= sec && sec <= secondAfy(12,25,00)){
                        start = secondAfy(11,55,00);
                        end = secondAfy(12,25,00);
                        current = sub(sec,end);
                        updatescreen(period,timeAfy(current),lunch,'Lunch ends in');
                    }else lunchtime = false;
                }
                if(lunch == 'c'){
                    if(secondAfy(12,25,00) <= sec && sec <= secondAfy(12,55,00)){
                        start = secondAfy(12,25,00);
                        end = secondAfy(12,55,00);
                        current = sub(sec,end);
                        updatescreen(period,timeAfy(current),lunch,'Lunch ends in');
                    }else lunchtime = false;
                }
                if(lunch == 'd'){
                    if(secondAfy(12,55,00) <= sec && sec <= secondAfy(13,28,00)){
                        start = secondAfy(12,55,00);
                        end = secondAfy(13,28,00);
                        current = sub(sec,end);
                        updatescreen(period,timeAfy(current),lunch,'Lunch ends in');
                    }else lunchtime = false
                }
            }
            if(Passing != true){
                if(period == 1){
                    start = secondAfy(8,30,00);
                    end = secondAfy(9,53,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Period ends in');
                }
                if(period == 2){
                    start = secondAfy(10,03,00);
                    end = secondAfy(11,25,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'Period ends in');
                }
                if(lunchtime != true){
                    if(lunch == 'a'){
                        if(period == 3){
                            start = secondAfy(12,05,00);
                            end = secondAfy(13,28,00);
                            current = sub(sec,end);
                            updatescreen(period,timeAfy(current),lunch,'Period ends in');
                        } 
                    }else if(lunch == 'b'){
                        if(period == 3){
                                if(periodsub == 'bbl'){
                                start = secondAfy(11,35,00);
                                end = secondAfy(11,55,00);
                                current = sub(sec,end);
                                updatescreen(period,timeAfy(current),lunch,'Lunch starts in');
                            } else if(periodsub == 'abl'){
                                start = secondAfy(12,30,00);
                                end = secondAfy(13,28,00);
                                current = sub(sec,end);
                                updatescreen(period,timeAfy(current),lunch,'Period ends in');
                            }
                        }
                    }
                    else if (lunch == 'c' || lunch =='d'){
                        if(period == 3){
                            if(periodsub == 'bcl'){
                                start = secondAfy(11,35,00);
                                end = secondAfy(12,25,00);
                                current = sub(sec,end);
                                updatescreen(period,timeAfy(current),lunch,'Lunch starts in');
                            }else if(periodsub == 'acl'){
                                start = secondAfy(13,00,00);
                                end = secondAfy(13,28,00);
                                current = sub(sec,end);
                                updatescreen(period,timeAfy(current),lunch,'Period ends in');
                            }else if(periodsub == 'bdl'){
                                start = secondAfy(11,35,00);
                                end = secondAfy(13,00,00);
                                current = sub(sec,end);
                                updatescreen(period,timeAfy(current),lunch,'lunch starts in');
                            }
                        }
                            
                        }
                }
                if(period == 4){
                    start = secondAfy(13,38,00);
                    end = secondAfy(15,00,00);
                    current = sub(sec,end);
                    updatescreen(period,timeAfy(current),lunch,'School ends in');
                }
            }
        }
    }else {
        updatescreen(period,clockAfy(time),lunch,'Weekend Baby!');
    }
} 


function sub(end,start){
   return  parseInt(start, 10) -  parseInt(end,10);
}


function getperiod(sec){
    if(secondAfy(08,00,00) <=sec){
        Passing = true
        passingnum = 0;
    }
    if(secondAfy(08,30,00) <= sec){
        Passing = false
        period = 1;
    }
    if(secondAfy(09,53,00) <= sec){
        Passing = true;
        passingnum = 1;
        period = 2;
    }
    if(secondAfy(10,03,00) <= sec){
        period = 2
        Passing = false
    }
    if(lunch == 'a'){
        if(secondAfy(11,25,00) <= sec){
            lunchtime = true;
            period = 3;
        }
        if(secondAfy(11,55,00) <= sec){
            passingnum = 'a';
            Passing = true;
            period = 3;
        }
        if(secondAfy(12,05,00) <= sec){
            period = 3;
        }
    }
    if(lunch == 'b'){
        if(secondAfy(11,25,00) <= sec){
            lunchtime = false
            Passing = true;
            passingnum = 2;
            period = 3;
        }
        if(secondAfy(11,35,00) <= sec){
            Passing = false
            period = 3;
            periodsub = 'bbl';
        }
        if(secondAfy(11,55,00) <= sec){
            lunchtime = true;
            period = 3
        }
        if(secondAfy(12,25,00) <= sec){
            lunchtime = false;
            Passing = true;
            passingnum = 'b';
            period = 3;
            periodsub = 'abl';
        }
        if(secondAfy(12,30,00) <= sec){
            period = 3;
            periodsub = 'abl';
        }
    }
    if(lunch == 'c'){
        if(secondAfy(11,25,00) <= sec ){
            lunchtime = false
            Passing = true;
            passingnum = 2;
            period = 3;
        }
        if(secondAfy(11,35,00) <= sec){
            Passing = false;
            period = 3;
            periodsub = 'bcl';
        }
        if(secondAfy(12,25,00) <= sec ){
            lunchtime = true;
            period = 3;
        }
        if(secondAfy(12,55,00) <= sec){
            lunchtime = false
            Passing = true; 
            passingnum = 'c';
            period = 3;
            periodsub  = 'acl'
        }
        if(secondAfy(13,00,00) <= sec){
            period = 3
            periodsub = 'acl';
        }
    }
    if(lunch == 'd'){
        if(secondAfy(11,25,00) <= sec ){
            lunchtime = false
            Passing = true;
            passingnum = 2;
            period = 3;
        }
        if(secondAfy(11,35,00) <= sec){
            Passing = false;
            period = 3
            periodsub = 'bdl'
        }
        if(secondAfy(12,25,00) <= sec){
            lunchtime = true;
        }
        
    }
    if(secondAfy(13,28,00) <= sec){
            lunchtime = false
            passingnum = 3
            Passing = true;
            period = 4;
        }
    if(secondAfy(13,38,00) <= sec){
        Passing = false
        period = 4
    }

    if(secondAfy(15,00,00) < sec || sec > secondAfy(00,00,00) && sec < secondAfy(8,00,00)){
        endofday = true;
        period = 0;
    }
}

function updatescreen(p,time,l,msg){
    //period func
    if(endofday == false){
        var percent = Math.abs((current-(end-start)) /(end - start)*100) + '%';
    }else{
        var percent = '100%';
    }
    if(day == 0 || endofday == true){
        $('#clock').css('display', 'none');
        $('#time-till-end').css('font-size', '50px');
        if(!$('.time-till-end').hasClass('end')){
            $('#time-till-end').addClass('end')
        }
    }else{
        $('#clock').css('display', 'flex');
        $('#time-till-end').css('font-size', '32px');
        $('#time-till-end').removeClass('end')
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
    $('.clockprogress').css('width', percent);
    $('#info').text(msg);
    $('#time-till-end').text(time);
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
    if(input == 'var'){
        var local = localStorage.getItem('setup')
        if(local == '2'){
            var l = localStorage.getItem('lunch')
            $('.lunch'+l).addClass('activecircle');
            $('.lunch'+l).toggleClass('hoveraffect');
            return localStorage.getItem('lunch');
        }else{
            localStorage.setItem('setup',2);
            localStorage.setItem('lunch', 'a');
            $('.luncha').addClass('activecircle');
            $('.luncha').toggleClass('hoveraffect');
            return 'a';
        }
    }else{
        if(input != lunch){
        $('.lunch'+lunch).toggleClass('activecircle');
        $('.lunch'+lunch).toggleClass('hoveraffect');
        $('.lunch'+input).toggleClass('activecircle');
        $('.lunch'+input).toggleClass('hoveraffect');
        lunch = input;
        localStorage.setItem('lunch', lunch)
        }
    }
    
}

function clockAfy(timein){
    return timein.substring(0,2) + ':' + timein.substring(2,4) + ':' + timein.substring(4,6)
}