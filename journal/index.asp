<%Response.Buffer = true%>

<!--#include file="includes/journal_data.asp"-->
<!--#include file="includes/db_functions.asp"-->
<%
	Dim TimePeriod, Title, Entry, FirstName, LastInitial, Grade, State, Submit
	Dim HasErrors, ErrMsg
				
	HasErrors = false
	
	Function ValidateField(req,field)
		
		if Len(trim(req))=0 or (field="Grade" or field = "State") AND (req = "0" or req = "------------") then
			if HasErrors then
				ErrMsg = ErrMsg &", "&field
			else
				ErrMsg = ErrMsg &field
			end if
			HasErrors = true
			
		end if
	End Function
	
	TimePeriod = Request("TimePeriod")
	Title = Request("Title")
	Entry = Request("Entry")
	FirstName = Request("FirstName")
	LastInitial = Request("LastInitial")
	Grade = Request("Grade")
	State = Request("State")
	Submit = Request("Submit")
	if Submit = "Submit" or Submit = "Preview" then
		'temp = ValidateField(TimePeriod,"Time Period")
		temp = ValidateField(Title,"Title")
		temp = ValidateField(Entry,"Entry")
		temp = ValidateField(FirstName,"First Name")
		temp = ValidateField(LastInitial,"Last Initial")
		temp = ValidateField(Grade, "Grade")
		temp = ValidateField(State, "State")
	end if

	
	If not HasErrors AND Submit="Submit" then
		'Process Submitted info here
		Dim temp
		temp = SubmitEntry(TimePeriod,Title,Entry,FirstName,LastInitial,Grade,State)
		Response.Redirect("thanks.asp")
	end if
	
%>
<html>
<head>
	<title>Write a Journal Entry | Our America | Scholastic.com</title>
	<meta name="keywords" content="American History, Colonial Period,  Revolutionary War, Westward Expansion,  Civil War,  Turn of the Century,  Great Depression, World War II, american revolution, 19th century history, us american history, 13 colonies, colonial america, american history, american civil war, 1861, women's rights, industrialization, immigration, online publishing, online journal" />
	<meta name="description" content="Write your own journal entry for one of the time periods featured in the Our America activity. You can also read other students' entries." />
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
    <td width="576"><div class="JournalContent">Now that you have read about this period in American history, it is time to use your imagination! What do you think it would have been like to live back then? What would you have found hard? Scary? Interesting?
<br><br>
<b>Your mission:</b>
<ul><li>Pretend you are a kid living in one of the time periods featured in Our America.
Think of an event that could have happened to you in this time period.</li>
<li>Write a journal entry from that point of view. Try to put in as much historical detail as possible.</li>
<li>Review your journal for grammar and spelling.</li>
<li>Publish your journal online!</li></ul>

      <p>Please don't send us any personal information 
        such as your last name, address, or phone number. Read our <a href="#terms">Terms 
        of Submission</a> before you submit your article. Kids: Ask your parents 
        or teachers for approval before you submit anything to us, and read our 
        <a href="http://www.scholastic.com/privacy.htm">Privacy Policy Statement</a>.</p>
 

<%
if not HasErrors AND Submit = "Preview" then
%>
<!--#include file="preview_inc.asp"-->
<%
else
%> 
<!--#include file="entry_form.asp"-->
<%
end if
%>

	    
      <p align="left" class="Text"><b><a name="terms"></a>Terms of Submission</b><br>
        Before being published, your submission will be reviewed. It will be checked 
        to see that it does not contain any inappropriate language. By sending 
        us your work, you are giving Scholastic permission to edit, promote, and 
        put it up on Scholastic.com. However, because lots of students send us 
        work, we won't be able to publish all of the work that we receive. Also, 
        it is really important to send us only work that you made from scratch 
        and not any work that you copied from somewhere else. Thank you.</p>
		</div>
		<div align="right">
		<a href="javascript:window.close()"><img src="images/close_window.gif" width="148" height="14" vspace="10" border="0"></a> 
		</div>
		<img src="/images/spacer.gif" width="576" height="10">
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
