$( document ).ready(function() {
	$("#btn_store").click(function(e){
		e.preventDefault();
		console.log("store button clicked...");
		$("div#storemenu").toggle();
	});

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