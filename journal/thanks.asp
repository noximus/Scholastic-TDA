<%Response.Buffer = true%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<%
	Dim ServerName,ServerTo
	ServerName = Request.Servervariables("Server_name")
 	If InStr(1, ServerName, "teacherdev") then
   		ServerTo = "teacherdev.scholastic.com"
	ElseIf InStr(1, ServerName, "teacherqual") then
   		ServerTo = "teacherqual.scholastic.com"
  	Else
	   	ServerTo = "teacher.scholastic.com"   
  	End If
%>

<html>
<head>
	<title>Our America</title>
	<script language="Javascript">
	function doLink()
	{
		var loc = "http://<%=ServerTo%>/activities/our_america/index.htm";
	 	if (window.opener && !window.opener.closed)
	 	{
    		window.opener.document.location.href = loc;
			window.opener.focus(); 			
		}
		else
		{
			window.open(loc);
		}
		window.close();
	}
	</script>
<link rel="stylesheet" href="/activities/our_america/our_america.css" type="text/css">
</head>

<body bgcolor="#FFFFCC">
<div align="center">
<table bgcolor="#ffffff" width="580" border="0" cellspacing="0" cellpadding="0">
  <tr> 
      <td colspan="3"><img src="images/header.gif" width="580" height="85" usemap="#HeaderMap" border="0"></td>
  </tr>
  <tr> 
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
      <td width="576" valign="top">
        <div class="JournalContent"><p class="JournalHeader">Thank you for your submission!</p>
        <p>Check back in a few days for your submission. 
          Now <a href="timeperiods.asp">read other submissions</a> or learn about <a href="Javascript:doLink()">another 
          time period.</a></p>
			</div>
<div align="right">
<a href="javascript:window.close()"><img src="images/close_window.gif" width="148" height="14" vspace="10" border="0"></a> 
</div>			
<img src="/images/spacer.gif" width="516" height="10">
        </td>
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
  </tr>
  <tr> 
    <td colspan="3" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="2"></td>
  </tr>
</table>
</div>
        <map name="HeaderMap"> 
          <area shape="rect" coords="410,49,572,79" href="timeperiods.asp">
        </map>
<script language="JavaScript1.1">var SA_Message="IC=Scholastic-Teachers-Online_Activities-Learning_Activities-Our_America"; </script><! Copyright IBM Corporation, 2001, 2002 !><script language="JavaScript1.1">var SA_ID="scholas;scholas";</script><script language="JavaScript1.1" src="//stats.surfaid.ihost.com/sacdcsch.js?scholas"></script><noscript><img src="//stats.surfaid.ihost.com/rc/images/uc.GIF?1.13&scholas&scholas&noscript" height="1" width="1" alt="" border="0"></noscript></body>
</html>
