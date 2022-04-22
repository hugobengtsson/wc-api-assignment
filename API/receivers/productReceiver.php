<?php



    try {

        include_once("../controllers/productController.php");
        if ($_SERVER["REQUEST_METHOD"]) {

            if ($_SERVER["REQUEST_METHOD"] == "GET") {
                
                $products = getProducts();
                echo json_encode($products);
            }

        }

    }
    catch (Exception $err) {
        error_log($err);
    }



?>