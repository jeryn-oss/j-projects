var _0x1a5f43=_0x301b;(function(_0x5a46d5,_0x3c634c){var _0x432eb5=_0x301b,_0xd37e06=_0x5a46d5();while(!![]){try{var _0x3a8239=-parseInt(_0x432eb5(0x1a4))/0x1*(-parseInt(_0x432eb5(0x1b6))/0x2)+parseInt(_0x432eb5(0x1c0))/0x3*(-parseInt(_0x432eb5(0x1cb))/0x4)+-parseInt(_0x432eb5(0x190))/0x5*(parseInt(_0x432eb5(0x1a1))/0x6)+-parseInt(_0x432eb5(0x17d))/0x7*(-parseInt(_0x432eb5(0x1ee))/0x8)+-parseInt(_0x432eb5(0x1c7))/0x9*(-parseInt(_0x432eb5(0x1a3))/0xa)+-parseInt(_0x432eb5(0x192))/0xb+parseInt(_0x432eb5(0x186))/0xc*(parseInt(_0x432eb5(0x1e7))/0xd);if(_0x3a8239===_0x3c634c)break;else _0xd37e06['push'](_0xd37e06['shift']());}catch(_0xe97c6f){_0xd37e06['push'](_0xd37e06['shift']());}}}(_0x37d6,0xbd95b));var currentcolor=setColor(_0x1a5f43(0x18a)),colorPicker=new iro[(_0x1a5f43(0x19e))]('#picker',{'width':0x96,'color':currentcolor});$(function(){var _0x2c505b=_0x1a5f43;for(var _0x374127=0x1;_0x374127<=0xc;_0x374127++){$(_0x2c505b(0x19c)+_0x374127)[_0x2c505b(0x1b9)]('background',$(_0x2c505b(0x19c)+_0x374127)['prop'](_0x2c505b(0x1b8)));}}),colorPicker['on']('color:change',function(_0x147726){var _0x1365e3=_0x1a5f43;setColor(_0x147726[_0x1365e3(0x1d0)]);});var time;const t=setInterval(clock,0xb4);var period=0x0,Passing,day=0x1,progresstheme=progressSet(_0x1a5f43(0x19f)),lunch=lunchfunc(_0x1a5f43(0x1a5)),background=backgroundw(_0x1a5f43(0x19f)),lunchtime=![],start,current,end,endofday=![],passingnum=0x0,mintest=0x19,hourtest=0xb,periodsub,days={'Aug':{0x9:0x1,0xa:0x2,0xb:0x1,0xc:0x2,0xd:0x0,0xe:0x0,0xf:0x1,0x10:0x2,0x11:0x1,0x12:0x2,0x13:0x1,0x14:0x0,0x15:0x0,0x16:0x2,0x17:0x1,0x18:0x2,0x19:0x1,0x1a:0x2,0x1b:0x0,0x1c:0x0,0x1d:0x1,0x1e:0x2,0x1f:0x1},'Sep':{0x1:0x2,0x2:0x1,0x3:0x0,0x4:0x0,0x5:0x3,0x6:0x2,0x7:0x1,0x8:0x2,0x9:0x1,0xa:0x0,0xb:0x0,0xc:0x2,0xd:0x1,0xe:0x2,0xf:0x1,0x10:0x2,0x11:0x0,0x12:0x0,0x13:0x1,0x14:0x2,0x15:0x1,0x16:0x2,0x17:0x1,0x18:0x0,0x19:0x0,0x1a:0x2,0x1b:0x1,0x1c:0x2,0x1d:0x1,0x1e:0x4},'Oct':{0x1:0x2,0x2:0x1,0x3:0x2,0x4:0x1,0x5:0x0,0x6:0x0,0x7:0x2,0x8:0x1,0x9:0x2,0xa:0x1,0xb:0x2,0xc:0x0,0xd:0x0,0xe:0x1,0xf:0x2,0x10:0x1,0x11:0x2,0x12:0x1,0x13:0x0,0x14:0x0,0x15:0x2,0x16:0x1,0x17:0x5,0x18:0x5,0x19:0x5,0x1a:0x0,0x1b:0x0,0x1c:0x2,0x1d:0x1,0x1e:0x2},'Dec':{0x1:0x1,0x2:0x2,0x3:0x0,0x4:0x0,0x5:0x1,0x6:0x2,0x7:0x1,0x8:0x2,0x9:0x1,0xa:0x0,0xb:0x0,0xc:0x2,0xd:0x1,0xe:0x2,0xf:0x1,0x10:0x2,0x11:0x5,0x12:0x5,0x13:0x5,0x14:0x5,0x15:0x5,0x16:0x5,0x17:0x5,0x18:0x5,0x19:0x5,0x1a:0x5,0x1b:0x5,0x1c:0x5,0x1d:0x5,0x1e:0x5,0x1f:0x5},'Jan':{0x1:0x5,0x2:0x5,0x3:0x5,0x4:0x5,0x5:0x1,0x6:0x2,0x7:0x0,0x8:0x0,0x9:0x1,0xa:0x2,0xb:0x1,0xc:0x2,0xd:0x1,0xe:0x0,0xf:0x0,0x10:0x3,0x11:0x2,0x12:0x1,0x13:0x2,0x14:0x1,0x15:0x0,0x16:0x0,0x17:0x2,0x18:0x1,0x19:0x2,0x1a:0x1,0x1b:0x2,0x1c:0x0,0x1d:0x0,0x1e:0x1,0x1f:0x2},'Feb':{0x1:0x1,0x2:0x2,0x3:0x1,0x4:0x0,0x5:0x0,0x6:0x2,0x7:0x1,0x8:0x2,0x9:0x1,0xa:0x2,0xb:0x0,0xc:0x0,0xd:0x1,0xe:0x2,0xf:0x1,0x10:0x2,0x11:0x1}},colorview=0x0;day=getdaynum(),startloader();function startloader(){setInterval(()=>{var _0x9bf5e7=_0x301b;$(_0x9bf5e7(0x1c2))[_0x9bf5e7(0x1b9)](_0x9bf5e7(0x19a),0x0),setInterval(()=>{var _0x4922c8=_0x9bf5e7;$(_0x4922c8(0x1c2))[_0x4922c8(0x187)](_0x4922c8(0x198))&&$(_0x4922c8(0x1c2))[_0x4922c8(0x180)](_0x4922c8(0x198));},0x190);},0xbb8);}getdaynum();function getdaynum(){var _0x16b289=_0x1a5f43,_0x4ab362=moment()[_0x16b289(0x183)](_0x16b289(0x199)),_0x5673e5=moment()[_0x16b289(0x183)]('D'),_0x43e9a1=days[_0x4ab362][_0x5673e5];return _0x43e9a1;}function _0x37d6(){var _0x55d601=['ColorPicker','get','.forest','24eiEOFk','.base','770210LOIUnN','676297OjGQlj','var','end','Weekend\x20Baby!','Lunch\x20starts\x20in','50px','currenttheme','.period3','.period1','hoveraffect','mountain-app','School\x27s\x20Out','text','active','hhmmssa','no-repeat','.luncha','url(/img/forest.jpg)','2NfkEmb','.period4','title','css','.mountain-ice','.period6','url(/img/mountain2.jpg)','activecircle','.period7','activeback','414516JTGFIE','#day1','.loader','.period2','abl','html','#time-till-end','18WCMbka','setItem','bcl','body','24RLgnps','.item','.period8','100%','lunch','hexString','bbl','boxshadow','.period5','verifytheme','.periodcircles','mountain-ice','.mountain-app','url(/img/mountain.jpg)','click','lunch\x20starts\x20in','toggleClass','.clockprogress','.selector3','addClass','.clockbar','.time-till-end','display','School\x20starts\x20in','#info','setup','#DC6985','setupcolor','26923peqZii','40px','bdl','Lunch\x20ends\x20in','removeItem','Passing\x20period\x20ends\x20in','.selector1','117448leyTcv','Period\x20ends\x20in','acl','abs','substring','28PgFVhk','width','font-size','removeClass','none','color','format','center','--firstcolor','13476ebAQYE','hasClass','.pickerholder','Holiday\x20Baby!','start','activeselector','.lunch','#day2','base','.colorbtn','761370vaWtzy','Pathways\x20A\x20ends\x20in','11001419mcVPGo','var(--backgroundcolor)','path2','getItem','cover','var(--firstcolor)','loadview','MMM','opacity','Pathways\x20B\x20ends\x20in','.colorcircle','background'];_0x37d6=function(){return _0x55d601;};return _0x37d6();}function clock(){var _0x67677c=_0x1a5f43;time=moment()[_0x67677c(0x183)](_0x67677c(0x1b2));var _0x579947=secondAfy(time[_0x67677c(0x17c)](0x0,0x2),time['substring'](0x2,0x4),time[_0x67677c(0x17c)](0x4,0x6),time[_0x67677c(0x17c)](0x6,0x8));calc(_0x579947);}function calc(_0x15147b){var _0xcd236f=_0x1a5f43;if(day==0x1||day==0x2){getperiod(_0x15147b);if(endofday==!![])updatescreen(period,clockAfy(time),lunch,_0xcd236f(0x1af));else{if(Passing==!![]){if(passingnum==0x0)start=secondAfy(0x8,0x0,0x0),end=secondAfy(0x8,0x1e,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1e2)),current<=0x0&&(Passing=![]);else{if(passingnum==0x1)start=secondAfy(0x9,0x39,0x0),end=secondAfy(0xa,0x5,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'Passing\x20period\x20ends\x20in'),current<=0x0&&(Passing=![]);else{if(passingnum==0x2)start=secondAfy(0xb,0x1c,0x0),end=secondAfy(0xb,0x24,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'Passing\x20period\x20ends\x20in'),current<=0x0&&(Passing=![]);else{if(passingnum=='a')start=secondAfy(0xb,0x3a,0x0),end=secondAfy(0xc,0x6,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'Passing\x20period\x20ends\x20in'),current<=0x0&&(Passing=![]);else{if(passingnum=='b')start=secondAfy(0xc,0x1c,0x0),end=secondAfy(0xc,0x21,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'Passing\x20period\x20ends\x20in'),current<=0x0&&(Passing=![]);else{if(passingnum=='c')start=secondAfy(0xc,0x3a,0x0),end=secondAfy(0xd,0x3,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ec)),current<=0x0&&(Passing=![]);else{if(passingnum==0x3)start=secondAfy(0xd,0x1d,0x0),end=secondAfy(0xd,0x25,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ec)),current<=0x0&&(Passing=![]);else passingnum==_0xcd236f(0x194)&&(start=secondAfy(0xd,0x16,0x0),end=secondAfy(0xd,0x1d,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ec)),current<=0x0&&(Passing=![]));}}}}}}}if(lunchtime==!![]){if(lunch=='a'){if(secondAfy(0xb,0x3a,0x0)>=_0x15147b&&_0x15147b>=secondAfy(0xb,0x1c,0x0))start=secondAfy(0xb,0x1c,0x0),end=secondAfy(0xb,0x3a,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ea));else lunchtime=![];}if(lunch=='b'){if(secondAfy(0xb,0x3a,0x0)<=_0x15147b&&_0x15147b<=secondAfy(0xc,0x1c,0x0))start=secondAfy(0xb,0x3a,0x0),end=secondAfy(0xc,0x1c,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'Lunch\x20ends\x20in');else lunchtime=![];}if(lunch=='c'){if(secondAfy(0xc,0x1c,0x0)<=_0x15147b&&_0x15147b<=secondAfy(0xc,0x3a,0x0))start=secondAfy(0xc,0x1c,0x0),end=secondAfy(0xc,0x3a,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ea));else lunchtime=![];}if(lunch=='d'){if(secondAfy(0xc,0x3b,0x0)<=_0x15147b&&_0x15147b<=secondAfy(0xd,0x1d,0x0))start=secondAfy(0xc,0x3b,0x0),end=secondAfy(0xd,0x1d,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'Lunch\x20ends\x20in');else lunchtime=![];}}if(Passing!=!![]){period=='p1'&&(start=secondAfy(0xd,0x25,0x0),end=secondAfy(0xe,0x16,0x0),current=sub(_0x15147b,end),updatescreen(0x1,timeAfy(current),lunch,_0xcd236f(0x191)));period=='p2'&&(start=secondAfy(0xe,0x1d,0x0),end=secondAfy(0xf,0x0,0x0),current=sub(_0x15147b,end),updatescreen(0x1,timeAfy(current),lunch,_0xcd236f(0x19b)));period==0x1&&(start=secondAfy(0x8,0x1e,0x0),end=secondAfy(0x9,0x39,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ef)));period==0x2&&(lunch=='a'?(start=secondAfy(0xa,0x5,0x0),end=secondAfy(0xb,0x1c,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'lunch\x20starts\x20in')):(start=secondAfy(0xa,0x5,0x0),end=secondAfy(0xb,0x1c,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ef))));if(lunchtime!=!![]){if(lunch=='a')period==0x3&&(start=secondAfy(0xc,0x6,0x0),end=secondAfy(0xd,0x1d,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ef)));else{if(lunch=='b'){if(period==0x3){if(periodsub==_0xcd236f(0x1d1))start=secondAfy(0xb,0x24,0x0),end=secondAfy(0xb,0x3a,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1a8));else periodsub=='abl'&&(start=secondAfy(0xc,0x21,0x0),end=secondAfy(0xd,0x1d,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ef)));}}else{if(lunch=='c'||lunch=='d'){if(period==0x3){if(periodsub==_0xcd236f(0x1c9))start=secondAfy(0xb,0x24,0x0),end=secondAfy(0xc,0x1c,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1a8));else{if(periodsub=='acl')start=secondAfy(0xd,0x3,0x0),end=secondAfy(0xd,0x1d,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1ef));else periodsub==_0xcd236f(0x1e9)&&(start=secondAfy(0xb,0x24,0x0),end=secondAfy(0xc,0x3b,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,_0xcd236f(0x1da)));}}}}}}period==0x4&&(start=secondAfy(0xd,0x25,0x0),end=secondAfy(0xf,0x0,0x0),current=sub(_0x15147b,end),updatescreen(period,timeAfy(current),lunch,'School\x20ends\x20in'));}}}else day==0x0&&updatescreen(period,clockAfy(time),lunch,_0xcd236f(0x1a7));if(day==0x4)updatescreen(period,clockAfy(time),lunch,'Eleaning\x20Day!');else{if(day==0x5)updatescreen(period,clockAfy(time),lunch,_0xcd236f(0x189));else day!=0x1&&day!=0x2&&updatescreen(period,clockAfy(time),lunch,'School\x20is\x20not\x20in\x20session');}}function sub(_0x1a6a8e,_0x204eeb){return parseInt(_0x204eeb,0xa)-parseInt(_0x1a6a8e,0xa);}function getperiod(_0x44971d){var _0x5b868a=_0x1a5f43;secondAfy(0x8,0x0,0x0)<=_0x44971d&&(Passing=!![],passingnum=0x0),secondAfy(0x8,0x1e,0x0)<=_0x44971d&&(Passing=![],period=0x1),secondAfy(0x9,0x39,0x0)<=_0x44971d&&(Passing=!![],passingnum=0x1,period=0x2),secondAfy(0xa,0x5,0x0)<=_0x44971d&&(period=0x2,Passing=![]),lunch=='a'&&(secondAfy(0xb,0x1c,0x0)<=_0x44971d&&(lunchtime=!![],period=0x3),secondAfy(0xb,0x3a,0x0)<=_0x44971d&&(passingnum='a',Passing=!![],period=0x3),secondAfy(0xc,0x6,0x0)<=_0x44971d&&(period=0x3)),lunch=='b'&&(secondAfy(0xb,0x1c,0x0)<=_0x44971d&&(lunchtime=![],Passing=!![],passingnum=0x2,period=0x3),secondAfy(0xb,0x24,0x0)<=_0x44971d&&(Passing=![],period=0x3,periodsub=_0x5b868a(0x1d1)),secondAfy(0xb,0x3a,0x0)<=_0x44971d&&(lunchtime=!![],period=0x3),secondAfy(0xc,0x1c,0x0)<=_0x44971d&&(lunchtime=![],Passing=!![],passingnum='b',period=0x3,periodsub=_0x5b868a(0x1c4)),secondAfy(0xc,0x21,0x0)<=_0x44971d&&(period=0x3,periodsub=_0x5b868a(0x1c4))),lunch=='c'&&(secondAfy(0xb,0x1c,0x0)<=_0x44971d&&(lunchtime=![],Passing=!![],passingnum=0x2,period=0x3),secondAfy(0xb,0x24,0x0)<=_0x44971d&&(Passing=![],period=0x3,periodsub=_0x5b868a(0x1c9)),secondAfy(0xc,0x1c,0x0)<=_0x44971d&&(lunchtime=!![],period=0x3),secondAfy(0xc,0x3a,0x0)<=_0x44971d&&(lunchtime=![],Passing=!![],passingnum='c',period=0x3,periodsub=_0x5b868a(0x1f0)),secondAfy(0xd,0x3,0x0)<=_0x44971d&&(period=0x3,periodsub=_0x5b868a(0x1f0))),lunch=='d'&&(secondAfy(0xb,0x1c,0x0)<=_0x44971d&&(lunchtime=![],Passing=!![],passingnum=0x2,period=0x3),secondAfy(0xb,0x24,0x0)<=_0x44971d&&(Passing=![],period=0x3,periodsub='bdl'),secondAfy(0xc,0x3b,0x0)<=_0x44971d&&(lunchtime=!![])),secondAfy(0xd,0x1d,0x0)<=_0x44971d&&(lunchtime=![],passingnum=0x3,Passing=!![],period=0x4),day==0x2?(secondAfy(0xd,0x25,0x0)<=_0x44971d&&(Passing=![],period='p1'),secondAfy(0xe,0x16,0x0)<=_0x44971d&&(Passing=!![],passingnum=_0x5b868a(0x194),period='p2'),secondAfy(0xe,0x1e,0x0)<=_0x44971d&&(Passing=![],period='p2')):secondAfy(0xd,0x25,0x0)<=_0x44971d&&(Passing=![],period=0x4),(secondAfy(0xf,0x0,0x0)<_0x44971d||_0x44971d>secondAfy(0x0,0x0,0x0)&&_0x44971d<secondAfy(0x8,0x0,0x0))&&(endofday=!![],period=0x0);}function updatescreen(_0x2657c4,_0x1ada78,_0x12d613,_0x1817ad){var _0xe6c35f=_0x1a5f43;if(endofday==![])var _0x466112=Math[_0xe6c35f(0x17b)]((current-(end-start))/(end-start)*0x64)+'%';else var _0x466112=_0xe6c35f(0x1ce);day==0x0||endofday==!![]?($('#clock')[_0xe6c35f(0x1b9)](_0xe6c35f(0x1e1),_0xe6c35f(0x181)),$(_0xe6c35f(0x1c6))['css'](_0xe6c35f(0x182),_0xe6c35f(0x197)),$(_0xe6c35f(0x1c6))['css'](_0xe6c35f(0x17f),_0xe6c35f(0x1a9)),!$(_0xe6c35f(0x1e0))[_0xe6c35f(0x187)](_0xe6c35f(0x1a6))&&$(_0xe6c35f(0x1c6))[_0xe6c35f(0x1de)](_0xe6c35f(0x1a6)),!$(_0xe6c35f(0x1e3))[_0xe6c35f(0x187)](_0xe6c35f(0x1a6))&&$('#info')[_0xe6c35f(0x1de)]('end')):($('#time-till-end')[_0xe6c35f(0x1b9)]('color',$(_0xe6c35f(0x1c5))[_0xe6c35f(0x1b9)]('--basetext')),$('#clock')[_0xe6c35f(0x1b9)]('display','flex'),$(_0xe6c35f(0x1c6))[_0xe6c35f(0x1b9)]('font-size',_0xe6c35f(0x1e8)),$(_0xe6c35f(0x1c6))[_0xe6c35f(0x180)](_0xe6c35f(0x1a6)),$(_0xe6c35f(0x1e3))[_0xe6c35f(0x180)]('end')),day==0x1&&(!$(_0xe6c35f(0x1c1))[_0xe6c35f(0x187)]('active')&&$(_0xe6c35f(0x1c1))['toggleClass'](_0xe6c35f(0x1b1)),_0x2657c4==0x1&&(!$('.period1')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1c3))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1c3))['toggleClass']('activecircle'),$('.period3')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ab))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1b7))[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1d3))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1d3))['toggleClass'](_0xe6c35f(0x1bd)),$('.period6')[_0xe6c35f(0x187)]('activecircle')&&$('.period6')[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1be))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1cd))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)]('activecircle')),_0x2657c4==0x2&&($(_0xe6c35f(0x1ac))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),!$('.period2')['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1c3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ab))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period4')[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1d3))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period5')[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1bb))['hasClass'](_0xe6c35f(0x1bd))&&$('.period6')[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1be))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1cd))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)]('activecircle')),_0x2657c4==0x3&&($('.period1')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1c3))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1c3))['toggleClass'](_0xe6c35f(0x1bd)),!$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period3')[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1b7))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1d3))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1d3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1bb))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period6')[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1be))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$('.period8')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)]('activecircle')),_0x2657c4==0x4&&($(_0xe6c35f(0x1ac))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1c3))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1c3))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period3')[_0xe6c35f(0x1db)]('activecircle'),!$(_0xe6c35f(0x1b7))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1b7))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1d3))[_0xe6c35f(0x187)]('activecircle')&&$('.period5')[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1bb))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1bb))[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period7')['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1cd))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)))),day==0x2&&(!$(_0xe6c35f(0x18d))[_0xe6c35f(0x187)](_0xe6c35f(0x1b1))&&$(_0xe6c35f(0x18d))[_0xe6c35f(0x1db)](_0xe6c35f(0x1b1)),_0x2657c4==0x1&&($(_0xe6c35f(0x1ac))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1c3))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1c3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ab))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1b7))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),!$(_0xe6c35f(0x1d3))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1d3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1bb))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1bb))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1be))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1cd))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd))),_0x2657c4==0x2&&($('.period1')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1c3))[_0xe6c35f(0x187)]('activecircle')&&$('.period2')[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ab))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period4')[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$('.period5')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period5')[_0xe6c35f(0x1db)]('activecircle'),!$('.period6')['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1bb))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$('.period7')['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1be))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1cd))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)]('activecircle')),_0x2657c4==0x3&&($(_0xe6c35f(0x1ac))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1c3))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1c3))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1ab))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1b7))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1d3))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1d3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$('.period6')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1bb))['toggleClass'](_0xe6c35f(0x1bd)),!$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1be))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$('.period8')[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd))),_0x2657c4==0x4&&($(_0xe6c35f(0x1ac))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ac))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1c3))[_0xe6c35f(0x187)]('activecircle')&&$(_0xe6c35f(0x1c3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1ab))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1ab))['toggleClass'](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1b7))['hasClass'](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1b7))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1d3))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1d3))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)),$(_0xe6c35f(0x1bb))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$('.period6')[_0xe6c35f(0x1db)]('activecircle'),$(_0xe6c35f(0x1be))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1be))[_0xe6c35f(0x1db)]('activecircle'),!$(_0xe6c35f(0x1cd))[_0xe6c35f(0x187)](_0xe6c35f(0x1bd))&&$(_0xe6c35f(0x1cd))[_0xe6c35f(0x1db)](_0xe6c35f(0x1bd)))),$(_0xe6c35f(0x1dc))[_0xe6c35f(0x1b9)](_0xe6c35f(0x17e),_0x466112),$('#info')[_0xe6c35f(0x1b0)](_0x1817ad),$(_0xe6c35f(0x1c6))[_0xe6c35f(0x1b0)](_0x1ada78);}function timeAfy(_0x587de2){var _0x58d494=function(_0x2ec434){return _0x2ec434<0xa?'0'+_0x2ec434:_0x2ec434;};return _0x58d494(parseInt(_0x587de2/(0x3c*0x3c)))+':'+_0x58d494(parseInt(_0x587de2/0x3c%0x3c))+':'+_0x58d494(_0x587de2%0x3c);}function _0x301b(_0x35d665,_0x371af3){var _0x37d6c7=_0x37d6();return _0x301b=function(_0x301b87,_0x1369ba){_0x301b87=_0x301b87-0x17b;var _0x247992=_0x37d6c7[_0x301b87];return _0x247992;},_0x301b(_0x35d665,_0x371af3);}function secondAfy(_0x5af5cd,_0x1b1f4b,_0x362606,_0xc42c98){var _0x38ae04;if(_0xc42c98=='am')_0x5af5cd==0xc?_0x38ae04=0x0:_0x38ae04=_0x5af5cd*0x3c*0x3c;else _0xc42c98=='pm'?_0x5af5cd==0xc?_0x38ae04=0xc*0x3c*0x3c:_0x38ae04=+(parseInt(_0x5af5cd,0xa)+ +0xc)*0x3c*0x3c:_0x38ae04=_0x5af5cd*0x3c*0x3c;var _0x4f39c2=_0x1b1f4b*0x3c,_0x39b11e=_0x362606,_0x251d11=parseInt(_0x38ae04,0xa)+parseInt(_0x4f39c2,0xa)+parseInt(_0x39b11e,0xa);return _0x251d11;}function lunchfunc(_0x38795b){var _0x5530f0=_0x1a5f43;if(_0x38795b==_0x5530f0(0x1a5)){var _0x14197c=localStorage[_0x5530f0(0x195)](_0x5530f0(0x1e4));if(_0x14197c=='2'){var _0x439b0d=localStorage[_0x5530f0(0x195)](_0x5530f0(0x1cf));return $(_0x5530f0(0x18c)+_0x439b0d)[_0x5530f0(0x1de)](_0x5530f0(0x1bd)),$('.lunch'+_0x439b0d)[_0x5530f0(0x1db)](_0x5530f0(0x1ad)),localStorage[_0x5530f0(0x195)](_0x5530f0(0x1cf));}else return localStorage[_0x5530f0(0x1c8)](_0x5530f0(0x1e4),0x2),localStorage['setItem']('lunch','a'),$(_0x5530f0(0x1b4))[_0x5530f0(0x1de)](_0x5530f0(0x1bd)),$(_0x5530f0(0x1b4))[_0x5530f0(0x1db)]('hoveraffect'),'a';}else _0x38795b!=lunch&&($('.lunch'+lunch)[_0x5530f0(0x1db)](_0x5530f0(0x1bd)),$(_0x5530f0(0x18c)+lunch)[_0x5530f0(0x1db)](_0x5530f0(0x1ad)),$('.lunch'+_0x38795b)['toggleClass']('activecircle'),$(_0x5530f0(0x18c)+_0x38795b)[_0x5530f0(0x1db)](_0x5530f0(0x1ad)),lunch=_0x38795b,localStorage['setItem'](_0x5530f0(0x1cf),lunch));}function clockAfy(_0x4bbd54){var _0x46e003=_0x1a5f43;return _0x4bbd54[_0x46e003(0x17c)](0x0,0x2)+':'+_0x4bbd54['substring'](0x2,0x4)+':'+_0x4bbd54[_0x46e003(0x17c)](0x4,0x6);}function opencolor(_0x5c86cc){var _0x5f30a4=_0x1a5f43;_0x5c86cc==_0x5f30a4(0x1d9)&&colorview==0x1&&($('.colorbtn')[_0x5f30a4(0x180)](_0x5f30a4(0x1b1)),$(_0x5f30a4(0x188))[_0x5f30a4(0x180)]('active'),colorview=0x0),colorview==0x0?($(_0x5f30a4(0x18f))[_0x5f30a4(0x1de)](_0x5f30a4(0x1b1)),$('.pickerholder')[_0x5f30a4(0x1de)](_0x5f30a4(0x1b1)),colorview=0x1):($(_0x5f30a4(0x18f))[_0x5f30a4(0x180)](_0x5f30a4(0x1b1)),$(_0x5f30a4(0x188))['removeClass']('active'),colorview=0x0);}function setColor(_0x193dc5){var _0x14dd3e=_0x1a5f43;return _0x193dc5==_0x14dd3e(0x18a)?getColor():($(_0x14dd3e(0x1c5))[_0x14dd3e(0x1b9)](_0x14dd3e(0x185),_0x193dc5),localStorage[_0x14dd3e(0x1c8)](_0x14dd3e(0x182),_0x193dc5),_0x193dc5);}function getColor(){var _0x485f34=_0x1a5f43,_0x1c4447=localStorage[_0x485f34(0x195)]('setupcolor');return _0x1c4447==0x2?($('html')[_0x485f34(0x1b9)](_0x485f34(0x185),localStorage[_0x485f34(0x195)](_0x485f34(0x182))),localStorage['getItem']('color')):(localStorage[_0x485f34(0x1c8)](_0x485f34(0x1e6),0x2),localStorage[_0x485f34(0x1c8)](_0x485f34(0x182),_0x485f34(0x1e5)),_0x485f34(0x1e5));}function progressSet(_0x5ce547){var _0x59d07c=_0x1a5f43;_0x5ce547!=progresstheme&&_0x5ce547!='get'&&(!$(progresstheme)[_0x59d07c(0x187)]('no')&&($(progresstheme)[_0x59d07c(0x180)]('activeselector'),$(progresstheme)['addClass']('no'),$(_0x5ce547)[_0x59d07c(0x180)]('no'),$(_0x5ce547)['addClass'](_0x59d07c(0x18b)),progresstheme=_0x5ce547,localStorage['setItem']('currenttheme',_0x5ce547)),_0x5ce547==_0x59d07c(0x1ed)&&($('.item')[_0x59d07c(0x1de)](_0x59d07c(0x1d2)),$(_0x59d07c(0x1d5))[_0x59d07c(0x1de)]('boxshadow'),$(_0x59d07c(0x188))[_0x59d07c(0x1de)](_0x59d07c(0x1d2)),$('.colorbtn')[_0x59d07c(0x1de)](_0x59d07c(0x1d2)),$(_0x59d07c(0x1df))[_0x59d07c(0x1de)](_0x59d07c(0x1d2)),$(_0x59d07c(0x1dc))[_0x59d07c(0x1de)](_0x59d07c(0x1d2))),_0x5ce547==_0x59d07c(0x1dd)&&($(_0x59d07c(0x1cc))[_0x59d07c(0x180)](_0x59d07c(0x1d2)),$(_0x59d07c(0x1d5))['removeClass']('boxshadow'),$(_0x59d07c(0x188))[_0x59d07c(0x180)]('boxshadow'),$(_0x59d07c(0x18f))['removeClass'](_0x59d07c(0x1d2)),$(_0x59d07c(0x1df))['removeClass'](_0x59d07c(0x1d2)),$(_0x59d07c(0x1dc))[_0x59d07c(0x180)]('boxshadow')));if(_0x5ce547==_0x59d07c(0x19f)){var _0x541a6d=localStorage[_0x59d07c(0x195)](_0x59d07c(0x1d4));return _0x541a6d=='true'?(setprogress(localStorage['getItem'](_0x59d07c(0x1aa))),localStorage[_0x59d07c(0x195)]('currenttheme')):(localStorage[_0x59d07c(0x1c8)]('verifytheme',!![]),localStorage[_0x59d07c(0x1c8)](_0x59d07c(0x1aa),_0x59d07c(0x1dd)),setprogress(_0x59d07c(0x1dd)),localStorage[_0x59d07c(0x195)](_0x59d07c(0x1aa)));}}function setprogress(_0x10953a){var _0x5476f4=_0x1a5f43;$(_0x10953a)[_0x5476f4(0x1de)](_0x5476f4(0x18b)),$(_0x10953a)[_0x5476f4(0x180)]('no'),_0x10953a==_0x5476f4(0x1ed)&&($(_0x5476f4(0x1cc))[_0x5476f4(0x1de)](_0x5476f4(0x1d2)),$(_0x5476f4(0x1d5))[_0x5476f4(0x1de)](_0x5476f4(0x1d2)),$(_0x5476f4(0x188))[_0x5476f4(0x1de)](_0x5476f4(0x1d2)),$('.colorbtn')['addClass'](_0x5476f4(0x1d2)),$('.clockbar')['addClass'](_0x5476f4(0x1d2)),$(_0x5476f4(0x1dc))[_0x5476f4(0x1de)](_0x5476f4(0x1d2)));}function backgroundw(_0x1b743e){var _0x18bc31=_0x1a5f43;if(_0x1b743e==_0x18bc31(0x19f)){var _0x3c2650=localStorage['getItem'](_0x18bc31(0x19d));if(_0x3c2650){if(_0x3c2650=='base')$('body')['css'](_0x18bc31(0x19d),'var(--backgroundcolor)'),$(_0x18bc31(0x1a2))['addClass']('activeback');else{if(_0x3c2650==_0x18bc31(0x1d6))$('body')[_0x18bc31(0x1b9)]({'background':_0x18bc31(0x1d8),'background-size':_0x18bc31(0x196),'background-repeat':_0x18bc31(0x1b3),'background-position':_0x18bc31(0x184)}),$(_0x18bc31(0x1ba))[_0x18bc31(0x1de)](_0x18bc31(0x1bf));else{if(_0x3c2650==_0x18bc31(0x1ae))$(_0x18bc31(0x1ca))[_0x18bc31(0x1b9)]({'background':_0x18bc31(0x1bc),'background-size':'cover','background-repeat':'no-repeat','background-position':_0x18bc31(0x184)}),$(_0x18bc31(0x1d7))[_0x18bc31(0x1de)](_0x18bc31(0x1bf));else _0x3c2650=='forest'?($(_0x18bc31(0x1ca))[_0x18bc31(0x1b9)]({'background':_0x18bc31(0x1b5),'background-size':'cover','background-repeat':_0x18bc31(0x1b3),'background-position':_0x18bc31(0x184)}),$(_0x18bc31(0x1a0))[_0x18bc31(0x1de)]('activeback')):(localStorage[_0x18bc31(0x1eb)](_0x18bc31(0x19d)),localStorage['removeItem']('setupbackground'),localStorage[_0x18bc31(0x1c8)]('setupbackground','base'),$('body')[_0x18bc31(0x1b9)](_0x18bc31(0x19d),_0x18bc31(0x193)),$(_0x18bc31(0x1a2))[_0x18bc31(0x1de)](_0x18bc31(0x1bf)));}}}else localStorage[_0x18bc31(0x1c8)]('background','base');}else{localStorage['setItem'](_0x18bc31(0x19d),_0x1b743e);if(_0x1b743e==_0x18bc31(0x18e))$(_0x18bc31(0x1ca))[_0x18bc31(0x1b9)](_0x18bc31(0x19d),_0x18bc31(0x193)),$(_0x18bc31(0x1ba))[_0x18bc31(0x187)](_0x18bc31(0x1bf))&&$(_0x18bc31(0x1ba))[_0x18bc31(0x180)]('activeback'),$(_0x18bc31(0x1d7))[_0x18bc31(0x187)]('activeback')&&$(_0x18bc31(0x1d7))[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$(_0x18bc31(0x1a0))['hasClass']('activeback')&&$(_0x18bc31(0x1a0))[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$('.base')[_0x18bc31(0x1de)](_0x18bc31(0x1bf));else{if(_0x1b743e==_0x18bc31(0x1d6))$(_0x18bc31(0x1ca))['css']({'background':_0x18bc31(0x1d8),'background-size':'cover','background-repeat':_0x18bc31(0x1b3),'background-position':_0x18bc31(0x184)}),$(_0x18bc31(0x1a2))[_0x18bc31(0x187)]('activeback')&&$(_0x18bc31(0x1a2))[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$('.mountain-app')[_0x18bc31(0x187)](_0x18bc31(0x1bf))&&$(_0x18bc31(0x1d7))[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$(_0x18bc31(0x1a0))[_0x18bc31(0x187)](_0x18bc31(0x1bf))&&$('.forest')[_0x18bc31(0x180)]('activeback'),$(_0x18bc31(0x1ba))[_0x18bc31(0x1de)](_0x18bc31(0x1bf));else{if(_0x1b743e==_0x18bc31(0x1ae))$(_0x18bc31(0x1ca))[_0x18bc31(0x1b9)]({'background':_0x18bc31(0x1bc),'background-size':_0x18bc31(0x196),'background-repeat':_0x18bc31(0x1b3),'background-position':'center'}),$(_0x18bc31(0x1a2))['hasClass']('activeback')&&$(_0x18bc31(0x1a2))[_0x18bc31(0x180)]('activeback'),$(_0x18bc31(0x1ba))[_0x18bc31(0x187)](_0x18bc31(0x1bf))&&$('.mountain-ice')[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$(_0x18bc31(0x1a0))[_0x18bc31(0x187)]('activeback')&&$(_0x18bc31(0x1a0))['removeClass'](_0x18bc31(0x1bf)),$(_0x18bc31(0x1d7))['addClass'](_0x18bc31(0x1bf));else _0x1b743e=='forest'&&($(_0x18bc31(0x1ca))[_0x18bc31(0x1b9)]({'background':_0x18bc31(0x1b5),'background-size':_0x18bc31(0x196),'background-repeat':_0x18bc31(0x1b3),'background-position':_0x18bc31(0x184)}),$(_0x18bc31(0x1a2))[_0x18bc31(0x187)](_0x18bc31(0x1bf))&&$(_0x18bc31(0x1a2))[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$(_0x18bc31(0x1ba))[_0x18bc31(0x187)]('activeback')&&$(_0x18bc31(0x1ba))['removeClass'](_0x18bc31(0x1bf)),$(_0x18bc31(0x1d7))['hasClass'](_0x18bc31(0x1bf))&&$(_0x18bc31(0x1d7))[_0x18bc31(0x180)](_0x18bc31(0x1bf)),$(_0x18bc31(0x1a0))['addClass'](_0x18bc31(0x1bf)));}}}}