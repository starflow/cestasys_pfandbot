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
    });

    forms['cancel'].addEventListener('submit', function () {
        setState('Pfandsammeln gestoppt..');
    });

    function pfandbot() {
        var ten_m_in_ms = 10 * 60000; // Ten minutes multiplied by 60k ms in a minute

        setState('Pfandbot gestartet..');
        clearInterval(interval_bot); // Make sure there is only one interval
        document.getElementById('sammeln').value = "10";

        interval_bot = setInterval(pfandsammeln, ten_m_in_ms + 15000);
        pfandsammeln();
        function pfandsammeln() {
            forms['pfandsammel'].submit();
            setTimeout(function () {
                forms['clear'].submit();
            }, ten_m_in_ms + 10000); // clear the shopping cart, ten seconds after collecting ended
        };
    }

    function pfandbot_cancel() {
        setState('Pfandbot gestoppt..');
        clearInterval(interval_bot);
    }

    function setState(text) {
        state_element.textContent = text;
    }
}(this, this.document));
