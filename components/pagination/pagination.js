export default class Pagination {
    constructor(links) {
        this.linksPerPage = 20;
        this.links = links;
        this.totalLinks = this.links.length;
        this.paginationContainer = document.querySelector('.pagination');
    }

    setUpPagination() {
        this.numberOfPages = Math.ceil(this.totalLinks / this.linksPerPage);
        console.log('number of pages', this.numberOfPages);
        let pageLinks = '';
        for (let i = 1; i <= this.numberOfPages; i++) {
            pageLinks = `${pageLinks} <button class="pagination__button ${i === 1 ? 'selected' : ''}">${i}</button>`;    
        }
        this.paginationContainer.innerHTML = pageLinks;
        this.displayInitialLinks();
        [...document.querySelectorAll('.pagination__button')].forEach((btn) => btn.addEventListener('click', (event) => this.changePage(event)));
    }

    displayInitialLinks() {
        const allLinks = document.querySelectorAll('.bookmark');
        allLinks.forEach((link, i) => {
            if (i >= this.linksPerPage) link.classList.add('hide');
        });
    }

    changePage(event) {
        const pageNumber = event.target.innerText;
        const firstIndexToShow = (pageNumber - 1) * this.linksPerPage
        const lastIndexToShow = firstIndexToShow + this.linksPerPage - 1;
        console.log('show numbers between', firstIndexToShow, lastIndexToShow);
        
        const allLinks = document.querySelectorAll('.bookmark');
        allLinks.forEach((link, i) => {
            link.classList.add('hide');
            if (i >= firstIndexToShow && i <= lastIndexToShow) {
                console.log('showing link');
                
                link.classList.remove('hide');
            }
        });
    }

}