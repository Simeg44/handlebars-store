$(document).on('ready', function() {
  
	// Get html content of template
	var templateSource = $("#product-template").html();
	var template = Handlebars.compile(templateSource);

	var productOutput = template(productsData);
	$("#product-container").append(productOutput);
	/*productsData.productsList.map(function(product) {
		var productOutput = template(product);
		$("#product-container").append(productOutput);
	})*/
		
	// Add product to wishlist
	var wishlistSource = $("#wishlist-template").html();
	var wishTemplate = Handlebars.compile(wishlistSource);
	$(".product").on("click", "button", function() {
		var place = $(this).data("id");
		var addItem = wishTemplate(productsData.productsList[place]);
		$("#wishlist").append(addItem);
	})

	// Remove product from wishlist
	$("#wishlist").on("click", "button", function() {
		$(this).closest("#wishlist-item").remove();
	})

});