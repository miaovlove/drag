// JavaScript Document
window.onload = function(){
	
	var oDiv = document.querySelector(".div1");
	drag(oDiv);
	
	}
	
	function drag(obj){
		
		var dix=0;
		var diy=0;
		obj.onmousedown = function(ev){
			var ev = ev||window.event;
			
			dix= ev.clientX-dix;
			
			diy=ev.clientY-diy;
			
			document.onmousemove = function(ev){
				var ev = ev||window.event;
				
				obj.style.left=ev.clientX-dix+"px";
				
				obj.style.top= ev.clientY-diy+"px";
				}
				document.onmouseup = function(){
					
					document.onmousemove = null;
					
					document.onmouseup = null;}
					return false;
			}
		
		}