export function getLinks() {
    return localStorage.getItem('links');
}

export function getLinksAsArray() {
    return getLinks().split(',');
}

export function setLinks(links) {
    localStorage.setItem('links', links);
}

export function addToLinks(link) {
    const existingLinks = getLinksAsArray();
    const updatedLinks = [link, ...existingLinks];
    setLinks(updatedLinks);
}