

function initSite(){

eventListeners();


}

async function makeRequest() {

}

async function getProducts() {

}

async function getPosts() {

}

async function getOrders() {

}

function eventListeners() {
    document.getElementById("productDisplay").addEventListener("click", getProducts);
    document.getElementById("postDisplay").addEventListener("click", getPosts);
    document.getElementById("orderDisplay").addEventListener("click", getOrders);
}





window.addEventListener("load", initSite);