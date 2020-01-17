class Bookmarks {
    constructor(existingLinks) {
        this.links = existingLinks;
        this.bookmarksContainer = document.querySelector('.bookmarks-container');
    }

    populateLinks() {
        console.log('populating links');
        // check if session has list of links & if so populate
        this.links = localStorage.getItem('links').split(','); // session stores as string, so convert to array for easier manipulation
        console.log(this.links);
        
        const numberOfLinks = this.links.length - 1;
        const listOfLinks = this.links.reduce((links, current, i) => {
            return `${links}<li class="bookmark">${current}</li>${(i === numberOfLinks) ? '</ul>' : ''}`;
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
