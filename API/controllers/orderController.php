<?php
    // Function for fetching orders from the API.
    function getOrders() {

        // Curl code for fetching the API.
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://localhost:3000/labb2-hugo/wp-json/wc/v3/orders?oauth_consumer_key=ck_3fab00917df02c50077dc6b7f04deee92c06af4c&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1650887731&oauth_nonce=1qP5uc7pA8L&oauth_version=1.0&oauth_signature=IDuETsEjCPEJ7jTA4YOVcOH8DxI%253D',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        // Returning the response to the receiver.
        return $response;

    }

?>