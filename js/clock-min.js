var time,currentcolor=setColor("start"),colorPicker=new iro.ColorPicker("#picker",{width:150,color:currentcolor});$((function(){for(var e=1;e<=12;e++)$(".colorcircle"+e).css("background",$(".colorcircle"+e).prop("title"))})),colorPicker.on("color:change",(function(e){setColor(e.hexString)}));const t=setInterval(clock,180);var Passing,start,current,end,periodsub,period=0,day=2,progresstheme=progressSet("get"),lunch=lunchfunc("var"),lunchtime=!1,endofday=!1,passingnum=0,mintest=25,hourtest=11;function startloader(){setInterval((()=>{$(".loader").css("opacity",0),setInterval((()=>{$(".loader").hasClass("loadview")&&$(".loader").removeClass("loadview")}),400)}),3e3)}function clock(){calc(secondAfy((time=moment().format("hhmmssa")).substring(0,2),time.substring(2,4),time.substring(4,6),time.substring(6,8)))}function calc(e){0!=day?(getperiod(e),1==endofday?updatescreen(period,clockAfy(time),lunch,"School's Out"):(1==Passing&&(0==passingnum?(start=secondAfy(8,0,0),end=secondAfy(8,30,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"School starts in"),current<=0&&(Passing=!1)):1==passingnum?(start=secondAfy(9,53,0),end=secondAfy(10,3,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1)):2==passingnum?(start=secondAfy(11,25,0),end=secondAfy(11,35,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1)):"a"==passingnum?(start=secondAfy(11,55,0),end=secondAfy(12,5,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1)):"b"==passingnum?(start=secondAfy(12,25,0),end=secondAfy(12,30,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1)):"c"==passingnum?(start=secondAfy(12,55,0),end=secondAfy(13,0,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1)):3==passingnum?(start=secondAfy(13,28,0),end=secondAfy(13,38,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1)):"path2"==passingnum&&(start=secondAfy(9,9,0),end=secondAfy(9,14,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Passing period ends in"),current<=0&&(Passing=!1))),1==lunchtime&&("a"==lunch&&(secondAfy(11,55,0)>=e&&e>=secondAfy(11,25,0)?(start=secondAfy(11,25,0),end=secondAfy(11,55,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Lunch ends in")):lunchtime=!1),"b"==lunch&&(secondAfy(11,55,0)<=e&&e<=secondAfy(12,25,0)?(start=secondAfy(11,55,0),end=secondAfy(12,25,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Lunch ends in")):lunchtime=!1),"c"==lunch&&(secondAfy(12,25,0)<=e&&e<=secondAfy(12,55,0)?(start=secondAfy(12,25,0),end=secondAfy(12,55,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Lunch ends in")):lunchtime=!1),"d"==lunch&&(secondAfy(12,55,0)<=e&&e<=secondAfy(13,28,0)?(start=secondAfy(12,58,0),end=secondAfy(13,28,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Lunch ends in")):lunchtime=!1)),1!=Passing&&("p1"==period&&(start=secondAfy(8,30,0),end=secondAfy(9,9,0),updatescreen(1,timeAfy(current=sub(e,end)),lunch,"Pathways A ends in")),"p2"==period&&(start=secondAfy(9,14,0),end=secondAfy(9,53,0),updatescreen(1,timeAfy(current=sub(e,end)),lunch,"Pathways B ends in")),1==period&&(start=secondAfy(8,30,0),end=secondAfy(9,53,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Period ends in")),2==period&&("a"==lunch?(start=secondAfy(10,3,0),end=secondAfy(11,25,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"lunch starts in")):(start=secondAfy(10,3,0),end=secondAfy(11,25,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Period ends in"))),1!=lunchtime&&("a"==lunch?3==period&&(start=secondAfy(12,5,0),end=secondAfy(13,28,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Period ends in")):"b"==lunch?3==period&&("bbl"==periodsub?(start=secondAfy(11,35,0),end=secondAfy(11,55,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Lunch starts in")):"abl"==periodsub&&(start=secondAfy(12,30,0),end=secondAfy(13,28,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Period ends in"))):"c"!=lunch&&"d"!=lunch||3==period&&("bcl"==periodsub?(start=secondAfy(11,35,0),end=secondAfy(12,25,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Lunch starts in")):"acl"==periodsub?(start=secondAfy(13,0,0),end=secondAfy(13,28,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"Period ends in")):"bdl"==periodsub&&(start=secondAfy(11,35,0),end=secondAfy(13,0,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"lunch starts in")))),4==period&&(start=secondAfy(13,38,0),end=secondAfy(15,0,0),current=sub(e,end),updatescreen(period,timeAfy(current),lunch,"School ends in"))))):updatescreen(period,clockAfy(time),lunch,"Weekend Baby!")}function sub(e,s){return parseInt(s,10)-parseInt(e,10)}function getperiod(e){secondAfy(8,0,0)<=e&&(Passing=!0,passingnum=0),2==day?(secondAfy(8,30,0)<=e&&(Passing=!1,period="p1"),secondAfy(9,9,0)<=e&&(Passing=!0,passingnum="path2",period="p2"),secondAfy(9,14,0)<=e&&(Passing=!1,period="p2")):secondAfy(8,30,0)<=e&&(Passing=!1,period=1),secondAfy(9,53,0)<=e&&(Passing=!0,passingnum=1,period=2),secondAfy(10,3,0)<=e&&(period=2,Passing=!1),"a"==lunch&&(secondAfy(11,25,0)<=e&&(lunchtime=!0,period=3),secondAfy(11,55,0)<=e&&(passingnum="a",Passing=!0,period=3),secondAfy(12,5,0)<=e&&(period=3)),"b"==lunch&&(secondAfy(11,25,0)<=e&&(lunchtime=!1,Passing=!0,passingnum=2,period=3),secondAfy(11,35,0)<=e&&(Passing=!1,period=3,periodsub="bbl"),secondAfy(11,55,0)<=e&&(lunchtime=!0,period=3),secondAfy(12,25,0)<=e&&(lunchtime=!1,Passing=!0,passingnum="b",period=3,periodsub="abl"),secondAfy(12,30,0)<=e&&(period=3,periodsub="abl")),"c"==lunch&&(secondAfy(11,25,0)<=e&&(lunchtime=!1,Passing=!0,passingnum=2,period=3),secondAfy(11,35,0)<=e&&(Passing=!1,period=3,periodsub="bcl"),secondAfy(12,25,0)<=e&&(lunchtime=!0,period=3),secondAfy(12,55,0)<=e&&(lunchtime=!1,Passing=!0,passingnum="c",period=3,periodsub="acl"),secondAfy(13,0,0)<=e&&(period=3,periodsub="acl")),"d"==lunch&&(secondAfy(11,25,0)<=e&&(lunchtime=!1,Passing=!0,passingnum=2,period=3),secondAfy(11,35,0)<=e&&(Passing=!1,period=3,periodsub="bdl"),secondAfy(12,58,0)<=e&&(lunchtime=!0)),secondAfy(13,28,0)<=e&&(lunchtime=!1,passingnum=3,Passing=!0,period=4),secondAfy(13,38,0)<=e&&(Passing=!1,period=4),(secondAfy(15,0,0)<e||e>secondAfy(0,0,0)&&e<secondAfy(8,0,0))&&(endofday=!0,period=0)}function updatescreen(e,s,c,r){if(0==endofday)var i=Math.abs((current-(end-start))/(end-start)*100)+"%";else i="100%";0==day||1==endofday?($("#clock").css("display","none"),$("#time-till-end").css("color","var(--firstcolor)"),$("#time-till-end").css("font-size","50px"),$(".time-till-end").hasClass("end")||$("#time-till-end").addClass("end"),$("#info").hasClass("end")||$("#info").addClass("end")):($("#time-till-end").css("color",$("html").css("--basetext")),$("#clock").css("display","flex"),$("#time-till-end").css("font-size","32px"),$("#time-till-end").removeClass("end"),$("#info").removeClass("end")),1==day&&($("#day1").hasClass("active")||$("#day1").toggleClass("active"),1==e&&($(".period1").hasClass("activecircle")||$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle")),2==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")||$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle")),3==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")||$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle")),4==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")||$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle"))),2==day&&($("#day2").hasClass("active")||$("#day2").toggleClass("active"),1==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")||$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle")),2==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")||$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle")),3==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")||$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")&&$(".period8").toggleClass("activecircle")),4==e&&($(".period1").hasClass("activecircle")&&$(".period1").toggleClass("activecircle"),$(".period2").hasClass("activecircle")&&$(".period2").toggleClass("activecircle"),$(".period3").hasClass("activecircle")&&$(".period3").toggleClass("activecircle"),$(".period4").hasClass("activecircle")&&$(".period4").toggleClass("activecircle"),$(".period5").hasClass("activecircle")&&$(".period5").toggleClass("activecircle"),$(".period6").hasClass("activecircle")&&$(".period6").toggleClass("activecircle"),$(".period7").hasClass("activecircle")&&$(".period7").toggleClass("activecircle"),$(".period8").hasClass("activecircle")||$(".period8").toggleClass("activecircle"))),$(".clockprogress").css("width",i),$("#info").text(r),$("#time-till-end").text(s)}function timeAfy(e){var s=function(e){return e<10?"0"+e:e};return s(parseInt(e/3600))+":"+s(parseInt(e/60%60))+":"+s(e%60)}function secondAfy(e,s,c,r){var i;i="am"==r?12==e?0:60*e*60:"pm"==r?12==e?43200:60*+(parseInt(e,10)+12)*60:60*e*60;var a=60*s,o=c;return parseInt(i,10)+parseInt(a,10)+parseInt(o,10)}function lunchfunc(e){if("var"==e){if("2"==localStorage.getItem("setup")){var s=localStorage.getItem("lunch");return $(".lunch"+s).addClass("activecircle"),$(".lunch"+s).toggleClass("hoveraffect"),localStorage.getItem("lunch")}return localStorage.setItem("setup",2),localStorage.setItem("lunch","a"),$(".luncha").addClass("activecircle"),$(".luncha").toggleClass("hoveraffect"),"a"}e!=lunch&&($(".lunch"+lunch).toggleClass("activecircle"),$(".lunch"+lunch).toggleClass("hoveraffect"),$(".lunch"+e).toggleClass("activecircle"),$(".lunch"+e).toggleClass("hoveraffect"),lunch=e,localStorage.setItem("lunch",lunch))}function clockAfy(e){return e.substring(0,2)+":"+e.substring(2,4)+":"+e.substring(4,6)}startloader();var colorview=0;function opencolor(){0==colorview?($(".colorbtn").addClass("active"),$(".pickerholder").addClass("active"),colorview=1):($(".colorbtn").removeClass("active"),$(".pickerholder").removeClass("active"),colorview=0)}function setColor(e){return"start"==e?getColor():($("html").css("--firstcolor",e),localStorage.setItem("color",e),e)}function getColor(){return 2==localStorage.getItem("setupcolor")?($("html").css("--firstcolor",localStorage.getItem("color")),localStorage.getItem("color")):(localStorage.setItem("setupcolor",2),localStorage.setItem("color","#DC6985"),"#DC6985")}function progressSet(e){if(e!=progresstheme&&"get"!=e&&($(progresstheme).hasClass("no")||($(progresstheme).removeClass("activeselector"),$(progresstheme).addClass("no"),$(e).removeClass("no"),$(e).addClass("activeselector"),progresstheme=e,localStorage.setItem("currenttheme",e)),".selector1"==e&&($(".item").addClass("boxshadow"),$(".periodcircles").addClass("boxshadow"),$(".pickerholder").addClass("boxshadow"),$(".colorbtn").addClass("boxshadow"),$(".clockbar").addClass("boxshadow"),$(".clockprogress").addClass("boxshadow")),".selector3"==e&&($(".item").removeClass("boxshadow"),$(".periodcircles").removeClass("boxshadow"),$(".pickerholder").removeClass("boxshadow"),$(".colorbtn").removeClass("boxshadow"),$(".clockbar").removeClass("boxshadow"),$(".clockprogress").removeClass("boxshadow"))),"get"==e)return"true"==localStorage.getItem("verifytheme")?(setprogress(localStorage.getItem("currenttheme")),localStorage.getItem("currenttheme")):(localStorage.setItem("verifytheme",!0),localStorage.setItem("currenttheme",".selector3"),setprogress(".selector3"),localStorage.getItem("currenttheme"))}function setprogress(e){$(e).addClass("activeselector"),$(e).removeClass("no"),".selector1"==e&&($(".item").addClass("boxshadow"),$(".periodcircles").addClass("boxshadow"),$(".pickerholder").addClass("boxshadow"),$(".colorbtn").addClass("boxshadow"),$(".clockbar").addClass("boxshadow"),$(".clockprogress").addClass("boxshadow"))}