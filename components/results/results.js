import * as utils from '../../utils.js';

function initResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookmark = urlParams.get('bookmark')
    document.querySelector('.url_submitted').innerText = `You added ${bookmark}`;
    addBookmarkToSession(bookmark);
}

function addBookmarkToSession(url) {
    console.log('add bookmark to storage');
    // add new bookmark to array in storage
    utils.addToLinks(url);
    console.log('links: ', utils.getLinks());
}

window.onload = initResults;