// JavaScript Document

var recipesArray = new Array();
function loadARecipe(xml)
{
	//alert('loadARecipe function running');
	var urlTitle = jQuery.url.param("recipe");
	var recipeCount = 0;
	$(xml).find("recipe").each(function(){
		var recipeNumber = recipeCount+1;
		recipesArray[recipeCount] = new Array(9);
		recipesArray[recipeCount][0]=$(this).find('girlName').text();
		recipesArray[recipeCount][1]=$(this).find('recipeTitle').text();
		recipesArray[recipeCount][2]=$(this).find('download').text();
		recipesArray[recipeCount][3]=$(this).find('imageLarge').text();
		recipesArray[recipeCount][4]=$(this).find('description').text();
		recipesArray[recipeCount][5]=$(this).find('servingsize').text();
		recipesArray[recipeCount][6]=$(this).find('directions').text();
		recipesArray[recipeCount][7]=$(this).find('source').text();
		
		var recipeTitle = recipesArray[recipeCount][1];
		var download = recipesArray[recipeCount][2];
		var imageLarge = recipesArray[recipeCount][3];
		var description = recipesArray[recipeCount][4];
		var servingsize = recipesArray[recipeCount][5];
		var directions = recipesArray[recipeCount][6];
		var source = recipesArray[recipeCount][7];		
			
		if(urlTitle == recipeTitle){
			$('#theRecipe').html('<div id="actionBoxes"><div id="btnDnldRecipe"><a href="'+download+'" target="_blank"><span class="noCss">Download this Recipe</span></a></div><div id="btnSnd2Friend"><a href="#" onclick="pacEmailCallout(); return false;"><span class="noCss">Send to a Friend</span></a></div></div><h2 id="hdrTheRecipe">'+recipeTitle+'</h2><div id="recipeDescription">'+description+'</div><div id="imgRecipePhoto"><img src="'+imageLarge+'" alt="'+recipeTitle+'" /></div><h3>Ingredients You&rsquo;ll Need</h3><ul id="listIngredients"></ul><div id="servingSize">'+servingsize+'</div><div style="clear:right"><!-- clear the floats --></div><h3>Directions:</h3><div id="txtDirections">'+directions+'</div><div id="recipeSource"><span>'+source+'</span></div>');
			var ingredientCount = 0;
			recipesArray[recipeCount][8] = new Array();
			$(this).find("ingredient").each(function(){
				recipesArray[recipeCount][8][ingredientCount]=$(this).text();
				var thisIngredient = recipesArray[recipeCount][8][ingredientCount];
				$('#listIngredients').append('<li>'+thisIngredient+'</li>');
				ingredientCount++;
			});
		}			
	recipeCount++;
	});
}
