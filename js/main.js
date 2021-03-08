/* loading */ 
var btns = document.getElementsByName("cbxbtn")
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var nowbtni = 0;
var oldbtni = nowbtni
var rotateArr= ["90deg","75deg","55deg","265deg","250deg","220deg"]
var counter1Arr =[16,16,16,10,10,10]
var counter2Arr = [253,248,220,661,633,590]
var counter3Arr = [24,24,24,20,20,20]
var counter4Arr = [42,41,37,110,105,98]
var counterArr =[counter1Arr,counter2Arr,counter3Arr,counter4Arr]
var ani20;
var ani24;
var ani2024;
var coin42,coin41,coin37,coin110,coin105,coin98
let titletext = baffle('#title p');
titletext.set({
    speed: 100,
});
var tl = new TimelineLite(),
	loading = $("#loading");
tl
	.to(ldcoin1,1.2,{morphSVG:"#ldcoin2",ease:Back.easeOut},"+=1")
	.to(ldcoin1,1.2,{morphSVG:"#ldcoin1",ease:Back.easeOut},"+=1")
	.to(loading,1.2,{scale:0.3,ease:Expo.easeIn,autoAlpha:0},"-=0.5")
	.to(ldbg,1.2,{autoAlpha:0,ease:Back.easeIn},"-=1")
	.fromTo(".bg-l",2,{scaleY:0},{scaleY:1,ease:Power2.easeIn,onComplete:function(){
		$(".bg-l").css("transition","2s")
	}},"-=1")
	
	.fromTo(".tagsec",1.5,{autoAlpha:0,y:20},{autoAlpha:1,y:0,ease: Back.easeOut},"-=0.5")
	.fromTo("#coin",1.5,{autoAlpha:0,y:50},{autoAlpha:1,y:0,ease: Back.easeOut.config(1.7),onComplete:function(){
		$("#coin").css("transition","2s  ease 0.5s")
		setTimeout(function(){
			
			$("#bgimgnow").addClass("hide")
			setTimeout(function(){TweenMax.to("#bgimgnext",0.5,{autoAlpha:1})},0)
		},1000)
	}},"-=1.5")
	.fromTo("#stamp",1.5,{autoAlpha:0,y:20},{autoAlpha:1,y:0,ease: Back.easeOut,onComplete:function(){
		$("#stamp").css("transition","2s")
		
		
	}},"-=0.5")
	.staggerFromTo(".cbxlabel",1.5,{opacity:0,x:6,y:12},{opacity:1,x:0,y:0,ease: Back.easeOut,onComplete:function(){
		$(".cbxlabel").css("transition","2s")
		$('.counter').each(function() {
			var $this = $(this);
			var id = $this.attr("id");
			var arri;
			switch(id){
				 case "counter1":
				 arri = 0;
				 break;
				 case "counter2":
				 arri = 1;
				 break;
				 case "counter3":
				 arri = 2;
				 break;
				 case "counter4":
				 arri = 3;
				 break;
			}
			$({ countNum: $this.text()}).delay("1000").animate(
				 {
					countNum: 
					counterArr[arri][nowbtni]
				},
				{
					duration: 2000,
					easing:'linear',
					step: function() {
					  $this.text(Math.floor(this.countNum));
					},
					complete: function() {
					  $this.text(this.countNum);
					}
				});  
			});

	}},0.17,"-=1")
	.fromTo(".ver",2,{scaleY:0},{scaleY:1},"-=0.5")
	.fromTo("#page1",2,{autoAlpha: 0,x: 15},{autoAlpha: 1,x: 0,ease: Power1.easeOut,onComplete:function(){
			ani24 = bodymovin.loadAnimation({
				container:document.getElementById("bm-m-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/24.json"
			})
			coin42 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/42.json"
			})
	}},"-=2")
	.fromTo("#backfo",2,{scaleX:0},{scaleX:1},"-=1.5")
	.to("#backfo",2,{opacity:1,onComplete:function(){
		$(".ndanimation").css("animation-delay","1s")
	}})
	.from(".click-line",1.5,{autoAlpha:0,scaleY:0.7,ease:Expo.ease},"-=1")
	.fromTo(".click-line h6",2,{autoAlpha:0,y:-10},{autoAlpha:1,y:0},"-=3")


setTimeout(function(){lottie.play(ani24)},2000)



/* 页面初始counter */

var transArr = [trans1,trans2,trans3,trans4,trans5,trans6]
var titleP = ["秦代衡制","西汉衡制","东汉衡制","唐代衡制","宋元衡制","明清衡制"]
var mainBottomP =["&nbsp;&nbsp;&nbsp;&nbsp;在秦统一六国之前，各国钱币的形状不一，如铲币、刀币、环钱等，且只能在各自统辖的范围内流通；秦始皇在统一六国后，确定统一法律、度量衡、货币和文字，废止了战国后期六国旧钱，在战国秦半两钱的基础上加以改进，圆形方孔的秦半两钱在全国通行，结束了我国古代货币形状各异、重量悬殊的杂乱状态。","&nbsp;&nbsp;&nbsp;&nbsp;五铢钱重五铢，上有“五铢”二字，故名。五铢钱是我国钱币史上使用时间最长的货币，先后有10多个王朝和政权、20多个帝王铸行过五铢钱。西汉元狩五年，五铢钱率先在中原发行，至唐武德四年隋五铢废除，五铢钱历经沧桑700多年。","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五铢钱重五铢，上有“五铢”二字，故名。五铢钱是我国钱币史上使用时间最长的货币，先后有10多个王朝和政权、20多个帝王铸行过五铢钱。西汉元狩五年，五铢钱率先在中原发行，至唐武德四年隋五铢废除，五铢钱历经沧桑700多年。","&nbsp;&nbsp;&nbsp;&nbsp;开元通宝为唐代货币。钱币在唐代始有“通宝”。唐初沿用隋五铢，轻小淆杂。唐高祖武德四年，为整治混乱的币制，废隋钱，效仿西汉五铢的严格规范，开铸“开元通宝”，取代社会上遗存的五铢。","&nbsp;&nbsp;&nbsp;&nbsp;北宋货币大观通宝，是由徽宗御题钱文。宋代与历朝有所不同，每换一种年号就开炉铸新币，若年号与宝文相重，则更铸非年号钱。终宋三百年，通行以小平折二钱为主，其间也有大钱流通、钱币的轮廓，尺寸都有一定标准。因此宋钱版别极多，历代罕有，钱文除真、草、隶、篆，行外，还有便是北宋徽宗的“玉划银勾”瘦金体。","&nbsp;&nbsp;&nbsp;&nbsp;铜元俗称铜板，是清末以来所铸各种新式铜币的通称。铜元是我国近代货币体系的重要组成部分。我国铜元诞生于清光绪十五年（1889年），它是我国钱币史上“机制币”的开端。铜元中间无孔，系仿照香港铜辅币铸造而成，因此外观与历代的方孔铜钱不同。铜元的诞生标志着我国金属货币铸造工艺从传统的手工翻砂铸造进入了先进的机器化生产的新阶段。"]


Switch(btn1);
Switch(btn2);
Switch(btn3);
Switch(btn4);
Switch(btn5);
Switch(btn6);


/* 页面switch */
function Switch(btn){
	btn.onclick = function(){

		if(btn.checked){
			for(var i=0; i<btns.length ; i++){
				btns[i].checked = false;
			}
			btn.checked = "checked";
			for(var i=0 ; i<btns.length; i++){
				if(btns[i].checked){
					nowbtni = i
				}
			}
		}else{btn.checked = "checked"}
		document.documentElement.style.setProperty("--ndinit", rotateArr[oldbtni]);
		document.documentElement.style.setProperty("--ndrotate", rotateArr[nowbtni]);
		TweenLite.to("#page1",1.5,{autoAlpha: 1,x: 0,delay:0.8})
		TweenLite.to(oldbtni==1?"#page2":"#page3",1,{autoAlpha: 0,x: 0})

		$("#needle").removeClass("ndanimation");
		setTimeout(function(){
			$("#needle").addClass("ndanimation")
		},0)
		transArr[nowbtni]();
		
		TweenLite.fromTo("#title p", 1,{webkitFilter:'blur(0px)'},{webkitFilter:'blur(0px)',ease: Expo.easeIn,onComplete: 
			function () {
				titletext.start()
				TweenLite.to("#title p",1, {autoAlpha: 1,webkitFilter: 'blur(0px)',y: 0});
            	// $("#title p")[0].innerHTML = titleP[nowbtni];
            	titletext.text(currentText => titleP[nowbtni]);
            	
            	titletext.reveal(1000,300)
				
			} 
		});
		
		document.documentElement.style.setProperty('--bgimgnow', "url(../images/bg"+(oldbtni+1)+".jpg)");
		document.documentElement.style.setProperty('--bgimgnext', "url(../images/bg"+(nowbtni+1)+".jpg)");

		$("#bgimgnow").removeClass("hide");
			setTimeout(function(){
				$("#bgimgnow").addClass("hide")
			},0)
		if(backfolbs[1].className == "lbunche"){
			TweenLite.fromTo(".main-bottom p", 2,{autoAlpha: 1,y: 0 },{autoAlpha: 0,x: -10,ease: Expo.easeIn,onComplete:
				function () {
        	     $(".main-bottom p")[0].innerHTML = mainBottomP[nowbtni];
				TweenLite.to(".main-bottom p", 1.5, {autoAlpha: 1,filter: 'blur(0px)',x: 0,delay: 0.1 });
				} 
			});	
		}
	

		$('.counter').each(function() {
  			var $this = $(this);
  			var id = $this.attr("id");
  			var arri;
  			switch(id){
   				 case "counter1":
   				 arri = 0;
   				 break;
   				 case "counter2":
   				 arri = 1;
   				 break;
   				 case "counter3":
   				 arri = 2;
   				 break;
   				 case "counter4":
   				 arri = 3;
   				 break;
   			}
   	
  		$({ countNum:
  			counterArr[arri][oldbtni]
  		}).delay("1000").animate(
 			 {
   				 countNum: 
   				 counterArr[arri][nowbtni]
  			},

  			{
    			duration: 1000,
    			easing:'linear',
    			step: function() {
    			  $this.text(Math.floor(this.countNum));
    			},
    			complete: function() {
    			  $this.text(this.countNum);
    			}
  			});  
		});

		if(oldbtni<=2 && nowbtni >=3){
			$("#tag-r p").removeClass("scrollback");

			setTimeout(function(){
				$("#tag-r p").addClass("scroll")
			},0)
			if(ani24){ani24.destroy()}
			if(ani2024){ani2024.destroy()}
			ani20 = bodymovin.loadAnimation({
				container:document.getElementById("bm-m-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/20.json"
			})
		}else if(oldbtni>=3 && nowbtni<=2){
			// $("#tag-r p").addClass("scrollback")
			// $("#tag-r p").removeClass("scroll")
			if(ani24){ani24.destroy()}
			if(ani20){ani20.destroy()}
			ani2024 = bodymovin.loadAnimation({
				container:document.getElementById("bm-m-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/20-24.json"
			})

			$("#tag-r p").removeClass("scroll")
			$("#tag-r p").css("transform","translate3D(0,-50%,0)")
			setTimeout(function(){
				$("#tag-r p").addClass("scrollback");
				setTimeout(function(){
					$("#tag-r p").css("transform","translate3D(0,0,0)")
				},0)
			},0)
		} 
		if(oldbtni<=0 && nowbtni >=1){
			$("#tag-l p").removeClass("scrollback");
			setTimeout(function(){
				$("#tag-l p").addClass("scroll")
			},0)
		}else if(oldbtni>=1 && nowbtni<=0){
			// $("#tag-r p").addClass("scrollback")
			// $("#tag-r p").removeClass("scroll")
			
			$("#tag-l p").removeClass("scroll")
			$("#tag-l p").css("transform","translate3D(0,-50%,0)")
			setTimeout(function(){
				$("#tag-l p").addClass("scrollback");
				setTimeout(function(){
					$("#tag-l p").css("transform","translate3D(0,0,0)")
				},0)
			},0)
		} 
		
		TweenMax.to("#bm-r-coin",1,{autoAlpha:0,onComplete:function(){
			if(coin42){coin42.destroy()}
			if(coin41){coin41.destroy()}
			if(coin37){coin37.destroy()}
			if(coin110){coin110.destroy()}
			if(coin105){coin105.destroy()}
			if(coin98){coin98.destroy()}
			TweenMax.to("#bm-r-coin",1,{autoAlpha:1});
			switch(nowbtni){
			case 0:
			coin42 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/42.json"
			});
			break;
			case 1:
			coin41 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/41.json"
			});
			break;
			case 2:
			coin37 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/37.json"
			});
			break;
			case 3:
			coin110 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/110.json"
			});
			break;
			case 4:
			coin105 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/105.json"
			});
			break;
			case 5:
			coin98 = bodymovin.loadAnimation({
				container:document.getElementById("bm-r-coin"),
				renderer:"svg",
				loop:false,
				autoplay:true,
				path:"json/98.json"
			});
			break;
		}

		}})
		







		backfocbxs[0].checked = true;
		backfolbs[0].className =  "lbche"
		backfocbxs[1].checked = false;
		backfolbs[1].className =  "lbunche"
		if(nowbtni !==1 &&nowbtni !==3){

			$("#backfo").addClass("off")
			$("#backfo").removeClass("on")
			
		}else if(nowbtni ==1 ||nowbtni ==3){
			setTimeout(function(){
				$("#backfo").removeClass("off");
			$("#backfo").addClass("on")
		},500)
		}

		// $("#bgimgnow").removeClass("hide")
		oldbtni = nowbtni;
	}
}

function trans1(){
	document.documentElement.style.setProperty('--color1', "#1a281e");
	document.documentElement.style.setProperty('--coin', "url('../images/1.png')");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp1.png)");
	document.documentElement.style.setProperty('--topcoin', "url(../images/top-l-coin1.png)");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp1.png)");
	
}

function trans2(){
	document.documentElement.style.setProperty('--color1', "#011f27");
	document.documentElement.style.setProperty('--coin', "url('../images/2.png')");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp2.png)");
	document.documentElement.style.setProperty('--topcoin', "url(../images/top-l-coin2.png)");
}
function trans3(){
	document.documentElement.style.setProperty('--color1', "#293a2e");
	document.documentElement.style.setProperty('--coin', "url('../images/3.png')");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp3.png)");
	document.documentElement.style.setProperty('--topcoin', "url(../images/top-l-coin3.png)");
}

function trans4(){
	document.documentElement.style.setProperty('--color1', "#270908");
	document.documentElement.style.setProperty('--coin', "url('../images/4.png')");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp4.png)");
	document.documentElement.style.setProperty('--topcoin', "url(../images/top-l-coin4.png)");
	
}

function trans5(){
	document.documentElement.style.setProperty('--color1', "#292d1e");
	document.documentElement.style.setProperty('--coin', "url('../images/5.png')");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp5.png)");
	document.documentElement.style.setProperty('--topcoin', "url(../images/top-l-coin5.png)");

}

function trans6(){
	document.documentElement.style.setProperty('--color1', "#48382d");
	document.documentElement.style.setProperty('--coin', "url('../images/6.png')");
	document.documentElement.style.setProperty('--stamp', "url(../images/stamp6.png)");
	document.documentElement.style.setProperty('--topcoin', "url(../images/top-l-coin6.png)");
}




/*  backfo transition  */ 
var backfolbs = document.getElementsByName('backfolb')
var backfocbxs = document.getElementsByName('backfocbx')
backfolbs[0].onclick = function(){

	backfolbs[0].className = backfocbxs[0].checked ?  "lbche":"lbunche"
	backfocbxs[1].checked = !backfocbxs[0].checked
	backfolbs[1].className = backfocbxs[1].checked ?  "lbche":"lbunche"
	var page1Load = new TimelineMax();
	page1Load
		.fromTo(nowbtni==1?"#page2":"#page3",1,{autoAlpha: 1,x: 0},{autoAlpha: 0,x: 15,ease: Sine.easeOut})
		.fromTo("#page1",2,{autoAlpha: 0,x: 15},{autoAlpha: 1,x: 0,ease:Expo.easeOut},"-=0.5");
}
backfolbs[1].onclick = function(){

	backfolbs[1].className = backfocbxs[1].checked ?  "lbche":"lbunche"
	backfocbxs[0].checked = !backfocbxs[1].checked
	backfolbs[0].className = backfocbxs[0].checked ?  "lbche":"lbunche"
	
	var page2Load = new TimelineMax();
	page2Load
		.fromTo("#page1",1,{autoAlpha: 1,x: 0},{autoAlpha: 0,x: 15,ease: Sine.easeOut})
		.fromTo(nowbtni==1?"#page2":"#page3",2,{autoAlpha: 0,x: 15},{autoAlpha: 1,x: 0,ease:Expo.easeOut},"-=0.5");
}





 