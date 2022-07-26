$(document).ready(function(){

	// Start Back To Top
	$(".btn-backtotops").hide();
	$(window).scroll(function(){
		const getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 400){
			$(".btn-backtotops").fadeIn(1000);
		}else{
			$(".btn-backtotops").fadeOut(1000);
		}

	});
	// End Back To Top

	// Start Header

		// Start Nav

		$(".navbuttons").click(function(){
			$(this).toggleClass("crossxs");
		});

		// End Nav

		// for nav
		$(window).scroll(function(){
			let getscrolltop = $(this).scrollTop();
			// console.log(getscrolltop);

			if(getscrolltop >= 200){
				$(".navbar").addClass("navmenus");
			}else{
				$(".navbar").removeClass("navmenus");
			}
		});

	// End Header

	// Start Properties

	$(".propertylists").click(function(){

		// for activeitems

		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass("activeitems");
		$(this).addClass("activeitems").siblings().removeClass("activeitems");


		// for filter

		let getattvalue = $(this).attr("data-filter");
		// console.log(getattvalue);

		if(getattvalue === "all"){
			$(".filters").show("explode",1000);
		}else{
			$(".filters").hide();
			$(".filters").not("."+getattvalue).hide("explode",1000);
			$(".filters").filter("."+getattvalue).show("explode",1000);
		}

	});

	// For image overlay (or) lightbox2
	lightbox.option({
		showImageNumberLabel:false
	})

	// End Properties



	// Start Adv Section 

	$(window).scroll(function(){

		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 900){
			$(".advimages").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}else{
			$(".advimages").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}

	});

	// End Adv Section



	// Start Footer
	const getyear = $("#getyear");
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End Footer

});