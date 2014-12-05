// JavaScript Document


var scrapbooksArray = new Array();
function loadAllScrapbooks(xml)
{
	var scrapbookCount = 0;
	$(xml).find("scrapbook").each(function(){
	scrapbooksArray[scrapbookCount] = new Array(7);
		scrapbooksArray[scrapbookCount][0]=$(this).attr('name');
		scrapbooksArray[scrapbookCount][1]=$(this).find('scrapbookImage').text();
		scrapbooksArray[scrapbookCount][2]=$(this).find('scrapbookLink').text();
		scrapbooksArray[scrapbookCount][3]=$(this).find('bookTitle').text();
		scrapbooksArray[scrapbookCount][4]=$(this).find('bookLink').text();
		scrapbooksArray[scrapbookCount][5]=$(this).find('author').text();
		scrapbooksArray[scrapbookCount][6]=$(this).find('bookShort').text();
				
		var scrapbookName = scrapbooksArray[scrapbookCount][0];
		var scrapbookImage = scrapbooksArray[scrapbookCount][1];
		var scrapbookLink = scrapbooksArray[scrapbookCount][2];
		var bookTitle = scrapbooksArray[scrapbookCount][3];
		var bookLink = scrapbooksArray[scrapbookCount][4];
		var author = scrapbooksArray[scrapbookCount][5];
		var shortTitle = scrapbooksArray[scrapbookCount][6];
		
		$('#allScrapbooksBox').append('<div class="scrapbookItem" id="scrapbook'+scrapbookCount+'"><a href="'+scrapbookLink+'" class="bookImageLink btnscrapbook"></a><div class="hdrAllScrapbookName">The Scrapbook of<br />'+scrapbookName+'</div><!-- /hdrAllScrapbookName --><div class="txtAboutTheBook">About the book:<br /><a href="'+bookLink+'"><span style="font-style:italic">'+shortTitle+'</span> by '+author+'</a></div><!-- /txtAboutTheBook --><div class="btnExploreTheScrapbook"><a href="'+scrapbookLink+'" class="btnscrapbook"><span class="noCss">Explore the Scrapbook</span></a></div><!-- /btnExploreTheScrapbook --></div><!-- /scrapbookItem -->');
		$('#scrapbook'+scrapbookCount).css('background', 'url('+scrapbookImage+') no-repeat');
		if(scrapbookCount != 0 && scrapbookCount % 9 === 0)
		{
		//alert (scrapbookCount);
		$('#allScrapbooksBox').append('<div class="btnBackToTop"><a href="#top">back to top</a></div>');
		}
	scrapbookCount++;
	});		
	$('.btnscrapbook').bind('click', function() {
		var url = $(this).attr('href');
		$('#daLeftNav, #primaryShadeBox, #booksBox').fadeOut('slow', function(){
			window.location=url;
		});
	  return false;
	});
}