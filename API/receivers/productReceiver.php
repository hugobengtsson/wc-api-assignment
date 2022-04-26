<?php


    try {
        // Including the controller.
        include_once("../controllers/productController.php");

        // Checking if there is a request method.
        if ($_SERVER["REQUEST_METHOD"]) {

            // Checking if the request method is "GET".
            if ($_SERVER["REQUEST_METHOD"] == "GET") {
                
                // Calling the function to get the products.
                $products = getProducts();

                // Returning the response back to where it was called.
                echo json_encode($products);
            }

        }

    }
    catch (Exception $err) {
        error_log($err);
    }



?>