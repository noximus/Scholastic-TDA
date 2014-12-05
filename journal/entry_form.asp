<!-- #include virtual="/include/standardASPFunction.asp" --> 
<%
Function RestoreString(text)
	RestoreString = Replace(text,"&#34;","""")
End Function

%>    
	 <p>Please complete the following and then click Submit. 
        Required information is shown in boldfaced type and is preceded by an 
        asterick (*). All other information is optional.</p>
		<div align="center">
		<table bgcolor="#81A9D1" width="520" border="0" cellspacing="0" cellpadding="1">
<tr>
	<td align="center" valign="middle">
	<table  bgcolor="#D4E7F2" width="518" border="0" cellspacing="0" cellpadding="0">
        <tr>
<form method="post" action="index.asp">
          <td  align="center">
<%
if HasErrors then		  
%>
		  <div align="left" style=" font-weight:bold; padding-left: 15px; padding-right: 15px; color:#cc0000">
<span style="font-size:16px;">Oops!</span><br>
<b>You need to correct the following problem(s) before we can accept your submission:
<br>You have left the following field(s) blank: &nbsp;
<span style="color:#000000"><%=ErrMsg%></span>
</div>
<p>
<%
end if
%>

                <table width="500" border="0" cellspacing="5" cellpadding="0">
                  <tr> 
                  <td align="right" valign="top" width="238"><b>Time Period:</b></td>
                  
                    <td width="252" valign="top" align="left"> 
                      <select name="TimePeriod">
<% For i = 0 to UBound(PeriodArray)
	If TimePeriod = PeriodArray(i) then
		Selected = "SELECTED"
	else
		Selected = ""
	End if
%>
	<option <%=Selected%> value='<%= PeriodArray(i) %>'><%= PeriodArray(i) %>
<% Next %>
                      </select>
                    </td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238"><b>Title:</b></td>
                  
                    <td width="252" valign="top" align="left"> 
                      <input type=text size=30 maxlength=45 name="Title" value="<%=RestoreString(Title)%>">
                    </td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238"><b>Journal Entry:</b></td>
                  
                    <td width="252" valign="top" align="left">
                      <textarea wrap=virtual name="Entry" cols=20 rows=6><%=RestoreString(Entry)%></textarea>

                    </td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238"><b>Your First Name Only:</b></td>
                 
                    <td width="252" valign="top" align="left"> 
                      <input type=text size=30 maxlength=40 name="FirstName" value="<%=RestoreString(FirstName)%>">
                    </td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238"><b>Your First Initial 
                    of Your Last Name:</b></td>
             
                    <td width="252" valign="top" align="left"> 
                      <input type=text size="2" maxlength="1" name="LastInitial" value="<%=RestoreString(LastInitial)%>">
                    </td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238"><b>Your Grade:</b></td>
                 
                    <td width="252" valign="top" align="left"> 
                      <select name="Grade">
                        <option value="0">Choose Grade --&gt;</option>
<% For i = 0 to UBound(GradeArray)
	If Grade = GradeArray(i) then
		Selected = "SELECTED"
	else
		Selected = ""
	End if
%>
	<option <%=Selected%> value='<%= GradeArray(i) %>'><%= GradeArray(i) %>
<% Next %>
                      </select>
                    </td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238"><b>Your State or Province:</b></td>
                 
                    <td width="252" valign="top" align="left">
<select name="State">
<option value="0">Choose State or Country --></option>
<% For i = 0 to UBound(StatesArray) 
	If State = StatesArray(i) then
		Selected = "SELECTED"
	else
		Selected = ""
	End if
%>
	<option <%=Selected%> value='<%= StatesArray(i) %>'><%= StatesArray(i) %>
<% Next %>
</select></td>
                </tr>
                <tr> 
                  <td align="right" valign="top" width="238">&nbsp;</td>
               
                    <td width="252" valign="top" align="left">
                      <input type="submit" name="Submit" value="Preview">
                      <input type="submit" name="Submit" value="Submit">
                    </td>
                </tr>
              </table>
			</td>
</form>
        </tr>
      </table>
</td>
</tr></table>
</div>
