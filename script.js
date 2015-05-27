var interval_bot;

function login()
{
 document.getElementById('state').innerHTML="<b>State:</b> Logged in.";
 document.getElementById('login_form').submit();
}

function logout()
{
 document.getElementById('state').innerHTML="<b>State:</b> Logged out.";
 document.getElementById('logout_form').submit();
}

function pfandsammeln()
{
 document.getElementById('state').innerHTML="<b>State:</b> Sammle für "+document.getElementById('sammeln').value+" Minuten Pfandflaschen..";
 document.getElementById('pfandsammel_form').submit();
}

function pfandsammeln_cancel()
{
 document.getElementById('state').innerHTML="<b>State:</b> Pfandsammeln gestoppt..";
 document.getElementById('pfandsammel_cancel_form').submit();
}

function pfandbot()
{
 setTimeout(clearwagen,200);
 setTimeout(pfandsammeln,2000);
 document.getElementById('sammeln').value="10";
 interval_bot = setInterval(pfandsammeln,610000); //Every 10 Minutes
 setTimeout(pfandbot,610000);
 document.getElementById('state').innerHTML="<b>State:</b> Pfandbot gestartet..";
}

function pfandbot_cancel()
{
 document.getElementById('state').innerHTML="<b>State:</b> Pfandbot gestoppt..";
 clearInterval(interval_bot);
}

function clearwagen()
{
 document.getElementById('clearpfand_form').submit();
}