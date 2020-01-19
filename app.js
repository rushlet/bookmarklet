import dummyLinks from './dummy-links.js';
import * as utils from './utils.js';
import URLValidator from './components/url-validator/url-validator.js';
import Bookmarks from './components/bookmarks/bookmarks.js';

window.onload = () => {
    console.log('working!');
    // utils.setLinks(dummyLinks); // reset links
    if (utils.getLinksAsArray().length === 0) utils.setLinks(dummyLinks); // set up dummy links if not used before
    const links = utils.getLinksAsArray();
    const urlValidator = new URLValidator(links);
    const bookmarks = new Bookmarks(links, urlValidator);
    bookmarks.populateLinks();
    setUpEvents(urlValidator);
};

function setUpEvents(urlValidator) {
    document.querySelector('.add-bookmark').onsubmit = (e) => urlValidator.validateSubmission();
    Array.from(document.querySelectorAll('.button__close')).forEach((el) => {
        el.addEventListener('click', () => utils.hideEl(el.parentElement));
    });
}
