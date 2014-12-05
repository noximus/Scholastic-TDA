// JavaScript Document

var quizzesArray = new Array();
function loadTheQuizzes(xml)
{
	//alert('loadTheQuizzes function running');
	var girlChoice = 'All';
	var quizCount = 0;
	$(xml).find("quiz").each(function(){		
		//alert(quizCount);
		quizzesArray[quizCount] = new Array(4);
		quizzesArray[quizCount][0]=$(this).find('girlName').text();
		quizzesArray[quizCount][1]=$(this).find('quizTitle').text();
		quizzesArray[quizCount][2]=$(this).find('imageSmall').text();
		quizzesArray[quizCount][3]=$(this).find('quizLink').text();
		var girlsName = quizzesArray[quizCount][0];
		var quizTitle = quizzesArray[quizCount][1];
		var imageSmall = quizzesArray[quizCount][2];
		var quizLink = quizzesArray[quizCount][3];
		
		if(!jQuery.url.param("girl")) {
			$('#quizList').append('<div class="smallQuizBox"><a href="#" onclick=\'window.open("'+quizLink+'","","location=0,status=0,scrollbars=1,width=528,height=704");\'><div class="quizThumbnail" id="quiz'+quizCount+'"><!-- quiz image --></div>'+quizTitle+'</a></div>');
			$('#quiz'+quizCount).css('background', 'url('+imageSmall+') no-repeat');
		}
		else {
			girlChoice = jQuery.url.param("girl");
			if(girlsName == girlChoice)	{
				$('#quizList').append('<div class="smallQuizBox"><a href="#" onclick=\'window.open("'+quizLink+'","","location=0,status=0,scrollbars=1,width=528,height=704");\'><div class="quizThumbnail" id="quiz'+quizCount+'"><!-- quiz image --></div>'+quizTitle+'</a></div>');
		$('#quiz'+quizCount).css('background', 'url('+imageSmall+') no-repeat');	
			}
		}
		
		var quizBreak = quizCount+1;
		if(quizBreak%4==0)
		{
		$('#quizList').append('<div class="linebreak"><!-- break every 4 quizzes --></div>');			
		}
	quizCount++;
	});	
	$("#girlChoice option:contains("+girlChoice+")").attr("selected", true);
}


function loadAGirlsContent(){	
	$('#quizList').html('');
	var girlChoice = $("#girlChoice").val();
	var quizArrayLength = quizzesArray.length;
	var specificNumber = 0;
	for (i=0;i<=quizArrayLength;i++)
		{
		var girlsName = quizzesArray[i][0];
		//alert (girlsName+' <--girlsName and girlChoice--> '+girlChoice);
		var quizTitle = quizzesArray[i][1];
		var imageSmall = quizzesArray[i][2];
		var quizLink = quizzesArray[i][3];		
		if(i==0 && girlsName == girlChoice)
			{
			}
		if(girlsName == girlChoice)
			{				
			$('#quizList').append('<div class="smallQuizBox"><a href="#" onclick=\'window.open("'+quizLink+'","","location=0,status=0,scrollbars=1,width=700,height=550");\'><div class="quizThumbnail" id="quiz'+i+'"><!-- quiz image --></div>'+quizTitle+'</a></div>');
			$('#quiz'+i).css('background', 'url('+imageSmall+') no-repeat');				
			var quizBreak = specificNumber+1;
			if(quizBreak%4==0)
				{
				$('#quizList').append('<div class="linebreak"><!-- break every 4 quizzes --></div>');			
				}
			specificNumber++;
			}
		else if (girlChoice == 'All' )
			{
			$('#quizList').append('<div class="smallQuizBox"><a href="#" onclick=\'window.open("'+quizLink+'","","location=0,status=0,scrollbars=1,width=700,height=550");\'><div class="quizThumbnail" id="quiz'+i+'"><!-- quiz image --></div>'+quizTitle+'</a></div>');
			$('#quiz'+i).css('background', 'url('+imageSmall+') no-repeat');				
			var quizBreak = i+1;
			if(quizBreak%4==0)
				{
				$('#quizList').append('<div class="linebreak"><!-- break every 4 quizzes --></div>');			
				}				
			}
		specificNumber++;
		}	
	return false; 
}