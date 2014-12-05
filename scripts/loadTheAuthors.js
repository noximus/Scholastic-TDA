// JavaScript Document
var currentAuthorsPage = 1;
var authorsArray = new Array();
function loadTheAuthors(xml)
{
	//alert(authorsArray.length);
	var authorCount = 0;
	$(xml).find("author").each(function(){
		var authorNumber = authorCount+1;
		authorsArray[authorCount] = new Array(10);
		authorsArray[authorCount][0]=$(this).attr('name');
		authorsArray[authorCount][1]=$(this).find('imageAuthorLarge').text();
		authorsArray[authorCount][2]=$(this).find('imageAuthor').text();
		
		var bookTitleCount = 0;
			authorsArray[authorCount][3] = new Array();
			$(this).find("bookTitle").each(function(){
				authorsArray[authorCount][3][bookTitleCount]= new Array(4);
				authorsArray[authorCount][3][bookTitleCount][0]=$(this).attr('name');
				authorsArray[authorCount][3][bookTitleCount][1]=$(this).find('bookFullTitle').text();
				authorsArray[authorCount][3][bookTitleCount][2]=$(this).find('bookLink').text();
				authorsArray[authorCount][3][bookTitleCount][3]=$(this).find('nameLink').text();
				var bookTitle = authorsArray[authorCount][3][bookTitleCount][1];
				if (authorCount <= 3) {
					$('#authorBox'+authorNumber+' ul.bookTitles').append('<li>'+bookTitle+'</li>');
				};
				bookTitleCount++;
			});
		
		authorsArray[authorCount][4]=$(this).find('bioSummary').text();
		authorsArray[authorCount][5]=$(this).find('bioDetail').text();
		authorsArray[authorCount][6]=$(this).find('video').text();		
		//alert(authorsArray.length);
		/*	
		if (bookTitleCount >= 2){
			$('#authorBox'+authorNumber+' .booksHeader').html('The Diaries of:');
		}
		else {
			$('#authorBox'+authorNumber+' .booksHeader').html('The Diary of');		
		};
		*/
		if (authorCount <= 3) {
			
			var authorName = authorsArray[authorCount][0];
			var authorImage = authorsArray[authorCount][2];
			$('#authorBox'+authorNumber+' .btnAuthorImg').css('background', 'url('+authorImage+') no-repeat');
			$('#authorBox'+authorNumber+' a').attr('id', authorNumber-1);	
			//$('#authorBox'+authorNumber+' a').attr('href', authorLink);	
			$('#authorBox'+authorNumber+' .authorName').html(authorName);
		};
	authorCount++;
	});
	var authorsArrayLength = authorsArray.length;	
	
	if (authorsArrayLength >= 5) {
		var linkNum = 0;
		$("#linksBox").css("display", "block");
		for (i=0;i<=authorsArrayLength;i++)
		{
			if(i!=0 && i%4==0) 
			//if(linkNum < 3) 
			{
			linkNum++;
			$("#listLinksAuthors").append('<li><a href="#" onclick="changeAuthors('+linkNum+'); return false;" id="link'+linkNum+'">'+linkNum+'</a></li>');
			}
		}
	};
	
	$("#listLinksAuthors li")
		.first().find('a')
		.toggleClass('selected');
}

function changeAuthors(num)
{
	currentAuthorsPage = num;
	num--;
	
	for (i=0;i < 4;i++)
		{
		var whichAuthor = (num * 4) + i;
		var whichDiv = i+1;
		var nextAuthorName = authorsArray[whichAuthor][0];
		//var nextAuthorLink = authorsArray[whichAuthor][1];
		var nextAuthorImage = authorsArray[whichAuthor][2];
		var nextBookTitles = authorsArray[whichAuthor][3].length;
		$('#authorBox'+whichDiv+' .btnAuthorImg').css('background', 'url('+nextAuthorImage+') no-repeat');
		$('#authorBox'+whichDiv+' a').attr('id', whichAuthor);	
		$('#authorBox'+whichDiv+' .authorName').html(nextAuthorName);	
		$('#authorBox'+whichDiv+' ul.bookTitles').html('');
		var nextBooksCount = 0;
			$.each(authorsArray[whichAuthor][3], function(index, value) { 
			  	//alert(value[1]); 
				$('#authorBox'+whichDiv+' ul.bookTitles').append('<li>'+value[1]+'</li>');
				nextBooksCount++;
			});
			
		/*
		if (nextBooksCount >= 2){
			$('#authorBox'+whichDiv+' .booksHeader').html('The Diaries of:');
		}
		else {
			$('#authorBox'+whichDiv+' .booksHeader').html('The Diary of');		
		};
		*/
		};
	/*$('#listLinksAuthors li a').css('background-position', 'left top');	
	$('#listLinksAuthors li a#link'+num).css('background-position', 'left bottom');*/
	$("#listLinksAuthors li a.selected").toggleClass('selected');
	$("#listLinksAuthors li")
		.eq(num).find('a').toggleClass('selected');
	
	return false;
}
function showAuthor()
{	
	$('#authorBioSection').fadeIn('slow');
}
function loadAuthorBio(num)
{	
	//$('#btnMoreBio').css('display', 'block');
	$('#authorBioSummary').css('display', 'block');	
	$('#authorBioDetail').css('display', 'none');
	$('#authorsListSection').fadeOut('slow', showAuthor);
	
	var thisAuthor = num;
	currentAuthor = num;
	
	$('#authorName').html(authorsArray[thisAuthor][0]);
	$('#authorBioSection').css('background', 'url('+authorsArray[thisAuthor][1]+') no-repeat');
	$('#authorBioSummary').html(authorsArray[thisAuthor][4]);
	$('#authorBioDetail').html(authorsArray[thisAuthor][5]);
	$('.theVideo').html(authorsArray[thisAuthor][6]);
	var booksLength = authorsArray[thisAuthor][3].length;
	//alert(booksLength);
	$('ul#authorDtlBooksList').html('');
	for (k=0; k < booksLength; k++)
		{
			var thisGirlsName =	authorsArray[thisAuthor][3][k][0];
			var thisBookFullTitle = authorsArray[thisAuthor][3][k][1];
			var thisBookLink = authorsArray[thisAuthor][3][k][2];
			var thisNameLink = authorsArray[thisAuthor][3][k][3];
		$('ul#authorDtlBooksList').append('<li><a href="'+thisBookLink+'" style="font-style:italic">'+thisBookFullTitle+'</a>: The Diary of <a href="'+thisNameLink+'">'+thisGirlsName+'</a></li>');
		}
	//alert(authorsArray[thisAuthor][4]);	
	return false;
}

$(document).ready(function() {
	$('#btnBackToAuthors').click(function() {
		
		changeAuthors(currentAuthorsPage);
		
		$('#authorBioSection').fadeOut('slow', function() {
			$('#authorsListSection').fadeIn('slow');
		});
		
		return false;
	});
});






















