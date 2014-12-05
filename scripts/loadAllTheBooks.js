// JavaScript Document


var booksArray = new Array();
var booksArraylength = booksArray.length;
function loadAllTheBooks(xml)
{
	var bookCount = 0;
	$(xml).find("book").each(function(){
	booksArray[bookCount] = new Array(20);
		booksArray[bookCount][0]=$(this).attr('name');
		booksArray[bookCount][1]=$(this).find('bookImage').text();
		booksArray[bookCount][2]=$(this).find('bookTitle').text();
		booksArray[bookCount][3]=$(this).find('girl').text();
		booksArray[bookCount][4]=$(this).find('download').text();
		booksArray[bookCount][5]=$(this).find('buyLinkScholastic').text();
		booksArray[bookCount][6]=$(this).find('buyLink1').text();
		booksArray[bookCount][7]=$(this).find('buyLinkText1').text();
		booksArray[bookCount][8]=$(this).find('buyLink2').text();
		booksArray[bookCount][9]=$(this).find('buyLinkText2').text();
		booksArray[bookCount][10]=$(this).find('buyLink3').text();
		booksArray[bookCount][11]=$(this).find('buyLinkText3').text();
		booksArray[bookCount][12]=$(this).find('buyLink4').text();
		booksArray[bookCount][13]=$(this).find('buyLinkText4').text();
		booksArray[bookCount][14]=$(this).find('buyLink5').text();
		booksArray[bookCount][15]=$(this).find('buyLinkText5').text();
		booksArray[bookCount][16]=$(this).find('buyLink6').text();
		booksArray[bookCount][17]=$(this).find('buyLinkText6').text();
		booksArray[bookCount][18]=$(this).find('author').text();
		booksArray[bookCount][19]=$(this).find('bookShort').text();
		booksArray[bookCount][20]=$(this).find('guide').text();
		
		
		var bookNumber = bookCount+1;
		var author = booksArray[bookCount][18];
		var shortTitle = booksArray[bookCount][19];
		var scrapbookName = booksArray[bookCount][0];
		var bookImage = booksArray[bookCount][1];
		var bookTitle = booksArray[bookCount][2];
		var girl = booksArray[bookCount][3];
		var excerptDownload = booksArray[bookCount][4];
		var buyLinkScholastic = booksArray[bookCount][5];
		var buyLink1 = booksArray[bookCount][6];
		var buyLinkText1 = booksArray[bookCount][7];
		var buyLink2 = booksArray[bookCount][8];
		var buyLinkText2 = booksArray[bookCount][9];
		var buyLink3 = booksArray[bookCount][10];
		var buyLinkText3 = booksArray[bookCount][11];
		var buyLink4 = booksArray[bookCount][12];
		var buyLinkText4 = booksArray[bookCount][13];
		var buyLink5 = booksArray[bookCount][14];
		var buyLinkText5 = booksArray[bookCount][15];
		var buyLink6 = booksArray[bookCount][16];
		var buyLinkText6 = booksArray[bookCount][17];
		var dlGuide = booksArray[bookCount][20];
		
		$('#allBooksBox').append('<div class="bookItem" id="book'+bookCount+'"></div><!-- /bookItem -->');
		$('#book'+bookCount).append('	<a href="aboutthebook.htm?girl='+girl+'" class="bookImageLink"></a>');
		$('#book'+bookCount).append('	<div class="hdrAllBookName">'+bookTitle+'</div><!-- /hdrAllBookName -->');
		$('#book'+bookCount).append('	<div class="txtAboutTheBook">About the book:<br /><a href="aboutthebook.htm?girl='+girl+'"><span style="font-style:italic">'+shortTitle+'</span> by '+author+'</a></div>');
		
		if( 0 < $.trim(dlGuide).length)
		{
			$('#book'+bookCount).append('	<div class="txtAboutTheBook"><a href="' + dlGuide + '" target="_blank">Download the discussion guide.</a></div>');
		}
		
		if (buyLinkScholastic != ""){
		$('#book'+bookCount).append('	<div class="btnBuyTheBook"><a href="#" class="buyBook" id="open'+bookNumber+'" name="'+bookNumber+'"><span class="noCss">Buy The Book</span></a></div>');
		}
		
		$('#book'+bookCount).append('	<div class="btnReadExcerpt" id="excerpt'+bookCount+'"><a href="'+excerptDownload+'" target="_blank"><span class="noCss">Download an Excerpt</span></a></div><!-- /btnReadExcerpt -->');
		if (buyLinkScholastic == ""){
		$('#excerpt'+bookCount).css({
			'margin-left' : '-7px'
			});
		}
		
		$('#book'+bookCount).css('background', 'url('+bookImage+') no-repeat');
		if(bookCount != 0 && bookCount % 9 === 0)
		{
		$('#allBooksBox').append('<div class="btnBackToTop"><a href="#top">back to top</a></div>');
		}
		$('#close'+bookNumber).bind (
			"click",
			function(){
				$('#kbsStorePopCallout'+bookNumber).fadeOut('slow');
				$('#kbsStorePopCalloutBooks').css('top', '0px');
				return false;
			});
		//var topPos = bookCount*195+75;
		var topPos = bookCount*195+75;
		$('#open'+bookNumber).bind (
			"click",
			function(){
				$('#kbsStorePopCalloutBooks').fadeIn('slow');
				$("#kbsStorePopCalloutBooks").animate({"top": topPos+"px"}, "slow");
				$('#buyLinkScholastic').attr('href', buyLinkScholastic);
				$('#buyLink1').html(buyLinkText1);
				$('#buyLink1').attr('href', buyLink1);
				$('#buyLink2').html(buyLinkText2);
				$('#buyLink2').attr('href', buyLink2);
				$('#buyLink3').html(buyLinkText3);
				$('#buyLink3').attr('href', buyLink3);
				$('#buyLink4').html(buyLinkText4);
				$('#buyLink4').attr('href', buyLink4);
				$('#buyLink5').html(buyLinkText5);
				$('#buyLink5').attr('href', buyLink5);
				$('#buyLink6').html(buyLinkText6);
				$('#buyLink6').attr('href', buyLink6);					
				return false;
			});
		
		
	bookCount++;
	});	
	//alert(booksArrayLength);
}
/*
 $(document).ready(function() { 
	$('#close').bind('click', function() {
	  	var url = $(this).attr('href');
	  	$('#fadeBox').fadeOut('slow', function(){
	  		$('#fadeBox').load(url);
		});	  
	  $('#fadeBox').fadeIn('slow');
	  return false;
	});
 });
function closeMe(num){ 
	$('#kbsStorePopCallout'+num).fadeOut('slow');
	return false;
}
function openMe(num){
	bind(this);
	$('#kbsStorePopCallout'+num).fadeIn('slow');
	return false;
}
*/