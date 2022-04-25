

export function renderProducts(products) {

        const container = document.getElementById("productDisplay");

        container.innerHTML = "";

        products.forEach(product => {
            let title = product.name;
            let description = product.short_description;

            let renderContainer = document.createElement("div");
            renderContainer.classList.add("flex", "flexColumn", "contentContainer")
            container.append(renderContainer);

            let image = document.createElement("img");
            image.src = product.images[0].src;
            image.style.maxWidth = "50%";

            let titleH = document.createElement("a");
            titleH.innerHTML = title;
            titleH.href = product.permalink;

            let price = document.createElement("div");
            price.innerHTML = product.price_html;

            let contentContainer = document.createElement("div");
            contentContainer.classList.add("postContentContainer");
            contentContainer.innerHTML = description;

            renderContainer.append(image, titleH, price, contentContainer);

        })

        let removeButton = document.getElementById("removeProducts");
        removeButton.style.display = "block";

        document.getElementById("loadingContainer").style.display = "none";

}

export function removeProducts() {
    const container = document.getElementById("productDisplay");
    container.innerHTML = "";

    let removeButton = document.getElementById("removeProducts");
    removeButton.style.display = "none";
}

var productList = [
    {
        "id": 74,
        "name": "Presentkort",
        "slug": "presentkort",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/presentkort/",
        "date_created": "2022-04-21T10:20:28",
        "date_created_gmt": "2022-04-21T08:20:28",
        "date_modified": "2022-04-21T13:21:00",
        "date_modified_gmt": "2022-04-21T11:21:00",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Presentkort 100 kr som kan lösas in i butikskassan.</p>\n",
        "short_description": "<p>Den perfekta presenten!</p>\n",
        "sku": "",
        "price": "100",
        "regular_price": "100",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": true,
        "downloadable": true,
        "downloads": [
            {
                "id": "cee98311-68bb-48cf-9e45-889aef6261c2",
                "name": "Upplev-den-vackra-dagen-genom-att-promenera-runt-i-parker..pdf",
                "file": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/Upplev-den-vackra-dagen-genom-att-promenera-runt-i-parker..pdf"
            }
        ],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": false,
        "shipping_taxable": false,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": false,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 27,
                "name": "Presentkort",
                "slug": "presentkort"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 101,
                "date_created": "2022-04-21T15:20:43",
                "date_created_gmt": "2022-04-21T11:20:43",
                "date_modified": "2022-04-21T15:20:43",
                "date_modified_gmt": "2022-04-21T11:20:43",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/Upplev-den-vackra-dagen-genom-att-promenera-runt-i-parker..png",
                "name": "Upplev den vackra dagen genom att promenera runt i parker.",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>100,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": false,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/74"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 63,
        "name": "Blixtsnabb",
        "slug": "blixtsnabb",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/blixtsnabb/",
        "date_created": "2022-04-20T15:30:34",
        "date_created_gmt": "2022-04-20T13:30:34",
        "date_modified": "2022-04-20T15:30:34",
        "date_modified_gmt": "2022-04-20T13:30:34",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Vår senaste snabba modell.</p>\n",
        "short_description": "<p>Vår nya modell med gult glas.</p>\n",
        "sku": "s-g",
        "price": "299",
        "regular_price": "299",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 25,
                "name": "Snabba glasögon",
                "slug": "snabba-glasogon"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 24,
                "date_created": "2022-04-20T16:53:31",
                "date_created_gmt": "2022-04-20T12:53:31",
                "date_modified": "2022-04-20T16:53:31",
                "date_modified_gmt": "2022-04-20T12:53:31",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/snabba-glasogon2.jpeg",
                "name": "snabba glasogon2",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>299,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [
            62
        ],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": false,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/63"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 62,
        "name": "Oakley Speed",
        "slug": "oakley-speed",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/oakley-speed/",
        "date_created": "2022-04-20T15:29:15",
        "date_created_gmt": "2022-04-20T13:29:15",
        "date_modified": "2022-04-20T15:29:15",
        "date_modified_gmt": "2022-04-20T13:29:15",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Bli snabbast i stan med dessa godingar.</p>\n",
        "short_description": "<p>Spring genom stan utan att få flugor i ögonen.</p>\n",
        "sku": "o-speed",
        "price": "679",
        "regular_price": "679",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 25,
                "name": "Snabba glasögon",
                "slug": "snabba-glasogon"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 23,
                "date_created": "2022-04-20T16:53:29",
                "date_created_gmt": "2022-04-20T12:53:29",
                "date_modified": "2022-04-20T16:53:29",
                "date_modified_gmt": "2022-04-20T12:53:29",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/snabba-glasogon1.jpeg",
                "name": "snabba glasogon1",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>679,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [
            63
        ],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": false,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/62"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 53,
        "name": "Spiderman",
        "slug": "spiderman",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/spiderman/",
        "date_created": "2022-04-20T15:26:57",
        "date_created_gmt": "2022-04-20T13:26:57",
        "date_modified": "2022-04-20T15:27:03",
        "date_modified_gmt": "2022-04-20T13:27:03",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Snabba skor med Spiderman-tema.</p>\n",
        "short_description": "<p>Svinga dig genom lekplatsen med dessa snyggingar.</p>\n",
        "sku": "",
        "price": "349",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 16,
                "name": "Snabba skor",
                "slug": "snabba-skor"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 25,
                "date_created": "2022-04-20T16:53:32",
                "date_created_gmt": "2022-04-20T12:53:32",
                "date_modified": "2022-04-20T16:53:32",
                "date_modified_gmt": "2022-04-20T12:53:32",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/spiderman.jpeg",
                "name": "spiderman",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 1,
                "name": "Storlek",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "35",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "36"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            55,
            56,
            57,
            58,
            59,
            60,
            54,
            61
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>349,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [
            44,
            35,
            11
        ],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": true,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/53"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 44,
        "name": "Adidas snabbaste sko",
        "slug": "adidas-snabbaste-sko",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/adidas-snabbaste-sko/",
        "date_created": "2022-04-20T15:23:09",
        "date_created_gmt": "2022-04-20T13:23:09",
        "date_modified": "2022-04-20T15:24:39",
        "date_modified_gmt": "2022-04-20T13:24:39",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Adidas snabbaste sko någonsin, nu ännu snabbare!</p>\n",
        "short_description": "<p>Snabb som tusan.</p>\n",
        "sku": "",
        "price": "499",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 16,
                "name": "Snabba skor",
                "slug": "snabba-skor"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 22,
                "date_created": "2022-04-20T16:53:27",
                "date_created_gmt": "2022-04-20T12:53:27",
                "date_modified": "2022-04-20T16:53:27",
                "date_modified_gmt": "2022-04-20T12:53:27",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/snabb.webp",
                "name": "snabb",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 1,
                "name": "Storlek",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "35",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "36"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            46,
            47,
            48,
            49,
            50,
            51,
            45,
            52
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>499,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [
            53,
            35,
            11
        ],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": true,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/44"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 35,
        "name": "Frost",
        "slug": "frost",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/frost/",
        "date_created": "2022-04-20T15:20:22",
        "date_created_gmt": "2022-04-20T13:20:22",
        "date_modified": "2022-04-20T15:21:51",
        "date_modified_gmt": "2022-04-20T13:21:51",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Supersnabba skor med inspiration från filmen Frost.</p>\n",
        "short_description": "<p>Kyligt snabba skor.</p>\n",
        "sku": "",
        "price": "249",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 16,
                "name": "Snabba skor",
                "slug": "snabba-skor"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 21,
                "date_created": "2022-04-20T16:53:26",
                "date_created_gmt": "2022-04-20T12:53:26",
                "date_modified": "2022-04-20T16:53:26",
                "date_modified_gmt": "2022-04-20T12:53:26",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/frost.jpg",
                "name": "frost",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 1,
                "name": "Storlek",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "35",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "36"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            37,
            38,
            39,
            40,
            41,
            42,
            36,
            43
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>249,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [
            53,
            11,
            44
        ],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": true,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/35"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    },

    {
        "id": 11,
        "name": "Blixten McQueen",
        "slug": "blixten-mcqueen",
        "permalink": "http://localhost:3000/labb2-hugo/produkt/blixten-mcqueen/",
        "date_created": "2022-04-20T14:51:17",
        "date_created_gmt": "2022-04-20T12:51:17",
        "date_modified": "2022-04-20T14:53:41",
        "date_modified_gmt": "2022-04-20T12:53:41",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Ett av världens snabbaste par skor, utan tvekan.</p>\n",
        "short_description": "<p>Supersnabba skor från filmen Bilar.</p>\n",
        "sku": "",
        "price": "299",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 16,
                "name": "Snabba skor",
                "slug": "snabba-skor"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 20,
                "date_created": "2022-04-20T16:53:23",
                "date_created_gmt": "2022-04-20T12:53:23",
                "date_modified": "2022-04-20T16:53:23",
                "date_modified_gmt": "2022-04-20T12:53:23",
                "src": "http://localhost:3000/labb2-hugo/wp-content/uploads/2022/04/blixten.jpeg",
                "name": "blixten",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 1,
                "name": "Storlek",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "35",
                    "29",
                    "30",
                    "31",
                    "32",
                    "33",
                    "34",
                    "36"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            13,
            14,
            15,
            16,
            17,
            18,
            12,
            19
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi>299,00&nbsp;<span class=\"woocommerce-Price-currencySymbol\">&#107;&#114;</span></bdi></span> <small class=\"woocommerce-price-suffix\">kr inkl. moms</small>",
        "related_ids": [
            44,
            35,
            53
        ],
        "meta_data": [],
        "stock_status": "instock",
        "has_options": true,
        "_links": {
            "self": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products/11"
                }
            ],
            "collection": [
                {
                    "href": "http://localhost:3000/labb2-hugo/wp-json/wc/v3/products"
                }
            ]
        }
    }
]


export function returnProducts() {
    return productList;
}