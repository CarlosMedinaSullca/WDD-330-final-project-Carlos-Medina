
function renderWithTemplate(template, parentElement, callback ) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    if(callback) {
        callback();
    }
    
}

async function loadTemplate(path) {
    const data = await fetch(path);
    const template = data.text();
    return template
}

export async function loadHeaderFooter() {
    const headerElement = document.querySelector(".header");
    const headerTemplate = await loadTemplate("../partials/header.html");
    
    const footerElement = document.querySelector("footer");
    const footerTemplate = await loadTemplate("../partials/footer.html");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);


}

