<div align="center">
<table bgcolor="#81A9D1" width="520" border="0" cellspacing="0" cellpadding="1">
<tr>
	<td align="center" valign="middle">
	<table  bgcolor="#D4E7F2" width="518" border="0" cellspacing="0" cellpadding="0">
        <tr>
		<td width="10"><img src="/images/spacer.gif" width="10" height="10"></td>

          <td width="498" align="left">
  			<span class="JournalHeader"><%=Title%></span>
			<p>By: <%=FirstName%>&nbsp;<%=LastInitial%><br>
			<%=State%>, Grade: <%=Grade%>
			<p>
<%
function FixEntry(ent)
	ent = replace(ent,"<","&lt;")
	ent = replace(ent,">","&gt;")
	FixEntry = replace(ent,chr(13),"<br>")
end function
%>
	
			<%=FixEntry(Entry)%>
			<br>&nbsp;
			</td>

		<td width="10"><img src="/images/spacer.gif" width="10" height="10"></td>
        </tr>
      </table>
</td>
</tr></table>
&nbsp;<br>
<table width="520" border="0" cellspacing="0" cellpadding="0">
<tr>
<%
Function FixQuotes(text)
	FixQuotes = Replace(text,"""","&#34;")
End Function

%>
<form method="post" action="index.asp">
	<input type="hidden" name="TimePeriod" value="<%=FixQuotes(Request("TimePeriod"))%>">
	<input type="hidden" name="Title" value="<%=FixQuotes(Request("Title"))%>">
	<input type="hidden" name="Entry" value="<%=FixQuotes(Request("Entry"))%>">
	<input type="hidden" name="FirstName" value="<%=FixQuotes(Request("FirstName"))%>">
	<input type="hidden" name="LastInitial" value="<%=FixQuotes(Request("LastInitial"))%>">
	<input type="hidden" name="Grade" value="<%=FixQuotes(Request("Grade"))%>">
	<input type="hidden" name="State" value="<%=FixQuotes(Request("State"))%>">
	<td align="center"><input type="submit" name="Submit" value="Edit">
        <input type="submit" name="Submit" value="Submit">
	</td>
</form>
</tr>
</table>
</div>
<br>
