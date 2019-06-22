$(document).ready(function(){
	var fadeDuration = 400;				//Durée en millisecondes de l'animation
	var idleDuration = 1000;			//Durée en millisecondes du temps d'affichage
	var selectorParent = ".slider";		//Sélecteur parent
	var selectorLine = ".moving";		//Sélecteur pour les éléments à afficher
	$(document.body).append(
		"<"+"style>"+
		selectorParent + 
		"{"+
		"width:" + ($(selectorParent + " > " + selectorLine).length * $(selectorParent + " > " + selectorLine).width()) + "px;"+
		"height:" + $(selectorParent + " > " + selectorLine).height() + "px" +
		"}" + 
		"<" + "/style>"
	);
	var parents = $(selectorParent);
	var f = function(parent){
		var i = 0; t = null;
		var show;
		show = function(){
			var length = $(parent).find(" > " + selectorLine).length;
			if(i==length - 1){
				$(parent).css("left",$(selectorParent + " > " + selectorLine).width()+"px");
				console.log("i:",i);
				i = -1;
			}
			i++;
			$(parent).animate({left: (-$(selectorParent + " > " + selectorLine).width() * i) + 'px'}, fadeDuration);
			t = setTimeout(show, idleDuration);
		};
		show();
		
	};
	for(var j=0; j < parents.length; j++){		//Gestion de multiples galleries
		var e = $(parents[j]);
		f(e);
	};
});
