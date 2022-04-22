<?php

    function getProducts() {

        $curl = curl_init();
        // $nonce = get_nonce();

        // function makeRandomString($bits = 256) {
        //     $bytes = ceil($bits / 8);
        //     $return = '';
        //     for ($i = 0; $i < $bytes; $i++) {
        //         $return .= chr(mt_rand(0, 255));
        //     }
        //     return $return;
        // }

        // $nonce = makeRandomString();

        $nonce = rand(1,50);
        // error_log($nonce);

        // $test = OAuth::setNonce($nonce);
        // error_log($test);
        //return $nonce;

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://localhost:3000/labb2-hugo/wp-json/wc/v3/products?oauth_consumer_key=ck_3fab00917df02c50077dc6b7f04deee92c06af4c&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1650547143&oauth_nonce='.$nonce.'&oauth_version=1.0&oauth_signature=l5RdmRoq586skRNqqBsE9EhJIdo%253D',
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
        return $response;

    }

?>