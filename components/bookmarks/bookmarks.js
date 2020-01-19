import * as utils from '../../utils.js';
class Bookmarks {
    constructor(existingLinks, urlValidator) {
        this.links = existingLinks;
        this.bookmarksContainer = document.querySelector('.bookmarks-container');
        this.urlValidator = urlValidator;
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

    editBookmark(buttonEl) {
        console.log('edit bookmark', buttonEl.parentElement);
        const bookmarkLi = buttonEl.parentElement;
        const bookmark = bookmarkLi.querySelector('a');
        // show editor
        const editor = document.querySelector('.edit-bookmark');
        utils.showEl(editor);
        // populate with current values
        document.querySelector('#edit-bookmark__name').value = bookmark.innerText;
        document.querySelector('#edit-bookmark__url').value = bookmark.href; 
        document.querySelector('.edit-bookmark__form').onsubmit = (e) => {
            e.preventDefault();
            this.urlValidator.validateEdit(bookmark);
        };
    }

    deleteBookmark(buttonEl) {
        console.log('delete bookmark', buttonEl);
        const bookmark = buttonEl.parentElement;
        if (confirm('Are you sure you want to delete this bookmark?')) {
            document.querySelector('.bookmarks').removeChild(bookmark);
            utils.removeLink(bookmark.querySelector('a').href);
        }
    }

}

export default Bookmarks;
