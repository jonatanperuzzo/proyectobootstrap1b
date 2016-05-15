$(document).ready(function(){
	$("#objeto1, #objeto2, #objeto3, #objeto4, #objeto5, #objeto6").hover(function(){
		$(this).css({"border" : "2px solid #1E90FF",
					"box-shadow" : "5px 5px 10px #1E90FF"
			});
	}, function(){
		$(this).css({"border" : "1px solid #CCCCCC",
					"box-shadow" : "0px 0px 0px #CCCCCC"});
	});
});