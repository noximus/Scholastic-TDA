
    var xmlHttp //variable
	//send the content
	function DynamicSubmit(URLValue,ResultID)
	{ 
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		  { alert ("Please update your browser");
		  return;
		  } 
		var url="/pushupandcreate/processvote.asp"+"?"+URLValue;
		//alert(url);
		xmlHttp.onreadystatechange=function(){
         stateChanged(ResultID)
		 };
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
		return 
	} 
	
	//if it is complete, send the data to the ID
	function stateChanged(ResultID) 
	{		 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
			//if (ResultID=="dailycheck")

			     if (xmlHttp.responseText=="reachmax")
			        {displayError('toomany');}
			     else if (xmlHttp.responseText=="duplicate")  
			        {displayError('duplicate');}
			     else if (xmlHttp.responseText=="vote")  
			        {displayError('vote'); }
			     else if (xmlHttp.responseText=="voted")  
			        {displayError('voted'); }
			     else if (xmlHttp.responseText=="nothing")  
			        {displayError('nothing'); }
			     else 
			        {hideError();
			        document.getElementById(ResultID).innerHTML = xmlHttp.responseText;
			        }
			        
		//	}
	 	}
	}
	function DynamicEmail(ParVal)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		  { alert ("Please update your browser");
		  return;
		  } 
		var url="/pushupandcreate/processemail.asp?"+ParVal;
		//alert(url)
					
		xmlHttp.onreadystatechange=function(){
		 if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete"){
				document.getElementById("emailform").style.display = "none";
				document.getElementById("tyou").style.display = "block";
		 	}
		 };
		 
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	} 
	
	//Creat XML http Object
	function GetXmlHttpObject()
	{	var xmlHttp=null;
		try
		  {xmlHttp=new XMLHttpRequest();}
		catch (e)
		  { try
			{xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");}
		  catch (e)
			{xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");}
		  }
		return xmlHttp;
	}
	
	

