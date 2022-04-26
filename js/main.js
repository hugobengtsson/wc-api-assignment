
// Importing the different functions from their files.
import { renderPosts, removePosts } from "./renderPosts.js";
import { renderProducts, returnProducts, removeProducts } from "./renderProducts.js";
import { renderOrders, returnOrders, removeOrders } from "./renderOrders.js";

// Function for running other functions when the site is loaded.
function initSite(){
    // Function for the eventlisteners.
    eventListeners();
}

// General function to make a request to any API.
async function makeRequest(url, option){

    // Showing the loading animation.
    document.getElementById("loadingContainer").style.display = "flex";

    try {
        let response = await fetch(url, option);
        let result = response.json();
        return result;
    } catch(err) {
        console.error(err);
    }

}

// Function to get the products.
async function getProducts() {

    let url = "./api/receivers/productReceiver.php";

    let GET = await makeRequest(url, {method: "GET"});

    // Uncomment the row below to use the API-response instead of the "hard coded" object.
    //renderProducts(JSON.parse(GET));

    // Comment out the two rows below to use the API-response.
    let products = returnProducts();
    renderProducts(products)

}

// Function for fetching the posts.
async function getPosts() {

    let url = "./api/receivers/postReceiver.php";

    let GET = await makeRequest(url, {method: "GET"});

    renderPosts(JSON.parse(GET));

}

// Function for fetching the orders.
async function getOrders() {

    let url = "./api/receivers/orderReceiver.php";

    let GET = await makeRequest(url, {method: "GET"});

    // Uncomment the row below to use the API-response instead of the "hard coded" object.
    // renderOrders(JSON.parse(GET));

    // Comment out the two rows below to use the API-response.
    let orders = returnOrders();
    renderOrders(orders);

}

// Function for all the eventlisteners.
function eventListeners() {

    document.getElementById("getProduct").addEventListener("click", getProducts);
    document.getElementById("getPost").addEventListener("click", getPosts);
    document.getElementById("getOrder").addEventListener("click", getOrders);

    document.getElementById("removePosts").addEventListener("click", removePosts);
    document.getElementById("removeProducts").addEventListener("click", removeProducts);
    document.getElementById("removeOrders").addEventListener("click", removeOrders);

}

// Eventlistener for running initSite.
window.addEventListener("load", initSite);