// JavaScript Document
function delayedRedirect(url){	
	var t=setTimeout("window.location='"+url+"'",1000)
}
function fadeInLargeBook(url){	
	$('#largeBookBox').fadeIn(1500, delayedRedirect(url));
}
function changeBooks(num)
{
	for (i=0;i<=3;i++)
		{
		var whichBook = ((num*4)-4)+i;
		var whichDiv = i+1;
		var nextBookPerson = booksArray[whichBook][0];
		var nextBookBkgrd = booksArray[whichBook][1];
		var nextBookLink = booksArray[whichBook][3];
		$('#bookBox'+whichDiv+' a').css('background', 'url('+nextBookBkgrd+')');
		$('#bookBox'+whichDiv+' a span').html(nextBookPerson);
		$('#bookBox'+whichDiv+' a').attr('href', nextBookLink);
		}
	$('#listLinksBooks li a').css('background-position', 'left top');	
	$('#listLinksBooks li a#link'+num).css('background-position', 'left bottom');
}
function loadBookLarge(num)
{
	var thisBookLink = booksArray[num][3];
	if(thisBookLink==''){
		// do nothing!
		}
	else{
		$('#booksBox').fadeOut('slow');
		$('#daLeftNav').fadeOut('slow', delayedRedirect(thisBookLink));
		}
}

var booksArray = new Array();
function loadTheBooks(xml)
{
	var bookCount = 0;
	$(xml).find("book").each(function(){
	booksArray[bookCount] = new Array(5);
		booksArray[bookCount][0]=$(this).attr('name');
		booksArray[bookCount][1]=$(this).find('imageSmallBkgrd').text();
		booksArray[bookCount][2]=$(this).find('imageLarge').text();
		booksArray[bookCount][3]=$(this).find('link').text();
		booksArray[bookCount][4]=$(this).find('imageSmallBook').text();
		if (bookCount <= 3) {
			var bookNumber = bookCount+1;
			var bookPerson = booksArray[bookCount][0];
			var bookSmall = booksArray[bookCount][4];
			var bookBkgrd = booksArray[bookCount][1];
			//var bookLink = booksArray[bookCount][3];
			//$('#bookBox'+bookNumber+' a').attr('href', bookLink);	
			$('#bookBox'+bookNumber).css('background', 'url('+bookSmall+')');
			$('#bookBox'+bookNumber+' a').css('background', 'url('+bookBkgrd+')');
			$('#bookBox'+bookNumber+' a span').html(bookPerson);
			$('#bookBox'+bookNumber+' a').attr('id', bookCount);		
		};
	bookCount++;
	});
	var booksArrayLength = booksArray.length;	
	if (booksArrayLength >= 5) {
		var linkNum = 0;
		$("#linksBox").css("display", "block");
		for (i=0;i<=booksArrayLength;i++)
		{
			if(i!=0 && i%4==0) 
			{
			linkNum++;
			$("#listLinksBooks").append('<li><a href="#" onclick="changeBooks('+linkNum+'); return false;" id="link'+linkNum+'">'+linkNum+'</a></li>');
			}
		}
	};	
}