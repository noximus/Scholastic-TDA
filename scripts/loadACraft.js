// JavaScript Document

function loadACraft(xml)
{
	//alert('loadACraft function running');
	var urlTitle = jQuery.url.param("craft");
	//alert(urlTitle);
	var craftCount = 0;
	$(xml).find("craft").each(function(){
		var craftNumber = craftCount+1;
		var template = $(this).find('template').text();
		var craftTitle = $(this).find('craftTitle').text();
		var download = $(this).find('download').text();
		var imageLarge = $(this).find('imageLarge').text();
		var description = $(this).find('description').text();
		var directions = $(this).find('directions').text();
		var source = $(this).find('source').text();		
			
		if(urlTitle == craftTitle){			
			if( template == 2 ){
				$('#theCraft').html('<div id="actionBoxes"></div>');				
				$('#actionBoxes').append('<div id="btnDnldRecipe"><a href="'+download+'" target="_blank"><span class="noCss">Download this Recipe</span></a></div>');
				$('#actionBoxes').append('<div id="btnSnd2Friend"><a href="#" onclick="pacEmailCallout();return false;"><span class="noCss">Send to a Friend</span></a></div>');
				$('#theCraft').append('<h2 id="hdrTheRecipe">'+craftTitle+'</h2>');
				$('#theCraft').append('<div id="recipeDescription">'+description+'</div>');				
				$('#theCraft').append('<h3>Things You&rsquo;ll Need</h3>');				
				$('#theCraft').append('<ul id="listItems"></ul><div style="clear:right"><!-- clear the floats --></div>');
					var itemCount = 0;
					$(this).find("item").each(function(){
						var thisItem = $(this).text();
						$('#listItems').append('<li>'+thisItem+'</li>');
						itemCount++;
					});					
				$('#theCraft').append('<h3>Directions:</h3>');				
				$('#theCraft').append('<div id="stepsBox"></div>');	
					var stepCount = 1;
					$(this).find("step").each(function(){
							var stepImage = $(this).attr('image');
							var stepText = $(this).text();
							//alert(stepImage+'<--stepimage and steptext--> '+stepText);			
						$('#stepsBox').append('<div class="eachStep" id="step'+stepCount+'"></div>');
						$('#step'+stepCount).append('<div class="stepText">'+stepText+'</div>');
						$('#step'+stepCount).append('<img src="'+stepImage+'" alt="Step '+stepCount+'" id="step'+stepCount+'image">');
						$('#stepsBox').append('<div class="rightSeparator"><!-- clear the images --></div>');
						stepCount++;
					});								
				$('#theCraft').append('<div id="recipeSource">Source: <span>'+source+'</span></div>');
			}
			else {
				$('#theCraft').html('<div id="actionBoxes"></div>');				
				$('#actionBoxes').append('<div id="btnDnldRecipe"><a href="'+download+'" target="_blank"><span class="noCss">Download this Recipe</span></a></div>');
				$('#actionBoxes').append('<div id="btnSnd2Friend"><a href="#" onclick="pacEmailCallout();return false;"><span class="noCss">Send to a Friend</span></a></div>');
				$('#theCraft').append('<h2 id="hdrTheRecipe">'+craftTitle+'</h2>');
				$('#theCraft').append('<div id="recipeDescription">'+description+'</div>');				
				$('#theCraft').append('<h3>Things You&rsquo;ll Need</h3>');				
				$('#theCraft').append('<ul id="listItems"></ul><div style="clear:right"><!-- clear the floats --></div>');
					var itemCount = 0;
					$(this).find("item").each(function(){
						var thisItem = $(this).text();
						$('#listItems').append('<li>'+thisItem+'</li>');
						itemCount++;
					});					
				$('#theCraft').append('<h3>Directions:</h3>');
				$('#theCraft').append('<div id="txtDirections">'+directions+'</div>');
				$('#theCraft').append('<div id="recipeSource"><span>'+source+'</span></div>');			
			}			
		}			
	craftCount++;
	});
}
