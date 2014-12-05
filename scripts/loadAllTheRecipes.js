// JavaScript Document

var recipesArray = new Array();
function loadTheRecipes(xml)
{
	//alert('loadTheRecipes function running');
	var recipeCount = 0;
	$(xml).find("recipe").each(function(){
		//alert(recipeCount);
		recipesArray[recipeCount] = new Array(3);
		recipesArray[recipeCount][0]=$(this).find('girlName').text();
		recipesArray[recipeCount][1]=$(this).find('recipeTitle').text();
		recipesArray[recipeCount][2]=$(this).find('imageSmall').text();
		var recipeTitle = recipesArray[recipeCount][1];
		var imageSmall = recipesArray[recipeCount][2];
		$('#recipesList').append('<div class="smallRecipeBox"><a href="therecipe.htm?recipe='+recipeTitle+'"><div class="recipeThumbnail" id="recipe'+recipeCount+'"><!-- recipe image small --></div>'+recipeTitle+'</a></div>');
		$('#recipe'+recipeCount).css('background', 'url('+imageSmall+') no-repeat');
		
		var recipeBreak = recipeCount+1;
		if(recipeBreak%4==0)
		{
		$('#recipesList').append('<div class="linebreak"><!-- break every 4 recipes --></div>');			
		}

	recipeCount++;
	});
}