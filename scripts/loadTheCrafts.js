// JavaScript Document

var craftsArray = new Array();
function loadTheCrafts(xml)
{
	//alert('loadTheCrafts function running');
	var craftCount = 0;
	$(xml).find("craft").each(function(){
		//alert(craftCount);
		craftsArray[craftCount] = new Array(3);
		craftsArray[craftCount][0]=$(this).find('girlName').text();
		craftsArray[craftCount][1]=$(this).find('craftTitle').text();
		craftsArray[craftCount][2]=$(this).find('imageSmall').text();
		var craftTitle = craftsArray[craftCount][1];
		var imageSmall = craftsArray[craftCount][2];
		$('#craftsList').append('<div class="smallCraftBox"><a href="theartcraft.htm?craft='+craftTitle+'"><div class="craftThumbnail" id="craft'+craftCount+'"><!-- craft image small --></div>'+craftTitle+'</a></div>');
		$('#craft'+craftCount).css('background', 'url('+imageSmall+') no-repeat');
		
		var craftBreak = craftCount+1;
		if(craftBreak%4==0)
		{
		$('#craftsList').append('<div class="linebreak"><!-- break every 4 crafts --></div>');			
		}
	craftCount++;
	});
}