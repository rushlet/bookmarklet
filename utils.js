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

export function removeLink(linkToRemove) {
    const existingLinks = getLinksAsArray();
    const updatedLinks = existingLinks.filter((link) => link !== linkToRemove);
    setLinks(updatedLinks);
}

export function replaceLink(existing, newLink) {
    const existingLinks = getLinksAsArray();
    const oldLink = existing.replace(/\/$/, "");
    const links = existingLinks;
    links[existingLinks.indexOf(oldLink)] = newLink;
    setLinks(links);
}

export function hideEl(el) {
    el.classList.add('hide');
}

export function showEl(el) {
    el.classList.remove('hide');
}