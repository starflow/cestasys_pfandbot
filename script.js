/**
 * The following is an anonymous self-executing function
 * which will prevent your code from cluttering the global namespace.
 *
 * Read more about this here:
 * http://nicoespeon.com/en/2013/05/properly-isolate-variables-in-javascript/
 */
(function (window, document, undefined) {
    var interval_bot;
    var state_element = document.getElementById('state');

    var buttons = {
        'login': document.getElementById('login'),
        'logout': document.getElementById('logout'),
        'start_collecting': document.getElementById('start_collecting'),
        'stop_collecting': document.getElementById('stop_collecting'),
        'start_bot': document.getElementById('start_bot'),
        'stop_bot': document.getElementById('stop_bot')
    };

    buttons['login'].addEventListener('click', login);
    buttons['logout'].addEventListener('click', logout);
    buttons['start_collecting'].addEventListener('click', pfandsammeln);
    buttons['stop_collecting'].addEventListener('click', pfandsammeln_cancel);
    buttons['start_bot'].addEventListener('click', pfandbot);
    buttons['stop_bot'].addEventListener('click', pfandbot_cancel);
    document.getElementById('target_frame').addEventListener('click', login);

    function login() {
        document.getElementById('state').innerHTML="<b>State:</b> Logged in.";
        document.getElementById('login_form').submit();
    }

    function logout() {
        document.getElementById('state').innerHTML="<b>State:</b> Logged out.";
        document.getElementById('logout_form').submit();
    }

    function pfandsammeln() {
        document.getElementById('state').innerHTML="<b>State:</b> Sammle für "+document.getElementById('sammeln').value+" Minuten Pfandflaschen..";
        document.getElementById('pfandsammel_form').submit();
    }

    function pfandsammeln_cancel() {
        document.getElementById('state').innerHTML="<b>State:</b> Pfandsammeln gestoppt..";
        document.getElementById('pfandsammel_cancel_form').submit();
    }

    function pfandbot() {
        setTimeout(clearwagen,200);
        setTimeout(pfandsammeln,2000);
        document.getElementById('sammeln').value="10";
        interval_bot = setInterval(pfandsammeln,610000); //Every 10 Minutes
        setTimeout(pfandbot,610000);
        document.getElementById('state').innerHTML="<b>State:</b> Pfandbot gestartet..";
    }

    function pfandbot_cancel() {
        document.getElementById('state').innerHTML="<b>State:</b> Pfandbot gestoppt..";
        clearInterval(interval_bot);
    }

    function clearwagen() {
        document.getElementById('clearpfand_form').submit();
    }
}(this, this.document));
