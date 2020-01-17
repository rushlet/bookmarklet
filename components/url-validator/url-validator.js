class URLValidator {
    constructor(existingLinks, bookmarks) {
        this.existingLinks = existingLinks;
        this.input = document.querySelector('#url');
        this.errorMessageContainer = document.querySelector('.error-msg');
        this.bookmarks = bookmarks;
    }
    
    validateSubmission() {
        // check URL is valid & unique, if so redirect to results page
        console.log('event', event);
        event.preventDefault();
        console.log('this', this);
        this.url = this.input.value;
        if (this.validateURL() && this.checkUniqueURL()) {
            // redirect to results page
            this.removeAlert();
            window.location.href = `./components/results/results-page.html?bookmark=${encodeURIComponent(this.url)}`;
        }
    }

    checkUniqueURL() {
        // check url isn't already in list
        console.log('check url isn\'t in list');
        console.log('existing links', this.existingLinks);
        console.log('exists?', this.existingLinks.includes(this.url));
        const uniqueURL = !this.existingLinks.includes(this.url);
        console.log('uniqueURL?', uniqueURL);
        if (!uniqueURL) this.alertUser('existingURL');
        return uniqueURL;
    }

    validateURL() {
        // regex to check url is correct format (and has http or https protocol)
        const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        const regex = new RegExp(expression);
        const validURL = this.url.match(regex);
        if (!validURL) this.alertUser('invalidURL');
        return validURL;
    }

    alertUser(error) {
        // alert user to invalid URL - highlight input box & add error description
        const errorMessages = {
            invalidURL: 'Oops! You\'ve submitted an invalid URL. Make sure it contains http:// or https://',
            existingURL: 'Looks like that link has already been bookmarked!'
        };
        this.errorMessageContainer.innerText = errorMessages[error];
        this.input.classList.add('error');
    }

    removeAlert() {
        // remove error alert from screen
        this.errorMessageContainer.innerText = '';
        this.input.classList.remove('error');
    }
}

export default URLValidator;