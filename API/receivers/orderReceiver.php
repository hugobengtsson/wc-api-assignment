<?php


    try {

        include_once("../controllers/orderController.php");
        if ($_SERVER["REQUEST_METHOD"]) {

            if ($_SERVER["REQUEST_METHOD"] == "GET") {
                $orders = getOrders();
                echo json_encode($orders);
            }

        }

    }
    catch (Exception $err) {
        error_log($err);
    }



?>