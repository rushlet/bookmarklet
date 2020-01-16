function initResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookmark = urlParams.get('bookmark')
    document.querySelector('.url_submitted').innerText = `You added ${bookmark}`;
    addBookmarkToSession(bookmark);
}

function addBookmarkToSession(url) {
    console.log('add bookmark to session');
    // add new bookmark to array in session
    const existingLinks = window.localStorage.getItem('links').split(',');
    console.log('existiing links', typeof existingLinks, existingLinks);
    const updatedLinks = [url, ...existingLinks];
    console.log('updatedLinks', updatedLinks);
    window.localStorage.setItem('links', updatedLinks);
    console.log('links: ', window.localStorage.getItem('links'));
}

window.onload = initResults;