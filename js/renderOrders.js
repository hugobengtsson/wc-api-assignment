
// Function for rendering out the orders.
export function renderOrders(orders) {

    const container = document.getElementById("orderDisplay");

    container.innerHTML = "";

    orders.forEach(order => {

        let renderContainer = document.createElement("div");
        renderContainer.classList.add("flex", "flexColumn", "contentContainer")
        container.append(renderContainer);

        let orderNumber = document.createElement("h2");
        orderNumber.innerHTML = order.id;

        let date = document.createElement("p");
        date.innerHTML = order.date_created;

        let status = document.createElement("p");
        status.innerHTML = "Status: " + order.status;

        let total = document.createElement("p");
        total.innerHTML = "Totalsumma: " + order.total + " " + order.currency_symbol;

        renderContainer.append(orderNumber, date, status, total);

    })

    let removeButton = document.getElementById("removeOrders");
    removeButton.style.display = "block";

    // Removing the loading animation.
    document.getElementById("loadingContainer").style.display = "none";

}

// Function for emptying the container for the rendered orders.
export function removeOrders() {
    const container = document.getElementById("orderDisplay");
    container.innerHTML = "";

    let removeButton = document.getElementById("removeOrders");
    removeButton.style.display = "none";
}

// Since the nonce is not working as expected this is the orders that are being rendered.
let orderList = [
    {
        "id": 106,
        "parent_id": 0,
        "status": "processing",
        "currency": "SEK",
        "version": "6.4.1",
        "prices_include_tax": true,
        "date_created": "2022-04-25T13:28:27",
        "date_modified": "2022-04-25T13:28:48",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "200.00",
        "shipping_tax": "0.00",
        "cart_tax": "195.60",
        "total": "1178.00",
        "total_tax": "195.60",
        "customer_id": 0,
        "order_key": "wc_order_xaKz8IfDkYPhr",
        "billing": {
            "first_name": "Theo",
            "last_name": "Bengtsson",
            "company": "",
            "address_1": "Adress",
            "address_2": "",
            "city": "Laholm",
            "state": "",
            "postcode": "31260",
            "country": "SE",
            "email": "theo@capellium.se",
            "phone": "12345677"
        },
        "shipping": {
            "first_name": "Theo",
            "last_name": "Bengtsson",
            "company": "",
            "address_1": "Adress",
            "address_2": "",
            "city": "Laholm",
            "state": "",
            "postcode": "31260",
            "country": "SE",
            "phone": ""
        },
        "payment_method": "bacs",
        "payment_method_title": "Banköverföring",
        "transaction_id": "",
        "customer_ip_address": "::1",
        "customer_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        "created_via": "checkout",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2022-04-25T13:28:48",
        "cart_hash": "b469186199c8a9193ff49c11ab453292",
        "number": "106",
        "meta_data": [
            {
                "id": 1207,
                "key": "is_vat_exempt",
                "value": "no"
            },
            {
                "id": 1211,
                "key": "_new_order_email_sent",
                "value": "true"
            }
        ],
        "line_items": [
            {
                "id": 3,
                "name": "Blixten McQueen - 31",
                "product_id": 11,
                "variation_id": 15,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "239.20",
                "subtotal_tax": "59.80",
                "total": "239.20",
                "total_tax": "59.80",
                "taxes": [
                    {
                        "id": 1,
                        "total": "59.8",
                        "subtotal": "59.8"
                    }
                ],
                "meta_data": [
                    {
                        "id": 25,
                        "key": "pa_storlek",
                        "value": "31",
                        "display_key": "Storlek",
                        "display_value": "31"
                    }
                ],
                "sku": "bm-31",
                "price": 239.2,
                "parent_name": "Blixten McQueen"
            },
            {
                "id": 4,
                "name": "Oakley Speed",
                "product_id": 62,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "543.20",
                "subtotal_tax": "135.80",
                "total": "543.20",
                "total_tax": "135.80",
                "taxes": [
                    {
                        "id": 1,
                        "total": "135.8",
                        "subtotal": "135.8"
                    }
                ],
                "meta_data": [],
                "sku": "o-speed",
                "price": 543.2,
                "parent_name": null
            }
        ],
        "tax_lines": [
            {
                "id": 6,
                "rate_code": "SE-MOMS-1",
                "rate_id": 1,
                "label": "Moms",
                "compound": false,
                "tax_total": "195.60",
                "shipping_tax_total": "0.00",
                "rate_percent": 25,
                "meta_data": []
            }
        ],
        "shipping_lines": [
            {
                "id": 5,
                "method_title": "Drone Shipping",
                "method_id": "drone_shipping_method",
                "instance_id": "0",
                "total": "200.00",
                "total_tax": "0.00",
                "taxes": [
                    {
                        "id": 1,
                        "total": "",
                        "subtotal": ""
                    }
                ],
                "meta_data": []
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "http://localhost:3000/labb2-hugo/kassan/order-pay/106/?pay_for_order=true&key=wc_order_xaKz8IfDkYPhr",
        "date_created_gmt": "2022-04-25T11:28:27",
        "date_modified_gmt": "2022-04-25T11:28:48",
        "date_completed_gmt": null,
        "date_paid_gmt": "2022-04-25T11:28:48",
        "currency_symbol": "kr",
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/orders/106"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/orders"
                }
            ]
        }
    },
    {
        "id": 104,
        "parent_id": 0,
        "status": "completed",
        "currency": "SEK",
        "version": "6.4.1",
        "prices_include_tax": true,
        "date_created": "2022-04-25T13:24:47",
        "date_modified": "2022-04-25T13:25:14",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "20.00",
        "total": "100.00",
        "total_tax": "20.00",
        "customer_id": 1,
        "order_key": "wc_order_8TmB47ZGldQ2H",
        "billing": {
            "first_name": "Hugo",
            "last_name": "Bengtsson",
            "company": "",
            "address_1": "Antons Väg 17A",
            "address_2": "",
            "city": "Mellbystrand",
            "state": "",
            "postcode": "31260",
            "country": "SE",
            "email": "hugo@capellium.se",
            "phone": "0761416633"
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "state": "",
            "postcode": "",
            "country": "",
            "phone": ""
        },
        "payment_method": "bacs",
        "payment_method_title": "Banköverföring",
        "transaction_id": "",
        "customer_ip_address": "::1",
        "customer_user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        "created_via": "checkout",
        "customer_note": "",
        "date_completed": "2022-04-25T13:25:14",
        "date_paid": "2022-04-25T13:25:14",
        "cart_hash": "a4c13e8ee0aed04d3ff09a755f4278f0",
        "number": "104",
        "meta_data": [
            {
                "id": 1147,
                "key": "is_vat_exempt",
                "value": "no"
            },
            {
                "id": 1151,
                "key": "_new_order_email_sent",
                "value": "true"
            }
        ],
        "line_items": [
            {
                "id": 1,
                "name": "Presentkort",
                "product_id": 74,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "80.00",
                "subtotal_tax": "20.00",
                "total": "80.00",
                "total_tax": "20.00",
                "taxes": [
                    {
                        "id": 1,
                        "total": "20",
                        "subtotal": "20"
                    }
                ],
                "meta_data": [],
                "sku": "presentkort-100",
                "price": 80,
                "parent_name": null
            }
        ],
        "tax_lines": [
            {
                "id": 2,
                "rate_code": "SE-MOMS-1",
                "rate_id": 1,
                "label": "Moms",
                "compound": false,
                "tax_total": "20.00",
                "shipping_tax_total": "0.00",
                "rate_percent": 25,
                "meta_data": []
            }
        ],
        "shipping_lines": [],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "http://localhost:3000/labb2-hugo/kassan/order-pay/104/?pay_for_order=true&key=wc_order_8TmB47ZGldQ2H",
        "date_created_gmt": "2022-04-25T11:24:47",
        "date_modified_gmt": "2022-04-25T11:25:14",
        "date_completed_gmt": "2022-04-25T11:25:14",
        "date_paid_gmt": "2022-04-25T11:25:14",
        "currency_symbol": "kr",
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/orders/104"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/customers/1"
                }
            ]
        }
    }
]

// Function for returning the orders to the function rendering the objects.
export function returnOrders() {
    return orderList;
}