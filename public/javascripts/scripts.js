$( document ).ready(function() {
	// $("#btn_store").click(function(e){
	// 	e.preventDefault();
	// 	$("div#storemenu").toggle();
	// });
	
	// show hide store menu
	$("#btn_store")
		.mouseenter(function(e){
			$("div#storemenu").show();
		})
	$("#div#storemenu")
		.mouseleave(function(e){
			$("div#storemenu").hide();
		})

	// menu hover
	$("div#storemenu table tr td a img")
		.mouseenter(function(e){
			// console.log("mouseenter: ", this);
			$(this).attr("src", function(index, attr){
				return attr.replace("off", "on");
			});
		})
		.mouseleave(function(e){
			// console.log("mouseleave: ", this);
			$(this).attr("src", function(index, attr){
				return attr.replace("on", "off");
			});
		});
});