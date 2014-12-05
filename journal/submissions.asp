<%Response.Buffer = true%>
<!--#include file="includes/db_functions.asp"-->

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<%
	TimePeriod = Request("TimePeriod")
	response.write TimePeriod
	TimePeriodFix = Replace(TimePeriod," ","%20")
	page = trim(Request("page"))
	if page="" or not IsNumeric(page) then
		page = 1
	else
		page = CInt(page)
	end if
	sort = Request("sort")
	Set RS = getEntries(page,TimePeriod,sort)
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

<body bgcolor="#FFFFCC">
<div id="popUpWrapper">
         <a name="top"></a>
           <div id="contentWrapper">
            <div id="hdrPopUp">
          
            </div><!-- hdrPopup -->    
         
<div align="center">
<table bgcolor="#ffffff" width="494" border="0" cellspacing="0" cellpadding="0">
  <tr> 
      <td colspan="3"><img src="images/header-write.gif" width="498" height="85" usemap="#HeaderMap" border="0"></td>
  </tr>
  <tr> 
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
      <td width="494" valign="top"> 
        <p><div class="JournalContent"> <span class="JournalHeader"><%=TimePeriod%></span><br>
          Click a column heading to sort by student name, state, or title. Click 
          a title to read the selection.
		  <br>
<%
If Not RS.EOF then
	
	NoOfPages = RS.PageCount
	
	PageString = "Page: "&page&" of "&NoOfPages&"&nbsp;&nbsp;&nbsp;"
	if Page > 1 then
		PrevString = "<a href=""submissions.asp?page="&Page-1&"&TimePeriod="&TimePeriodFix&"&sort="&sort&""">Previous</a>"
		
	else
		PrevString = ""	
	end if
	PageString = PageString&PrevString&" | "
	for i = 1 to NoOfPages
		if i = Page then
			NumString = i
		else
			NumString = "<a href=""submissions.asp?page="&i&"&TimePeriod="&TimePeriodFix&"&sort="&sort&""">"&i&"</a>"
		end if
		PageString = PageString&" "&NumString&" | "
	next
	if Page < NoOfPages then
		NextString = "<a href=""submissions.asp?page="&Page+1&"&TimePeriod="&TimePeriodFix&"&sort="&sort&""">Next</a>"
	else
		NextString = ""
	end if
	PageString = PageString&" "&NextString
	
End If 'End Rs.EOF
%>		  
          <%=PageString%></div><p>
        <div align="center">
		<table width="490" bgcolor="#D4E7F2" border="0" cellspacing="0" cellpadding="0">
		<tr>
			<td colspan="5" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="490" height="1"></td>
		</tr>
<%
If RS.EOF then
%>
<tr>
			<td width="1" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="18"></td>
			<td Colspan="3" align="center">
			    <div style="font-weight:bold; padding-left: 10px; padding-right: 10px"> There are no 
                  entries for <%=TimePeriod%> at this time. </div>
			
			</td>	
			<td width="1" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="16"></td>
		</tr>
		<tr>
			<td colspan="5" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="490" height="1"></td>
		</tr>
<%
else
%>
		<tr>
			<td width="1" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="18"></td>
			<td width="230">
			<div style="padding-left: 10px">
			<a href="?page=1&sort=title&TimePeriod=<%=TimePeriodFix%>"><b>Title</b></a>
			</div>
			</td>
			<td width="125">
			<a href="?page=1&sort=state&TimePeriod=<%=TimePeriodFix%>"><b>State</b></a>
			</td>
			<td width="163">
			<a href="?page=1&sort=student&TimePeriod=<%=TimePeriodFix%>"><b>Student</b></a>
			</td>	
			<td width="1" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="16"></td>
		</tr>
		<tr>
			<td colspan="5" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="490" height="1"></td>
		</tr>
<%
	Dim count
	count = 0
	Do While (count<PageSize) AND Not RS.EOF
		count = count+1
%>
<!-- Begin Entry -->
		<tr>
			<td width="1" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="18"></td>
			<td width="230">
			<div style="padding-left: 10px">
			<a href="entry.asp?entryid=<%=RS("ReportID")%>&TimePeriod=<%=TimePeriodFix%>"><%=RS("Q1")%></a>&nbsp;
			</div>
			</td>
			<td width="125">
			<%=RS("State")%>
			</td>
			<td width="163">
			<%=RS("FirstName")%>&nbsp; <%=RS("LastInitial")%>
			</td>	
			<td width="1" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="16"></td>
		</tr>		
		<tr>
			<td colspan="5" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="490" height="1"></td>
		</tr>
<!-- End Entry -->			
<%
	RS.MoveNext
	LOOP
END IF
%>
		
		<tr bgcolor="#ffffff">
			<td width="1"><img src="/images/spacer.gif" width="1" height="1"></td>
			<td width="230"><img src="/images/spacer.gif" width="220" height="1"></td>
			<td width="125"><img src="/images/spacer.gif" width="115" height="1"></td>
			<td width="163"><img src="/images/spacer.gif" width="150" height="1"></td>	
			<td width="1"><img src="/images/spacer.gif" width="1" height="1"></td>
		</tr>
		
		</table>

          <p align="right"><a href="javascript:window.close()"><img src="images/close_window.gif" width="148" height="14" vspace="10" border="0"></a></p>
        </div>
<img src="/images/spacer.gif" width="494" height="10">
        </td>
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
  </tr>
  <tr> 
    <td colspan="3" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="2"></td>
  </tr>
</table>
</div>
<map name="HeaderMap"> 
  <area shape="rect" coords="373,42,574,82" href="index.asp">
  <area shape="rect" coords="2,2,278,83" href="timeperiods.asp">
</map>
   
           <div class="clear"><!-- clear the floats --></div>
        </div><!-- /contentWrapper -->
    </div><!-- /popUpWrapper -->   
<script language="JavaScript1.1">var SA_Message="IC=Scholastic-Teachers-Online_Activities-Learning_Activities-Our_America"; </script><! Copyright IBM Corporation, 2001, 2002 !><script language="JavaScript1.1">var SA_ID="scholas;scholas";</script><script language="JavaScript1.1" src="//stats.surfaid.ihost.com/sacdcsch.js?scholas"></script><noscript><img src="//stats.surfaid.ihost.com/rc/images/uc.GIF?1.13&scholas&scholas&noscript" height="1" width="1" alt="" border="0"></noscript></body>
</html>
<%
Set RS = nothing
%>