var schl = {};
schl.pac = {
'd' : [], 'big' : -1, 'favsUsed' : 0, 'favsImgs' : [], 'page' : 1, 'pages' : [false,true,false,false,false,false], 'error' : false, 'g_overlay' : false, 'g_email' : false, 'mg' : [false,false,false,false,false], 'tabs' : '', 'le' : 0, 'ie6' : false,
'errors' : {
	'toomany': '<h3 class="error">Error</h3><p>You need to remove a selection<br />in order to include this entry.</p>',
	'duplicate': '<h3 class="error">Error</h3><p>You already add this to the list</p>',
	'maxvote' : '<h3 class="error">Error</h3><p>Thank you for your enthusiasm!<br />But you can only vote up to 5 times per day.<br />Come back tomorrow and vote again!</p>',
	'vote' : '<div class="ty"><p>Thank you for voting! Remember you can vote every day until the online gallery closes on January 31st so <span class="back">come back again!</span></p><p>Here&rsquo;s your link to the cool new <a href="/pushupandcreate/game3/index.htm"><em>Nestl&eacute; Push-Up</em> Art Maze game</a>. Answer the challenge questions to help the penguin get through the art museum!</p></div>',
	'add' : '<h3 class="error">Error</h3><p>Please "ADD" a <em>Nestl&eacute; Push-Up</em> tube design<br />to your "MY FAVES!"</p>',
	'voted' : '<h3 class="error">Error</h3><p>You already submitted those votes</p>',
	'noremove' : '<h3 class="error">Error</h3><p>You can&#8217;t remove the voted design</p>',
	'nothing' : '<h3 class="error">Error</h3><p>Please "ADD" a <em>Nestl&eacute; Push-Up</em> tube design<br />to your "MY FAVES!"</p>'
	}
};
function randOrd(){ return (Math.round(Math.random())-0.5); } 

var entries = [
{'id': '68', 'fname': 'Madison', 'lname': 'A.', 'state': 'New York'}, {'id': '797', 'fname': 'Brooklyn', 'lname': 'B.', 'state': 'North Carolina'}, {'id': '18172', 'fname': 'Maria', 'lname': 'B.', 'state': 'Illinois'}, {'id': '2026', 'fname': 'Richelle-Ann', 'lname': 'C.', 'state': 'Hawaii'}, {'id': '302', 'fname': 'Jonathan', 'lname': 'C.', 'state': 'Washington'}, {'id': '21372', 'fname': 'Ryder', 'lname': 'C.', 'state': 'Kansas'}, {'id': '17824', 'fname': 'Albany', 'lname': 'C.', 'state': 'Utah'}, {'id': '23271', 'fname': 'Travis', 'lname': 'D.', 'state': 'Washington'}, {'id': '1342', 'fname': 'Jacob', 'lname': 'E.', 'state': 'California'}, {'id': '12603', 'fname': 'Caden', 'lname': 'G.', 'state': 'Virginia'}, {'id': '20548', 'fname': 'Allison', 'lname': 'G.', 'state': 'Wisconsin'}, {'id': '24550', 'fname': 'Amina', 'lname': 'H.', 'state': 'Virginia'}, {'id': '25550', 'fname': 'Safiya', 'lname': 'H.', 'state': 'Virginia'}, {'id': '1853', 'fname': 'Alia', 'lname': 'H.', 'state': 'Washington'}, {'id': '2810', 'fname': 'Hannah', 'lname': 'L.', 'state': 'Texas'}, {'id': '12358', 'fname': 'Sydney', 'lname': 'L.', 'state': 'Ohio'}, {'id': '1349', 'fname': 'Mary-Dryden', 'lname': 'M.', 'state': 'Virginia'}, {'id': '15255', 'fname': 'Kaylie', 'lname': 'M.', 'state': 'Washington'}, {'id': '1030', 'fname': 'Kate', 'lname': 'M.', 'state': 'Pennsylvania'}, {'id': '17055', 'fname': 'Megan', 'lname': 'M.', 'state': 'North Carolina'}, {'id': '24483', 'fname': 'Andrea', 'lname': 'N.', 'state': 'Oregon'}, {'id': '1165', 'fname': 'Glen', 'lname': 'N.', 'state': 'Alabama'}, {'id': '13709', 'fname': 'Fernando', 'lname': 'P.', 'state': 'Washington'}, {'id': '1016', 'fname': 'Madelyn', 'lname': 'P.', 'state': 'Missouri'}, {'id': '688', 'fname': 'Jillian', 'lname': 'P.', 'state': 'Michigan'}, {'id': '2647', 'fname': 'Emily', 'lname': 'P.', 'state': 'Pennsylvania'}, {'id': '21022', 'fname': 'Laura', 'lname': 'R.', 'state': 'Indiana'}, {'id': '3165', 'fname': 'Samuel', 'lname': 'R.', 'state': 'Mississippi'}, {'id': '14835', 'fname': 'Emily', 'lname': 'S.', 'state': 'Texas'}, {'id': '22566', 'fname': 'Paige', 'lname': 'S.', 'state': 'Ohio'}, {'id': '1508', 'fname': 'Olivia', 'lname': 'T.', 'state': 'Kentucky'}, {'id': '1470', 'fname': 'Victoria', 'lname': 'W.', 'state': 'California'}, {'id': '854', 'fname': 'Elena', 'lname': 'Y.', 'state': 'New Jersey'}, {'id': '2482', 'fname': 'Alexa', 'lname': 'B.', 'state': 'South Dakota'}, {'id': '3027', 'fname': 'Tommy', 'lname': 'C.', 'state': 'New Jersey'}, {'id': '1816', 'fname': 'Brayden', 'lname': 'J.', 'state': 'California'}, {'id': '16997', 'fname': 'Areeba', 'lname': 'Z.', 'state': 'Texas'}, {'id': '15155', 'fname': 'Hannah', 'lname': 'V.', 'state': 'Ohio'}, {'id': '13067', 'fname': 'Bryson', 'lname': 'M.', 'state': 'Florida'}, {'id': '796', 'fname': 'Jessica', 'lname': 'G.', 'state': 'North Carolina'}, {'id': '2031', 'fname': 'Tori', 'lname': 'W.', 'state': 'California'}, {'id': '1074', 'fname': 'Anisa', 'lname': 'B.', 'state': 'Florida'}, {'id': '1282', 'fname': 'Elizabeth', 'lname': 'E.', 'state': 'Connecticut'}, {'id': '1532', 'fname': 'Jaden', 'lname': 'Y.', 'state': 'Washington'}, {'id': '6477', 'fname': 'Molly', 'lname': 'N.', 'state': 'New York'}, {'id': '16501', 'fname': 'Andrea', 'lname': 'M.', 'state': 'Rhode Island'} 
 ];
var grandprize = [{'id': '859', 'fname': 'Katie', 'lname': 'S.', 'state': 'New Jersey'}, {'id': '616', 'fname': 'Tajahya', 'lname': 'B.', 'state': 'Minnesota'}, {'id': '23403', 'fname': 'Westley', 'lname': 'M.', 'state': 'Utah'}]; 
schl.pac.le = entries.length;
entries.sort( randOrd );

for ( var i = 0; i < entries.length; i++ ) {
	schl.pac.tabs += '<li><a href="#?" onclick="add2favs(' + entries[i].id + ');return false;" class="btnAdd">Add</a><a href="#" onclick="jt(' + entries[i].id + ',' + i + ');return false;" class="magnify"><img src="images/100x177/' + entries[i].id + '.png" border="0" /></a><p>' + entries[i].fname + ' ' + entries[i].lname + '<br />' + entries[i].state + '</p></li>';
	schl.pac.d[entries[i].id] = [true, i];
	if ( i == 9 || i == 19 || i == 29 || i == 39 ) { schl.pac.tabs += '|'; }		
}
function add2favs(id) {	DynamicSubmit('action=add&id=' + id,'faves'); }

function addpic(id) {
	for ( var i = 0; i < 5; i++ ) {
		if ( !schl.pac.favsImgs[i] ) {
			jQuery('#faves' + (i)).attr('src', '/pushupandcreate/images/78x54/' + id + '.png');
			schl.pac.favsImgs[i] = 1;
			break;
		}
	}
}
function remove(which) { DynamicSubmit('action=remove&id=' + which,'faves'); }

function page(which) {
	var w = which.id.substring(which.id.length-1);
	if ( schl.pac.page == w ) { return; }
	jQuery('#page' + schl.pac.page).parents('li').removeClass();
	jQuery(which).parents('li').addClass('on');
	if ( !schl.pac.pages[w] ) {		
		jQuery('#n-gallery').append('<ul class="tab" id="gallery' + w + '">' + schl.pac.tabs.split('|')[w-1] + '</ul>');
		schl.pac.pages[w] = true;
		if(schl.pac.ie6) {
			jQuery('#n-gallery img').ifixpng();
		}
	}
	jQuery('#n-gallery ul').addClass('tab');
	jQuery('#gallery' + w).removeClass('tab');
	schl.pac.page = w;		
	if (!schl.pac.mg[w-1]){
		magnify('#gallery' + w);
		schl.pac.mg[w-1] = true;
	}	
}
function displayError(which) {
	if(!schl.pac.error) {
		jQuery('<div id="n-error"><a href="#?" onclick="hideError();return false;"><img src="images/btnClose.gif" border="0" class="close" /></a><div id="errMsg"></div></div>').appendTo('#n-content');
		schl.pac.error = true;
	}
	jQuery('#errMsg').html( schl.pac.errors[which]);
	jQuery('#n-error').show();
}
function hideError() { jQuery('#n-error').hide(); }
function hideEmail() { jQuery('#frmEmail .txt').removeClass('error'); jQuery('#emailCallout').hide(); jQuery('#g_email').show(); }
function closeEmail() { jQuery('#frmEmail .txt').removeClass('error'); jQuery('#emailCallout').hide(); }
function pacOverlay() {
	if(!schl.pac.g_overlay) {
		jQuery('#n-content').append('<div id="g_overlay"><img src="images/overlay.png" /></div><div id="g_big"><a href="#" onclick="jtc();return false;" class="close">Close</a><div id="g_big_g"></div></div>');
		schl.pac.g_overlay = true;
		if(schl.pac.ie6) {
			jQuery('#g_overlay img, #g_big img').ifixpng();	
		}
	}
	jQuery("#g_overlay").show();
}
function pacEmailBtn() {
	if(!schl.pac.g_email) {
		jQuery('#g_big').append('<a href="#" onclick="pacEmailCallout();return false;" id="g_email">Email</a>');
		schl.pac.g_email = true;
	}
	jQuery("#g_email").show();
}
function jt(eid, i) {
	pacOverlay();
	schl.pac.big = i;
	pacBig(eid, 'images/293x519/', false, i);
	pacEmailBtn();
	try	{ document.frmEmail.ID.value=eid; }
	catch (err) { jQuery(function(){document.frmEmail.ID.value=eid;}); }	
}
function gp(eid) {
	pacOverlay();
	pacBig(eid, 'images/grand-prize/', true);	
	jQuery("#g_email,#emailCallout").hide();
}
function jtc() { jQuery("#g_big,#g_overlay,#g_email,#emailCallout").hide(); sendAnother(); }
function pacEmailCallout() {
	jQuery('#g_email').hide();
	jQuery('#emailCallout').insertAfter("#g_email");
	jQuery('#emailCallout').show();
	document.forms['frmEmail'].design.value = entries[schl.pac.big].fname + ' ' + entries[schl.pac.big].lname + '<br />' + entries[schl.pac.big].state;
	return false;
}
function pacBig(eid, path, gp, i) {
	var tmp = '';
	if ( gp ) {
		tmp = '<p class="details">' + grandprize[eid-1].fname + ' ' + grandprize[eid-1].lname + '<br />' + grandprize[eid-1].state + '</p>';
		eid = grandprize[eid-1].id;
	}
	else {
		tmp = '<a href="#" class="btnAdd" onclick="add2favs(' + entries[i].id + ');return false;">Add</a><a href="#" class="arr btnPrev" onclick="pacPrev();return false;">Prev</a><a href="#" class="arr btnNext" onclick="pacNext();return false;">Next</a><p class="details">' + entries[i].fname + ' ' + entries[i].lname + '<br />' + entries[i].state + '</p>';
	}
	jQuery("#g_big_g").html(tmp + '<img src="' + path  + eid + '.png" border="0" width="293" height="519" />');		
	jQuery("#g_big").show();
	if(schl.pac.ie6) {
			jQuery('#g_big_g img').ifixpng();	
		}
}
function initGallery() {	
	jQuery('#n-gallery').html('<ul id="gallery1">' + schl.pac.tabs.split('|')[0] + '</ul>');
	var d = getQueryVariable('d');	
	if ( d ) {				
		if ( typeof schl.pac.d[d] != 'undefined' ) { jt(d, schl.pac.d[d][1]); }
	}		
	magnify('#gallery1');
	schl.pac.mg[0] = true;
}
function magnify(which) {
	var magnify = 'magnify.png';
	if (schl.pac.ie6) magnify = 'magnify2.png';
	jQuery(which + ' .magnify').hover(function(){ jQuery(this).prepend('<img src="images/' + magnify + '" border="0" id="mg" />'); }, function(){ jQuery('#mg').remove(); });
}
function slide(dir) {
	var j = schl.pac.big + dir;
	if ( j >= schl.pac.le ) j = 0;
	else if ( j < 0 ) j = schl.pac.le - 1;
	pacBig(entries[j].id, 'images/293x519/', false, j);
	schl.pac.big = j;
}
function pacPrev(i) { slide(-1); }
function pacNext(i) { slide(1); }
function pacClear(which) {
	jQuery(which).removeClass('error');
	if ( which.value == '' ) which.value = which.defaultValue;
	else if ( which.value == which.defaultValue ) which.value = '';
}
function sendEmail() { jQuery('#frmEmail .txt').addClass('error'); }
function sendAnother() {
	jQuery('#tyou').hide();
	document.forms['frmEmail'].reset();
	jQuery('#emailform').show();
}