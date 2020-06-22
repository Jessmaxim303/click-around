$(document).ready(function(){

  // CONTRACTOR ONLY SECTION

// Icon active state
  $(".project-active").click(function(){
		$(".buildings-icon-container > div > img").css("display", "none")
		$(".buildings-icon-container > div > img:even").toggle()
		$(".project-active").removeClass("active-state")
		$(this).addClass("active-state")
		$(this).find('img').toggle()

$(this).addClass("white")

  })// project-active



});//jquery
