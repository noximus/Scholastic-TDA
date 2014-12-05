<!-- #include virtual="/include/standardASPFunction.asp" --> 
<%
Const TABLE_NAME = "oa_OurAmerica"
Const ConnStr = "DSN=dotcom"
Const adUseClient = 3
Const LiveStatus = 2
Const PageSize = 10

Function FixData(data)
	FixData = Replace(data,"&#34;","""")
	FixData = Replace(FixData,"'","''")
End Function

Function SubmitEntry(TimePeriod,Title,Entry,FirstName,LastInitial,Grade,State)
	Dim SQLStmt
	Set rs = Server.CreateObject("ADODB.Recordset")
	TimePeriod = FixData(TimePeriod)
	Title = FixData(Title)
	Entry = FixData(Entry)
	FirstName = FixData(FirstName)
	LastInitial = FixData(LastInitial)
	Grade = FixData(Grade)
	State = FixData(State)
	
	SQLStmt = "Insert into "&TABLE_NAME&_
			"(Q1,Q2,FirstName,LastInitial,Grade,State,WritingType) " &_
			"VALUES ("&_
			"'"&Title&"',"&_
			"'"&Entry&"',"&_
			"'"&FirstName&"',"&_
			"'"&LastInitial&"',"&_
			"'"&Grade&"',"&_
			"'"&State&"',"&_
			"'"&TimePeriod&"')"
			
	rs.Open SQLStmt, ConnStr, adOpenDynamic,3
	set rs = nothing			 		
	SubmitEntry = ""
End Function

Function getEntries(page,TimePeriod,sort)
	Dim rs, SQLStmt, SortStr
	sort = trim(Lcase(sort))

	if sort = "title" then
		SortStr = "Q1"
	elseif sort = "state" then
		SortStr = "state"
	else 
		SortStr = "FirstName, LastInitial"
	end if
	TimePeriod = FixData(timePeriod)
	SQLStmt = 	"Select * FROM "&TABLE_NAME&_
				" Where WritingType = '"&TimePeriod&"'"&_
				" And Status = "&LiveStatus&_
				" Order By "&SortStr
	Set rs = Server.CreateObject("ADODB.Recordset")
	rs.PageSize = PageSize
	rs.CacheSize = PageSize
	rs.CursorLocation = adUseClient
	rs.Open SQLStmt, ConnStr,1,3
	if not rs.EOF then	
		rs.AbsolutePage = page
	end if
	set getEntries = rs
End Function

Function getEntry(ID)
	SQLStmt = 	"Select Q1, Q2, FirstName, LastInitial, Grade, State, WritingType FROM "&TABLE_NAME&_
				" Where ReportID = "&ID&""
	Set rs = Server.CreateObject("ADODB.Recordset")
	rs.CursorLocation = adUseClient
	rs.Open SQLStmt, ConnStr,adOpenDynamic,3
	
	Set getEntry = rs
End Function
%>
