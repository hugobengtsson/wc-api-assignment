import { renderPosts, removePosts } from "./renderPosts.js";
import { renderProducts, returnProducts, removeProducts } from "./renderProducts.js";
import { renderOrders, returnOrders, removeOrders } from "./renderOrders.js";


function initSite(){

eventListeners();


}

async function makeRequest(url, option){

    document.getElementById("loadingContainer").style.display = "flex";

    try {
        let response = await fetch(url, option);
        let result = response.json();
        return result;
    } catch(err) {
        console.error(err);
    }

}

async function getProducts() {

    let url = "./api/receivers/productReceiver.php";

    let GET = await makeRequest(url, {method: "GET"});

    //renderProducts(JSON.parse(GET));

    let products = returnProducts();
    renderProducts(products)

}

async function getPosts() {

    let url = "./api/receivers/postReceiver.php";

    let GET = await makeRequest(url, {method: "GET"});

    renderPosts(JSON.parse(GET));
}

async function getOrders() {

    let url = "./api/receivers/orderReceiver.php";

    let GET = await makeRequest(url, {method: "GET"});

    // renderOrders(JSON.parse(GET));

    let orders = returnOrders();
    renderOrders(orders);




}

function eventListeners() {
    document.getElementById("getProduct").addEventListener("click", getProducts);
    document.getElementById("getPost").addEventListener("click", getPosts);
    document.getElementById("getOrder").addEventListener("click", getOrders);

    document.getElementById("removePosts").addEventListener("click", removePosts);
    document.getElementById("removeProducts").addEventListener("click", removeProducts);
    document.getElementById("removeOrders").addEventListener("click", removeOrders);


}





window.addEventListener("load", initSite);