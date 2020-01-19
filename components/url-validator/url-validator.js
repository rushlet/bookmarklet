import * as utils from '../../utils.js';

class URLValidator {
    constructor(existingLinks) {
        this.existingLinks = existingLinks;
        this.input = document.querySelector('#url-input');
    }
    
    validateSubmission() {
        // check URL is valid & unique, if so redirect to results page
        event.preventDefault();
        this.url = this.input.value;
        this.errorMessageContainer = document.querySelector('.error-msg');
        if (this.validateURL(this.url) && this.checkUniqueURL(this.url)) {
            // redirect to results page
            this.removeAlert();
            let newUrl = window.location.href.replace(new RegExp('/index.html'), '/components/results/results-page.html');
            newUrl = newUrl.split('?')[0];
            window.location.href = `${newUrl}?bookmark=${encodeURIComponent(this.url)}`;
        }
    }

    validateURL(url) {
        console.log('url', url);
        // regex to check url is correct format (and has http or https protocol)
        const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        const regex = new RegExp(expression);
        const validURL = url.match(regex);
        if (!validURL) this.alertUser('invalidURL');
        return validURL;
    }

    checkUniqueURL(url, existingLink) {
        // check url isn't already in list
        // if existing link, this is being called from the edit - need to remove url being edited from list to check against
        let links = this.existingLinks;
        if (existingLink) links = this.existingLinks.filter((link) => link !== existingLink)
        const uniqueURL = !links.includes(url);
        if (!uniqueURL) this.alertUser('existingURL');
        return uniqueURL;
    }

    checkUniqueName(name, bookmarkEl) {
        // check name isn't already in list
        let bookmarkNames = [...document.querySelectorAll('.bookmark__link')].map((bookmarkEl) => bookmarkEl.innerText);
        bookmarkNames = bookmarkNames.filter((name) => name !== bookmarkEl.innerText);
        const uniqueName = !bookmarkNames.includes(name);
        if (!uniqueName) this.alertUser('existingName');
        return uniqueName;
    }

    validateEdit(bookmarkEl) {
        const editor = event.target.parentElement;
        this.errorMessageContainer = editor.querySelector('.error-msg');
        const exisitingLink = bookmarkEl.href;
        const urlInput = event.target.querySelector('#edit-bookmark__url');
        this.input = urlInput;
        const url = urlInput.value;
        
        const name = event.target.querySelector('#edit-bookmark__name').value;
        if (this.validateURL(url) && this.checkUniqueURL(url, exisitingLink) && this.checkUniqueName(name, bookmarkEl)) {
            // update list of links in DOM
            bookmarkEl.href = url;
            bookmarkEl.innerText = name;
            // update list in storage
            utils.replaceLink(exisitingLink, url);
            console.log('valid edits');
            // hide editor
            utils.hideEl(editor);
        }
    }

    alertUser(error) {
        // alert user to invalid URL - highlight input box & add error description
        const errorMessages = {
            invalidURL: 'Oops! You\'ve submitted an invalid URL. Make sure it contains http:// or https://',
            existingURL: 'Looks like that link has already been bookmarked!',
            existingName: 'Another link already has that name!'
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