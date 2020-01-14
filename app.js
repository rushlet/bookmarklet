function validateURL() {
    console.log('event', event);
    event.preventDefault();
    const url = event.target.querySelector('#url').value;
    // regex to check url is correct format (has http or https protocol)
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const regex = new RegExp(expression);
    // fetch to check valid http response
    (url.match(regex)) ? validateResponse(url) : alert('invalid url');

    // does http response contain title and info?
}

function validateResponse(url) {
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    alert(`Looks like there's a problem with that link! (Status code: ${response.status})`);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                });
                // add bookmark to list
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function init() {
    console.log('working!')
    document.querySelector('form').onsubmit = validateURL;
}

window.onload = init;