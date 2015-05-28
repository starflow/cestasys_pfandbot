/**
 * The following is an anonymous self-executing function
 * which will prevent your code from cluttering the global namespace.
 *
 * Read more about this here:
 * http://nicoespeon.com/en/2013/05/properly-isolate-variables-in-javascript/
 */
(function (window, document, undefined) {
    var interval_bot,
        state_element = document.getElementById('state'),

        buttons = {
            'start': document.getElementById('start'),
            'stop': document.getElementById('stop')
        },

        forms = {
            'login': document.getElementById('login_form'),
            'logout': document.getElementById('logout_form'),
            'pfandsammel': document.getElementById('pfandsammel_form'),
            'cancel': document.getElementById('cancel_form'),
            'clear': document.getElementById('clear_form')
        };

    buttons['start'].addEventListener('click', pfandbot);
    buttons['stop'].addEventListener('click', pfandbot_cancel);

    forms['login'].addEventListener('submit', function () {
        setState('Logged in..');
    });

    forms['logout'].addEventListener('submit', function () {
        setState('Logged out..');
    });

    forms['pfandsammel'].addEventListener('submit', function () {
        var collection_duration = document.getElementById('sammeln').value;
        setState('Sammle für ' + collection_duration + ' Minuten Pfandflaschen..');
        document.getElementById('pfandsammel_form').submit();
    });

    forms['cancel'].addEventListener('submit', function () {
        setState('Pfandsammeln gestoppt..');
    });

    function pfandbot() {
        setTimeout(clearwagen,200);
        setTimeout(pfandsammeln,2000);
        document.getElementById('sammeln').value="10";
        interval_bot = setInterval(pfandsammeln,610000); //Every 10 Minutes
        setTimeout(pfandbot,610000);
        document.getElementById('state').innerHTML="<b>State:</b> Pfandbot gestartet..";
    }

    function pfandbot_cancel() {
        setState('Pfandbot gestoppt..');
        clearInterval(interval_bot);
    }

    function clearwagen() {
        document.getElementById('clearpfand_form').submit();
    }

    function setState(text) {
        state_element.textContent = text;
    }
}(this, this.document));
