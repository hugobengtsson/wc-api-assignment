<?php



    try {

        include_once("../controllers/postController.php");
        if ($_SERVER["REQUEST_METHOD"]) {

            if ($_SERVER["REQUEST_METHOD"] == "GET") {

                $posts = getPosts();
                echo json_encode($posts);
            }

        }

    }
    catch (Exception $err) {
        error_log($err);
    }



?>