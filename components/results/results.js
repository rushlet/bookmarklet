function initResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookmark = urlParams.get('bookmark')
    document.querySelector('.url_submitted').innerText = `You added ${bookmark}`;
}

window.onload = initResults;