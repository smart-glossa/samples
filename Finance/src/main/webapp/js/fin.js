function customer() {
  var cus = "";
  cus += "<div class=\"cus\">";               
  cus += "<h2> Add Customer <\/h2>";
  cus += "<table>";         
  cus += "<tr>";          
  cus += "<td>Customer Id*:<\/td>";
  cus += "<td><input type=\"text\" id=\"cusId\" placeholder=\"customerId\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Account Number*:<\/td>";
  cus += "<td><input type=\"text\" id=\"accNo\" placeholder=\"AccountNumber\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Customer Name*:<\/td>";     
  cus += "<td><input type=\"text\" placeholder=\"Name\" id=\"cusname\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Address*:<\/td>";
  cus += "<td><input type=\"text\" placeholder=\"Address\" id=\"addr\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Mobile Number*:<\/td>";
  cus += "<td><input type=\"text\" placeholder=\"Mobile Number\" id=\"phoneNo\" maxlength=\"10\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>LandLine Number*:<\/td>";
  cus += "<td><input type=\"text\" placeholder=\"LandLine\" id=\"landline\" maxlength=\"11\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Referrence Name<\/td>";
  cus += "<td><input type=\"text\" id=\"refName\" placeholder=\"ReferrenceName\"><\/td>";	
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Referrrence Address<\/td>";
  cus += "<td><input type=\"text\" id=\"refAddress\" placeholder=\"ReferrenceAddress\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td>Referrence Contact Number<\/td>";
  cus += "<td><input type=\"text\" id=\"refConNo\" placeholder=\"ReferrenceContactNumber\"><\/td>";
  cus += "<\/tr>";
  cus += "<tr>";
  cus += "<td></td>"
  cus += "<td><input type=\"submit\" value=\"Add\" id=\"add\">";
  cus += "<input type=\"submit\" value=\"Update\" id=\"updateCus\"><\/td>";
  cus += "<\/tr>";
  cus += "<\/table>";
  cus += "<\/div>";
  cus += "<div class=\"getAllCus\"><\/div>";
  $('.fin')[0].innerHTML = cus;
}

function account() {
  var acc = "";   
  acc += "<div class=\"account\">";
  acc += "<div>";
  acc += "<h3>AddAccounts<\/h3>";
  acc += "<\/div>";
  acc += "<table>";
  acc += "<tr>";
  acc += "<td>Account Number*:<\/td>";
  acc += "<td><input type=\"text\" id=\"accNo\" placeholder=\"Account Number\"><\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td>Line*:<\/td>";
  acc += "<td><select id=\"line\" style=\"width: 220px;\">";
  acc += "<option><\/option>";
  acc += "<option>1<\/option>";
  acc += "<option>2<\/option>";
  acc += "<option>3<\/option>";
  acc += "<\/select>";
  acc += "<\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td>Duration*:<\/td>";
  acc += "<td><select id=\"duration\" style=\"width: 220px;\">";
  acc += "<option><\/option>";
  acc += "<option>10<\/option>";
  acc += "<option>60<\/option>";
  acc += "<option>100<\/option>";
  acc += "<\/select><\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td>ModeOfPayment*:<\/td>";
  acc += "<td><select id=\"modeofpay\"style=\"width: 220px;\">";
  acc += "<option><\/option>";
  acc += "<option>daily<\/option>";
  acc += "<option>weekly<\/option>";
  acc += "<\/select><\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td>Amount Given:<\/td>";
  acc += "<td><input type=\"text\" placeholder=\"Amount Given\" id=\"amtgiven\"><\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td>Amount ToPay*:<\/td>";
  acc += "<td><input type=\"text\" placeholder=\"AmountToPay\" id=\"amttopay\"><\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td>Given Date*:<\/td>";
  acc += "<td><input placeholder=\"Date\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\"  id=\"date\"><\/td>";
  acc += "<\/tr>";
  acc += "<tr>";
  acc += "<td><\/td>";
  acc += "<td><input type=submit value=Add id=addAcc>";
  acc += "<input type=submit value=Update id=updateAcc><\/td>";
  acc += "<\/tr>";
  acc += "<\/table>";
  acc += "<div class=getAllAccount><\/div>";
  $('.fin')[0].innerHTML = acc;
}
/* Adding payment detail */
function getCookie(uname){
	cName = "";
	pCOOKIES = new Array();
	pCOOKIES = document.cookie.split('; ');
	for(bb = 0; bb < pCOOKIES.length; bb++){
		NmeVal  = new Array();
		NmeVal  = pCOOKIES[bb].split('=');
		if(NmeVal[0] == w){
			cName = unescape(NmeVal[1]);
		}
	}
	return cName;
}
function myFunction() {
    var x = document.cookie;
    document.getElementById("uName").innerHTML = x;
}
function payment() {
  var pay = "";
  pay += "<div class=\"payment\">";
  pay += "<div>";
  pay += "<h3>Add Payments<\/h3>";
  pay += "<\/div>";
  pay += "<table>";
  pay += "<tr>";
  pay += "<td>Account Number*:<\/td>";
  pay += "<td><input type=\"text\" placeholder=\"Account Number\" id=\"accNo\"><\/td>";
  pay += "<\/tr>";
 /*pay += "<tr>";
  pay += "<td>User Name*:<\/td>";
  pay += "<td><input type=\"text\" id=\"uName\" value=\"$.cookie('uname')\"><\/td>";
  pay += "<\/tr>";*/
  pay += "<tr>";
  pay += "<td>Amount*:<\/td>";
  pay += "<td><input type=\"text\" placeholder=\"Amount\" id=\"amount\"><\/td>";
  pay += "<\/tr>";
  pay += "<tr>";
  pay += "<td>Collection Date*:<\/td>";
  pay += "<td><input placeholder=\"Date\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\"  id=\"collDate\"><\/td>";
  pay += "<\/tr>";
  pay += "<tr>";
  pay += "<td>Entry Date*:<\/td>";
  pay += "<td><input placeholder=\"Date\" class=\"textbox-n\" type=\"text\" onfocus=\"(this.type='date')\"  id=\"entry\"><\/td>";
  pay += "<\/tr>";
  pay += "<tr>";
  pay += "<td><\/td>";
  pay += "<td><input type=\"submit\" value=\"Add\" id=\"addPay\"><\/td>";
  pay += "<\/tr>";
  pay += "<\/table>";
  pay += "<\/div>";
  $('.fin')[0].innerHTML = pay;
}

function statement() {
  var sta = "";
  sta += "<div class=sta>";
  sta += "<div>";
  sta += "<label>AccountNumber:<\/label>";
  sta += "<\/div>";
  sta += "<div>";
  sta += "<input type=text id=accId placeholder=\"Account Number\">";
  sta += "<\/div>";
  sta += "<h4 id=name><\/h4>";
  sta += "<h4 id=bal><\/h4>";
  sta += "<div class=getStatement><\/div>";
  sta += "<input type=button id=print value=Print onclick=previewStatement()>";
  sta += "<\/div>";
  $('.fin')[0].innerHTML = sta;
}
//Adding js file
