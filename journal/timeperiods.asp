<%Response.Buffer = true%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!--#include file="includes/journal_data.asp"-->

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
	border:2px solid #81A9D1;
	border-width:0 2px;
	margin:0;
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

<body>
<div id="popUpWrapper">
         <a name="top"></a>
           <div id="contentWrapper">
            <div id="hdrPopUp">
          
            </div><!-- hdrPopup -->    
         

<div align="center" style="margin:0 auto; width:494px;">
	<div><img src="images/header-write.gif" width="494" height="85" usemap="#HeaderMap" border="0"></div>
  	<div> 
     <div class="JournalContent"><b>All Submissions:</b><br>
          To Read student writing, find and click on a period in the list below.<br>
     </div>
  	</div>
		<table width="494" border="0" cellspacing="0" cellpadding="0" id="xmainTable">
			<tr>
				<td align="center" valign="middle">
					<table  bgcolor="#81A9D1" width="494" border="0">
<% For i = 0 to UBound(PeriodArray)
	Link = "submissions.asp?TimePeriod="&Replace(PeriodArray(i)," ","%20")
%>
        				<tr bgcolor="#D4E7F2" >
          					<td width="494" align="left">
                            	<div style="position: relative; left: 10px;">
		  							<a href="<%=Link%>"><%=PeriodArray(i)%></a>
                                </div>
          					</td>
        				</tr>
<% Next %>
      				</table>
				</td>
			</tr>
		</table>
</div>
<div align="right">
<a href="javascript:window.close()"><img src="images/close_window.gif" width="148" height="14" vspace="10" border="0"></a> 
</div>
</td>
    <td bgcolor="#81A9D1" width="2"><img src="/images/spacer.gif" width="2" height="1"></td>
  </tr>
  <tr> 
    <td colspan="3" bgcolor="#81A9D1"><img src="/images/spacer.gif" width="1" height="2"></td>
  </tr>
</table>
        <map name="HeaderMap"> 
          <area shape="rect" coords="372,41,574,82" href="index.asp">
        </map>
<script language="JavaScript1.1">var SA_Message="IC=Scholastic-Teachers-Online_Activities-Learning_Activities-Our_America"; </script><! Copyright IBM Corporation, 2001, 2002 !><script language="JavaScript1.1">var SA_ID="scholas;scholas";</script><script language="JavaScript1.1" src="//stats.surfaid.ihost.com/sacdcsch.js?scholas"></script><noscript><img src="//stats.surfaid.ihost.com/rc/images/uc.GIF?1.13&scholas&scholas&noscript" height="1" width="1" alt="" border="0"></noscript>

          
           <div class="clear"><!-- clear the floats --></div>
        </div><!-- /contentWrapper -->
    </div><!-- /popUpWrapper -->   
</div>
</body>
</html>
