<%Response.Buffer = true%>
<!--#include file="includes/db_functions.asp"-->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">

<%
	Dim EntryID, Title, Entry, FirstName, LastInitial, Grade, State
	EntryID = Request("entryid")
	Set RS = getEntry(EntryID)

	Entry = RS("Q2")
	TimePeriod = RS("WritingType")
	TimePeriodFix = Replace(TimePeriod," ","%20")
	TimePeriodLink = "<a href=""submissions.asp?TimePeriod="&TimePeriodFix&""">"&TimePeriod&"</a>"
	Title = RS("Q1")
	
	FirstName = RS("FirstName")
	LastInitial = RS("LastInitial")
	Grade = RS("Grade")
	State = RS("State")
	Set RS = nothing
%>
<html>
<head>
	<title>Our America</title>
<link rel="stylesheet" href="/activities/our_america/our_america.css" type="text/css">
<link rel="stylesheet" href="../styles/popUpStyles.css" media="all" type="text/css"  />
<style type="text/css">
#contentWrapper	{
	padding-left:none;
	width:516px;
}
#hdrPopUp	{
	margin-left:-56px;
}
.JournalContent	{
	margin:0 4px;
}
#mainTable	{
	border:2px solid #81A9D1;
	border-width:0 2px;
}
</style>
<!--[if IE]>
<style type="text/css">
body	{
	height:100%;
    width:100%;
}
#popUpWrapper	{
	position:relative;
    left:50%;
    margin-left:-260px;
}
</style>
<![endif]-->
</head>
<div id="popUpWrapper">
         <a name="top"></a>
           <div id="contentWrapper">
            <div id="hdrPopUp">
          
            </div><!-- hdrPopup -->    
         
<div align="center">
<body bgcolor="#FFFFCC">
<div align="center">
<table bgcolor="#ffffff" width="494" border="0" cellspacing="0" cellpadding="0">
  <tr> 
      <td colspan="3"><img src="images/header.gif" width="498" height="85" usemap="#HeaderMap" border="0"></td>
  </tr>
  <tr> 
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
    <td width="494">
		<div align="right">Back to <%=TimePeriodLink%> Entries &nbsp;&nbsp;&nbsp;&nbsp;</div><br>
        <div align="center">
          <table bgcolor="#81A9D1" width="490" border="0" cellspacing="0" cellpadding="1">
<tr>
	<td align="center" valign="middle">
	<table  bgcolor="#D4E7F2" width="490" border="0" cellspacing="0" cellpadding="0">
        <tr>
		<td width="10"><img src="/images/spacer.gif" width="10" height="10"></td>

          <td width="490" align="left">
  			<span class="JournalHeader"><%=Title%></span>
			<p>By: <%=FirstName%>&nbsp;<%=LastInitial%><br>
			<%=State%>, Grade: <%=Grade%>
			<p>
<%
function FixEntry(entry)
	entry = replace(entry,"<","&lt;")
	entry = replace(entry,">","&gt;")
	FixEntry = replace(entry,chr(13),"<br>")
end function
%>
	
			<%=Entry%>
			<br>&nbsp;
			</td>

		<td width="10"><img src="/images/spacer.gif" width="10" height="10"></td>
        </tr>
      </table>
	</td>
</tr></table>
</div><br>	
        <div align="right">Back to <%=TimePeriodLink%> Entries &nbsp;&nbsp;&nbsp;&nbsp;<br>
          <a href="javascript:window.close()"><img src="images/close_window.gif" width="148" height="14" vspace="10" border="0"></a> 
          <img src="/images/spacer.gif" width="494" height="10"> </div>

        </td>
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
  </tr>
  <tr> 
    <td colspan="3" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="2"></td>
  </tr>
</table>
</div>
<map name="HeaderMap"> 
  <area shape="rect" coords="345,48,572,79" href="timeperiods.asp">
</map>
           <div class="clear"><!-- clear the floats --></div>
        </div><!-- /contentWrapper -->
    </div><!-- /popUpWrapper -->   
<script language="JavaScript1.1">var SA_Message="IC=Scholastic-Teachers-Online_Activities-Learning_Activities-Our_America"; </script><! Copyright IBM Corporation, 2001, 2002 !><script language="JavaScript1.1">var SA_ID="scholas;scholas";</script><script language="JavaScript1.1" src="//stats.surfaid.ihost.com/sacdcsch.js?scholas"></script><noscript><img src="//stats.surfaid.ihost.com/rc/images/uc.GIF?1.13&scholas&scholas&noscript" height="1" width="1" alt="" border="0"></noscript></body>
</html>
