import dummyLinks from './dummy-links.js';
import URLValidator from './components/url-validator/url-validator.js';
import Bookmarks from './components/bookmarks/bookmarks.js';

function init() {
    console.log('working!');
    const links = dummyLinks;
    const bookmarks = new Bookmarks(links);
    const urlValidator  = new URLValidator(links, bookmarks);
    bookmarks.populateLinks();
    document.querySelector('form').onsubmit = () => urlValidator.validateSubmission();
}

window.onload = init;