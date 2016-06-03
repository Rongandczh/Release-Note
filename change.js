$(function(){
	
	var lang = window.navigator.userLanguage||window.navigator.language;
	var relang = lang.toLowerCase();
	switch(relang){
	
		case "zh-tw":
		$("#ch").load("201507230.html");
		break;
	
		default:
		$("#ch").load("201508110.html");

	}

} );