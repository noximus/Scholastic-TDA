// JavaScript Document

function loadABook(xml)
{
	var bookCount = 0;
	var urlTitle = jQuery.url.param("girl");
	$(xml).find("book").each(function(){
		var girl = $(this).find('girl').text();
		if(urlTitle == girl){			
			var bookNumber = bookCount+1;
			var bookName = $(this).attr('name');
			var author = $(this).find('author').text();
			var bookSummary = $(this).find('bookSummary').text();
			var bookDetail = $(this).find('bookDetail').text();
			var timespan = $(this).find('timespan').text();
			var bookImage = $(this).find('bookImage').text();
			var bookTitle = $(this).find('bookTitle').text();
			var bookLink = $(this).find('bookLink').text();
			var excerptDownload = $(this).find('download').text();
			var buyLinkScholastic = $(this).find('buyLinkScholastic').text();
			var buyLink1 = $(this).find('buyLink1').text();
			var buyLinkText1 = $(this).find('buyLinkText1').text();
			var buyLink2 = $(this).find('buyLink2').text();
			var buyLinkText2 = $(this).find('buyLinkText2').text();
			var buyLink3 = $(this).find('buyLink3').text();
			var buyLinkText3 = $(this).find('buyLinkText3').text();
			var buyLink4 = $(this).find('buyLink4').text();
			var buyLinkText4 = $(this).find('buyLinkText4').text();
			var buyLink5 = $(this).find('buyLink5').text();
			var buyLinkText5 = $(this).find('buyLinkText5').text();
			var buyLink6 = $(this).find('buyLink6').text();
			var buyLinkText6 = $(this).find('buyLinkText6').text();
			var dlGuide = $(this).find('guide').text();
			
			$('#TheBookBox').css('background', 'url('+bookImage+') no-repeat left top');
			$('#bookTitle1').html(bookTitle);
			//$('#bookTitle2').html(bookName);
			$('#bookAuthor span').html(author);
			
			if (0 == $.trim(timespan).length)
			{
				$('#bookTimePeriod').html('');
			}
			else
			{
				$('#bookTimePeriod span').html(timespan);
			}
			
			$('#bookSummary').html(bookSummary);
			$('#bookDetail').html(bookDetail);
			$('#dlGuide a').attr('href', dlGuide);
			$('#btnDownload').attr('href', excerptDownload);
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

		}		
	bookCount++;
	});	
}