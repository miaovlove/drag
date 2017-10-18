// JavaScript Document
window.onload = function(){
	
	var oDiv = document.querySelector(".div1");
	drag(oDiv);
	
	}
	
	alert("");
	console.log("明天是美好的");
	

	function drag(obj){
		
		var dix=0;
		var diy=0;
		obj.onmousedown = function(ev){
			dix= ev.pageX-dix;
			
			diy=ev.pageY-diy;
			
			document.onmousemove = function(ev){
				obj.style.left=ev.pageX-dix+"px";
				
				obj.style.top= ev.pageY-diy+"px";
				}
				document.onmouseup = function(){
					
					document.onmousemove = null;
					
					document.onmouseup = null;}
					return false;
			}
		
		}