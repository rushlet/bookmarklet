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
            const linkEl = `<li class="bookmark">
            <button class="bookmark__edit" title="edit" aria-label="edit link"><img src="./assets/edit.svg" alt=""></button>
            <button class="bookmark__delete" title="delete" aria-label="delete link"><img src="./assets/exit.svg" alt=""></button>
            <a class="bookmark__link" href="${current}">${current}</a></li>`;
            return `${links}${linkEl}${(i === numberOfLinks) ? '</ul>' : ''}`;
        }, '<ul class="bookmarks">');
        this.bookmarksContainer.innerHTML = listOfLinks;
        this.initialiseButtons();
    }

    initialiseButtons() {
        document.querySelectorAll('.bookmark__edit').forEach(btn => {
            btn.addEventListener('click', (evt) => {
                this.editBookmark(evt.target);
            });
        });
        document.querySelectorAll('.bookmark__delete').forEach(btn => {
            btn.addEventListener('click', (evt) => {
                this.deleteBookmark(evt.target);
            });
        });
    }

    editBookmark() {
        console.log('edit bookmark');
    }

    deleteBookmark() {
        console.log('delete bookmark');
    }

}

export default Bookmarks;
