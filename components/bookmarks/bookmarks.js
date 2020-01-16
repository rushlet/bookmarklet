class Bookmarks {
    constructor(existingLinks) {
        this.links = existingLinks;
        this.bookmarksContainer = document.querySelector('.bookmarks-container');
    }

    populateLinks() {
        // check if session has list of links & if so populate
        // if not, populate with dummy links (from https://gist.github.com/demersdesigns/4442cd84c1cc6c5ccda9b19eac1ba52b)
        const numberOfLinks = this.links.length - 1;
        const listOfLinks = this.links.reduce((links, current, i) => {
            return `${links}<li class="bookmark">${current}</li>${(i === numberOfLinks) ? '</ul>' : ''}`;
        }, '<ul class="bookmarks">');
        this.bookmarksContainer.innerHTML = listOfLinks;
    }

    addBookmark(url) {
        // add new bookmark to array in session
        // const bookmarkList = document.querySelector('.bookmarks');
        // const existingList = bookmarkList.innerHTML;
        // bookmarkList.innerHTML = `<li class="bookmark">${url}</li>${existingList}`;
    }
}

export default Bookmarks;
