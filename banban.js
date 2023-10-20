$('#search-btn').click(function(){
	$('.search_form').toggle('active');
});

var about = document.getElementById("about");
var img = document.getElementById("img");
var text = document.getElementById("text");
about.addEventListener("mouseover",function(){
	img.style.opacity = "0.3";
	text.style.color = "#ED6D00";
	text.style.fontSize = "32"+"px";
})
about.addEventListener("mouseout",function(){
	img.style.opacity = "0.8";
	text.style.color = "#000";
	text.style.fontSize = "30"+"px";
})