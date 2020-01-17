import dummyLinks from './dummy-links.js';
import * as utils from './utils.js';
import URLValidator from './components/url-validator/url-validator.js';
import Bookmarks from './components/bookmarks/bookmarks.js';

function init() {
    console.log('working!');
    if (utils.getLinksAsArray().length === 0) utils.setLinks(dummyLinks); // set up dummy links if not used before
    const links = utils.getLinksAsArray();
    const bookmarks = new Bookmarks(links);
    const urlValidator  = new URLValidator(links, bookmarks);
    bookmarks.populateLinks();
    document.querySelector('form').onsubmit = () => urlValidator.validateSubmission();
}

window.onload = init;