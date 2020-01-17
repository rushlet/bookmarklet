import * as utils from '../../utils.js';
class Bookmarks {
    constructor(existingLinks) {
        this.links = existingLinks;
        this.bookmarksContainer = document.querySelector('.bookmarks-container');
    }

    populateLinks() {
        console.log('populating links');
        // check if session has list of links & if so populate
        this.links = utils.getLinksAsArray(); // session stores as string, so convert to array for easier manipulation
        console.log(this.links);
        const numberOfLinks = this.links.length - 1;
        const listOfLinks = this.links.reduce((links, current, i) => {
            const linkEl = `<li class="bookmark">${current}</li>`;
            return `${links}${linkEl}${(i === numberOfLinks) ? '</ul>' : ''}`;
        }, '<ul class="bookmarks">');
        this.bookmarksContainer.innerHTML = listOfLinks;
    }

    // addBookmarkToDOM(url) {
    //     const bookmarkList = document.querySelector('.bookmarks');
    //     const existingList = bookmarkList.innerHTML;
    //     bookmarkList.innerHTML = `<li class="bookmark">${url}</li>${existingList}`;
    // }
}

export default Bookmarks;
