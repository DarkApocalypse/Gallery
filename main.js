$(document).ready(function(){
	var fadeDuration=400;
	var idleDuration=1000;
	var selectorParent=".apocalypse-gallery tbody";
	var selectorLine="tr";
	var parents=$(selectorParent);
	var f=function(parent){
		var i=0;
		t=null;
		var show;
		show=function(){
			var length=$(parent).find(selectorLine).length;
			if(i==length-1){
				$(parent).css("left",$(parent).find(selectorLine).width()+"px");
				console.log("i:",i);
				i=-1;
			}
			i++;
			$(parent).animate({
				"left":(-$(parent).find(selectorLine).width()*i)+'px'
			},fadeDuration);
			t=setTimeout(show,idleDuration);
		};
		show();
	};
	var css="";
	for(var j=0;j<parents.length;j++){
		var e=$(parents[j]);
		e.addClass("gallery-"+j);
		f(e);
		css+=(
			selectorParent+".gallery-"+j+
			"{"+"width:"+(e.find(selectorLine).length*e.find(selectorLine).width())+"px;"+"height:"+e.find(selectorLine).height()+"px"+"}"
		);
	};
	$(document.body).append("<"+"style>"+css+"<"+"/style>");
});
