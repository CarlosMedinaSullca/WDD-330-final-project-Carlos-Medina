
// This Function renders a template in a parent element. It is used to render a template in header or footer

function renderWithTemplate(template, parentElement) {
    parentElement.insertAdjacentHTML("afterbegin", template);        
}

// This function load the footer or header template and return it

async function loadTemplate(path) {
    const data = await fetch(path);
    const template = data.text();
    return template
}

// This function is to render dynamically the header and footer for every html page where the fuction is called

export async function loadHeaderFooter() {
    const headerElement = document.querySelector(".header-structure");
    const headerTemplate = await loadTemplate("../partials/header.html");
    
    const footerElement = document.querySelector(".footer-structure");
    const footerTemplate = await loadTemplate("../partials/footer.html");

    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);


}

// This function is to get the query string from the URL and return the value of the parameter

export function getParams(param) {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param).replace("+", ",");
    console.log(product);
    return product;
  }


export function renderListWithTemplate (
    templateFn,
    parentElement,
    list,
    position = "afterbegin",
    clear = false,
) {
    const strings = list.map(templateFn);
    if(clear) {
        parentElement.innerHTML = "";
    }

    parentElement.insertAdjacentHTML(position, strings.join(""));
}


