export default class Pagination {
    constructor(links) {
        this.linksPerPage = 20;
        this.links = links;
        this.totalLinks = this.links.length;
        this.paginationContainer = document.querySelector('.pagination');
        this.pageNumber = 1;
    }

    setUpPagination() {
        // create buttons for pagination
        this.numberOfPages = Math.ceil(this.totalLinks / this.linksPerPage);
        console.log('make', this.numberOfPages, 'pages');
        
        let pageLinks = '<button class="pagination__button btn-previous" disabled aria-label"previous"><</button>';
        for (let i = 1; i <= this.numberOfPages; i++) {
            pageLinks = `${pageLinks} <button class="pagination__button btn-number btn-${i} ${i === 1 ? 'selected' : ''}">${i}</button>`;    
        }
        pageLinks = `${pageLinks} <button class="pagination__button btn-next" aria-label"next">></button>`;
        this.paginationContainer.innerHTML = pageLinks;
        // show first page
        this.changePage(this.pageNumber);
        // add event listeners for page change
        this.addEventListeners();
    }

    addEventListeners() {
        [...document.querySelectorAll('.btn-number')].forEach((btn) => {
            btn.addEventListener('click', (event) => this.changePage(event.target.innerText));
        });
        document.querySelector('.btn-previous').addEventListener('click', () => this.changePage(this.pageNumber - 1));
        document.querySelector('.btn-next').addEventListener('click', () => this.changePage(this.pageNumber + 1));
    }

    updateNumberOfLinksToDisplay(linkNumber) {
        this.linksPerPage = (linkNumber === 'all') ? this.totalLinks : parseInt(linkNumber);
        if (linkNumber === 'all') this.pageNumber = 1;
        this.setUpPagination();
    }

    changePage(pageNumber) {
        console.log('pg number', pageNumber);
        
        this.pageNumber = parseInt(pageNumber);
        this.displayLinks(pageNumber - 1);
        this.enableAllButtons();
        this.updateDirectionalButtons();
        this.disableButton(document.querySelector(`.btn-${pageNumber}`));
    }

    displayLinks(pageIndex) {
        // hide bookmarks that are out of range
        const firstIndexToShow = pageIndex * this.linksPerPage
        const lastIndexToShow = firstIndexToShow + this.linksPerPage - 1;
        console.log('show between', firstIndexToShow, lastIndexToShow);
        
        
        const allLinks = document.querySelectorAll('.bookmark');
        allLinks.forEach((link, i) => {
            link.classList.add('hide');
            if (i >= firstIndexToShow && i <= lastIndexToShow) {
                link.classList.remove('hide');
            }
        });
    }

    enableAllButtons() {
        [...document.querySelectorAll('.btn-number')].forEach((button) => button.disabled = false);
    }

    updateDirectionalButtons() {
        document.querySelector('.btn-previous').disabled = !(this.pageNumber > 1);
        document.querySelector('.btn-next').disabled = !(this.pageNumber < this.numberOfPages);
    }

    disableButton(btn) {
        btn.disabled = true;
    }

}