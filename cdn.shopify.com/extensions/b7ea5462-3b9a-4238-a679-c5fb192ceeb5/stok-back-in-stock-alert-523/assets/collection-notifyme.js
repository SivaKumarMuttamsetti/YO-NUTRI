const bisCollectionProducts = JSON.parse(document.getElementById("bis-shopify-collection-products") ? .textContent)
const bisShopifyProducts = JSON.parse(document.getElementById("bis-shopify-products").textContent)
var bis_current_template = document.getElementById(
    "bis_current_template"
).value;

if (bis_current_template == "product") {
    let check_app_block = document.getElementById(
        "shopeetech_pre_order_before"
    );
    if (check_app_block) {
        bis_current_template = 0;
    }
}

var bisShopCountry = Shopify.country.toLowerCase();
var bis_coll_locale = window.Shopify.locale;

if (
    bis_current_template == "index" &&
    Shopify.shop == "texas-bee-supply.myshopify.com"
) {
    console.log("Skip index");
} else if (bis_current_template) {
    const shopifyDomain = Shopify.shop;
    //console.log("----123")
    const bishost = document.getElementById("shopeetech_bis_url").value;
    var apiEndPoint = bishost + "/api";

    var loadEvent = true;
    var bis_modal = document.getElementById("bis-myModal");
    var bis_btn = document.getElementById("bis-myBtn");

    var restock_is_visible = 0;
    var restock_date_style = "";
    var restock_variants = [];

    var soldOutButton = document.querySelector("[name='add']");
    var buyButton = document.querySelector("[class='product-form__buttons']");
    var sold_out_button_setting = 0;
    var store_wise = null;
    var bis_btn_loop = ""

    var ui_setting = "";
    var selected_variant = "";
    var parentClass = "";
    var current_var = null;
    var variantJson = {};
    var api_response = "";
    var bisButtons = "";
    var lastUrl = window.location.href;
    var changable_variant_id = ""
    var shop_variant_selector = parentClass + '[name="id"]';
    var shop_variant_selector_event = "change";
    var skipDuplicateonCollectionPage = [];
    var setVariantInterval = 500;

    var pdp_colls = ""

    function getColumnOfCollection(arr, column) {
        return arr.map(x => x[column])
    }

    if (shopifyDomain == "wallet-ninja-us.myshopify.com") {
        parentClass = ".shopify-product-form ";
    } else if (shopifyDomain == "prvyit.myshopify.com") {
        parentClass = ".product-form ";
    } else if (shopifyDomain == "mbeengineering.myshopify.com") {
        parentClass = "#product_form_PID ";
    } else if (shopifyDomain == "farmdidi-mystore-com.myshopify.com") {
        shop_variant_selector = ".visually-hidden.swatch-inpu";
    } else if (shopifyDomain == "flutisat.myshopify.com") {
        parentClass = ".product-detaitls_form "
    } else if (shopifyDomain == "5ac432-bc.myshopify.com") {
        parentClass = ".installment "
    } else if (shopifyDomain == "konokcc.myshopify.com") {
        shop_variant_selector = "[data-name='Size'] .gf_swatch";
        shop_variant_selector_event = "click"
    } else if (shopifyDomain == "futuremonsters.myshopify.com") {
        setVariantInterval = 500
    }
    var allowDuplicateProductStores = ["rpluslabs.myshopify.com", "chandit-thevapegroup.myshopify.com", "1zz7rb-id.myshopify.com", "crclehealth-com.myshopify.com", "kimirica-retail.myshopify.com", "06bab6-76.myshopify.com", "the-tinsel-rack.myshopify.com", "antatiskin.myshopify.com", "seenaowell-store.myshopify.com", "egyptian-milk-by-jada-ross.myshopify.com", "ramakashv.myshopify.com", "omahatq8.myshopify.com"]

    function getZeroQtyVariantJson() {
        if (bis_current_template == "product") {
            var vid = Object.keys(variantJson).find(key => variantJson[key] <= 0);
            if (vid > 0)
                return vid
            else
                return false
        }
        return true
    }
    const handleProductImage = (productId) => {
        if (productId) {
            if (bisCollectionProducts) {
                const product = bisCollectionProducts ? .find((item) => item ? .id == productId)
                if (product ? .featured_image) {
                    bisProductImg.setAttribute("src", product ? .featured_image)
                    productImgContainer.classList.remove("hide")
                } else productImgContainer.classList.add("hide")
            } else {
                console.log("%c Notify Me - shopify-collection-products Not Found on Index page!", "background: blue; color: white; font-size: small");
            }
        }
    }
    const clickBisBtn = function(productId, variantId) {
        //if (bis_current_template != "product") {
        document.getElementById("selected_product").value = productId;
        if (bis_current_template != "product") {
            document.getElementById("selected_variant").value = variantId;
        }
        if (show_product_image) handleProductImage(productId)
        getWidget(productId, variantId);
        //}

        bis_modal.style.display = "block";
        initModalFields()
    };

    function initModalFields() {
        let customerName = document.getElementById("bis-customer-name").innerText;
        let customerEmail = document.getElementById("bis-customer-email").innerText;
        nameField.value = customerName || "";
        emailField.value = customerEmail || "";
    }

    async function getWidget(product_id = "", variant_id = "") {
        //let aPIEndPoint = `https://bis.test/api/notify-me-tech/${shopifyDomain}/widget?template=${bis_current_template}&product_id=${product_id}&selected_variant=${variant_id}`;

        let aPIEndPoint = `/apps/notify-me-bis/${shopifyDomain}/widget?template=${bis_current_template}&product_id=${product_id}&selected_variant=${variant_id}`;
        // let aPIEndPoint = `${apiEndPoint}/${shopifyDomain}/widget?template=${bis_current_template}&product_id=${product_id}&selected_variant=${variant_id}`;
        return await fetch(aPIEndPoint)
            .then((response) => response.json())
            .then((data) => {
                //if (bis_current_template != "product" && product_id != "") {
                document.getElementById("bis_product_title").innerHTML =
                    data.data.product_title;
                //}
            })
            .catch((data) => {
                console.log("---error", data);
                return false;
            });
    }

    function getVariantIdFromURL_collect(variantJson = [], variant_id = "") {

        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('variant') && searchParams.get('variant') != "default") {
            changable_variant_id = searchParams.get('variant');
            return variantJson[searchParams.get('variant')];
        } else if (variant_id != "") {
            changable_variant_id = variant_id;
            return variantJson[variant_id];
        }
        return "NAN";
    }

    window.addEventListener("load", async (event) => {
        if (!loadEvent)
            return false

        loadEvent = false
        if (bis_current_template == "product") {

            pdp_colls = JSON.parse(document.getElementById('bis_app_collections').textContent);

            if (shopifyDomain == "daniela-salcedo-us.myshopify.com" || shopifyDomain == "daniela-salcedo-mx.myshopify.com") {
                var coll_handle = getColumnOfCollection(pdp_colls, "handle");
                if (!coll_handle.includes("notify-restock")) {
                    return true
                }
            }

            variantJson = JSON.parse(document.getElementById("variant_json").value);

            if (Object.keys(variantJson).length == 1 && variantJson[Object.keys(variantJson)[0]] <= 0) {
                current_var = Object.keys(variantJson)[0];
                document.getElementById("selected_variant").value = current_var;
            } else {
                current_var = document.querySelector("[name='id']").value;
            }
        }

        var variant_id = product_id = "";
        if (bis_current_template == "product") {
            product_id = document.getElementById("selected_product").value;
            if (document.getElementById("selected_variant").value) {
                current_var = variant_id = document.getElementById("selected_variant").value;
            }
        }

        parentClass = parentClass.replace("PID", product_id);
        // api_response = await getWidget(product_id, variant_id);

        api_response = JSON.parse(document.getElementById('bis-configuration').textContent);
        bis_app_language = api_response.langauge
        if (bis_app_language.primary != Shopify.locale && bis_app_language.limit == false) {
            console.log("%c Notify Me - store has multi langauge, Contact to app support from live chat box", "background: red; color: white; font-size: small");
            return
        }

        if (!api_response) {
            console.log("%c Notify Me - No metafield fo configuration, Contact to app support from live chat box", "background: red; color: white; font-size: small");
            return false
        };
        ui_setting = api_response.ui_settings;

        setPopupStyleContents(ui_setting);
        addJsCss(api_response);
        popupFormSettingProduct(ui_setting);

        if (ui_setting.notify_me.notify_me_button_setting != "in_stock" && bis_current_template == "product") {
            if (!getZeroQtyVariantJson()) {
                console.log("%c Notify Me - getZeroQtyVariantJson, Contact to app support from live chat box", "background: red; color: white; font-size: small");
                return false
            }

        }

        let customerId = document.getElementById("bis-customer").innerText;
        if (ui_setting ? .notify_me ? .logged_user_button_setting == 1) {
            if (!customerId) {
                const style = "background: #a569bd; color: #fff; font-size: 12px; font-weight:bold; padding: 5px 10px; border-radius: 3px"
                console.log("%c%s", style, `⚡️ Notify Me::: Customer not login(Must be logged in) ⚡️`);
                return
            }
        }



        if (bis_current_template != "product") {
            if (shopifyDomain == "markerpop.myshopify.com") {
                lastUrl = document.querySelector('.show-more a').href;
            }
            setInterval(() => {
                var currentUrl = "";
                if (shopifyDomain == "markerpop.myshopify.com") {
                    currentUrl = document.querySelector('.show-more a').href;
                } else {
                    currentUrl = window.location.href
                }
                if (currentUrl !== lastUrl) {
                    setTimeout(function() {
                        if (allowDuplicateProductStores.includes(shopifyDomain)) {
                            skipDuplicateonCollectionPage = []
                            document.querySelectorAll('.box-3.bis_template_collection').forEach((doms) => {
                                doms.remove()
                            })
                        }
                        addNotifyMeButton();
                    }, 1000)
                    lastUrl = currentUrl
                }
            }, 1000);
        }
        var temp_true = addNotifyMeButton();
        // setPoweredBy(api_response, "")
        if (bis_current_template == "product" && temp_true) {
            let domain_css = shopifyDomain.replaceAll(".", "_");
            document.getElementById("bis_notify_me_btn").classList.add("bis_" + domain_css);
            bis_modal.classList.add("bis_modal_" + domain_css);

            document.getElementById("bis_product_title").innerHTML = api_response.product_title;

            selected_variant = document.getElementById("selected_variant").value;
            document.getElementById("ap__variants").addEventListener("change", function() {
                selected_variant = this.value;
                document.getElementById("selected_variant").value = selected_variant;
            });


            restock_is_visible = ui_setting.notify_me.restock_date_style.restock_is_visible;
            restock_date_style = "";
            restock_variants = [];
            // Restock Date
            if (restock_is_visible == 1) {
                if (ui_setting.notify_me.restock_date_style.restock_placement == "Before") {
                    restock_date_style = document.getElementById("shopeetech_restock_date_before");
                } else {
                    restock_date_style = document.getElementById("shopeetech_restock_date_after");
                }
                restock_variants = api_response.restock_variants;

                if (ui_setting.notify_me.restock_date_style[`${bis_coll_locale}_restock_text`].includes("{{date}}") && restock_variants[selected_variant] != null) {
                    restock_date_style.innerHTML = ui_setting.notify_me.restock_date_style[`${bis_coll_locale}_restock_text`].replace("{{date}}", restock_variants[selected_variant]);
                }

                if (restock_date_style) {
                    restock_date_style.style.cssText = `
                        display: block;
                        font-size: ${ui_setting.notify_me.restock_date_style.restock_text_size}px;
                        font-family: ${ui_setting.notify_me.restock_date_style.restock_text_family};
                        color: ${ui_setting.notify_me.restock_date_style.restock_text_color};`;
                }
            }

            if (ui_setting.notify_me.notify_me_button_setting == "in_stock") {
                document.getElementById("bis_notify_me_btn").style.display = "block";
            } else {

                // Show Variant
                if (ui_setting.show_variant == 0 && sizeField) {
                    document.getElementById("selected_variant").value = "";
                    sizeField.selectedIndex = 1;
                    sizeField.style.cssText = `display: none !important;`;
                }

                if (ui_setting ? .notify_me ? .show_if_any_variant_soldout == 1) {
                    document.getElementById("bis_notify_me_btn").style.display = "block";
                    return true;
                }


                buyButton = document.querySelector("[class='product-form__buttons']");
                sold_out_button_setting = ui_setting ? .notify_me ? .sold_out_button_setting;
                store_wise = null;
                bis_btn_loop = ""

                var variant_lastUrl = variant_currentUrl = qty = "";
                var searchParams = new URLSearchParams(window.location.search);
                if (searchParams.has('variant') && searchParams.get('variant') != "default") {
                    variant_lastUrl = searchParams.get('variant');
                }

                setInterval(() => {
                    searchParams = new URLSearchParams(window.location.search)
                    if (searchParams.has('variant') && searchParams.get('variant') != "default") {
                        variant_currentUrl = searchParams.get('variant');
                    }

                    if (variant_currentUrl !== variant_lastUrl) {
                        qty = "";
                        changable_variant_id = variant_currentUrl;

                        qty = variantJson[variant_currentUrl]
                        if (qty == "" || qty == undefined)
                            qty = getVariantIdFromURL_collect(variantJson, changable_variant_id);

                        if (qty <= 0) {
                            document.getElementById("selected_variant").value = changable_variant_id;
                            if (sold_out_button_setting === "1") {
                                // const style = "background: #a569bd; color: #fff; font-size: 12px; font-weight:bold; padding: 5px 10px; border-radius: 3px";
                                // console.log("%c%s", style, `⚡️ Notify Me::: Hide Sold out button => ${sold_out_button_setting} ⚡️`);
                                producPageSoldoutButtonSetting('none');

                                if (buyButton)
                                    buyButton.style.display = "none";

                                /* Store Wise*/
                                if ((store_wise = document.querySelector("buy-buttons")))
                                    store_wise.style.display = "none";
                                else if (store_wise = document.querySelector(".product-form--atc-button.disabled"))
                                    store_wise.style.display = "none";
                                else if (store_wise = document.querySelectorAll("[name='add'].gf_add-to-cart.product-form-product-template")) {
                                    if (store_wise.length) {
                                        bis_btn_loop = document.querySelectorAll(".box-3");
                                        for (var si = 0; si < store_wise.length; si++) {
                                            store_wise[si].style.display = "none";
                                            if (typeof bis_btn_loop[si] !== 'undefined') {
                                                bis_btn_loop[si].style.display = "block";
                                            }
                                        }
                                    }

                                }

                            }
                            if (bis_btn_loop != "") {
                                bis_btn_loop = document.querySelectorAll(".box-3.bis_template_product");
                                for (var si = 0; si < bis_btn_loop.length; si++) {
                                    if (typeof bis_btn_loop[si] !== 'undefined') {
                                        bis_btn_loop[si].style.display = "block";
                                    }
                                }
                            } else {
                                document.getElementById("bis_notify_me_btn").style.display = "block";
                            }

                        } else {
                            producPageSoldoutButtonSetting('block');

                            if (buyButton)
                                buyButton.style.display = "block";

                            /* Store Wise*/
                            if ((store_wise = document.querySelector("buy-buttons")))
                                store_wise.style.display = "block";
                            else if (store_wise = document.querySelector(".product-form--atc-button.disabled"))
                                store_wise.style.display = "block";
                            else if (store_wise = document.querySelectorAll("[name='add'].gf_add-to-cart.product-form-product-template")) {
                                if (store_wise.length) {
                                    bis_btn_loop = document.querySelectorAll(".box-3");
                                    for (var si = 0; si < store_wise.length; si++) {
                                        store_wise[si].style.display = "block";
                                        if (typeof bis_btn_loop[si] !== 'undefined') {
                                            bis_btn_loop[si].style.display = "none";
                                        }
                                    }
                                }

                            }

                            if (bis_btn_loop != "") {
                                bis_btn_loop = document.querySelectorAll(".box-3.bis_template_product");
                                for (var si = 0; si < bis_btn_loop.length; si++) {
                                    if (typeof bis_btn_loop[si] !== 'undefined') {
                                        bis_btn_loop[si].style.display = "none";
                                    }
                                }
                            } else {
                                document.getElementById("bis_notify_me_btn").style.display = "none";
                            }

                        }



                        if (restock_is_visible == 1 && restock_variants[changable_variant_id] != null && ui_setting.notify_me.restock_date_style[`${bis_coll_locale}_restock_text`].includes("{{date}}")) {
                            restock_date_style.innerHTML = ui_setting.notify_me.restock_date_style[`${bis_coll_locale}_restock_text`].replace("{{date}}", restock_variants[changable_variant_id]);
                        } else {
                            restock_date_style.innerHTML = "";
                        }

                        variant_lastUrl = variant_currentUrl
                    }
                }, setVariantInterval);

                if (current_var == "" || current_var == undefined) {
                    getVariantIdFromURL_collect(variantJson, changable_variant_id);
                    current_var = changable_variant_id
                }

                if (variantJson[current_var] <= 0) {
                    if (sold_out_button_setting === "1" || sold_out_button_setting == "1") {
                        producPageSoldoutButtonSetting('none');

                        if (buyButton) buyButton.style.display = "none";

                        /* Store Wise*/
                        if ((store_wise = document.querySelector("buy-buttons")))
                            store_wise.style.display = "none";
                        else if (store_wise = document.querySelector(".product-form--atc-button.disabled"))
                            store_wise.style.display = "none";
                        else if (store_wise = document.querySelectorAll("[name='add'].gf_add-to-cart.product-form-product-template")) {
                            if (store_wise.length) {
                                bis_btn_loop = document.querySelectorAll(".box-3");
                                for (var si = 0; si < store_wise.length; si++) {
                                    store_wise[si].style.display = "none";
                                    if (typeof bis_btn_loop[si] !== 'undefined') {
                                        bis_btn_loop[si].style.display = "block";
                                    }
                                }
                            }

                        }
                    }
                    if (bis_btn_loop == "")
                        document.getElementById("bis_notify_me_btn").style.display = "block";
                } else {
                    bis_btn_loop = document.querySelectorAll(".box-3.bis_template_product");
                    for (var si = 0; si < bis_btn_loop.length; si++) {
                        if (typeof bis_btn_loop[si] !== 'undefined') {
                            bis_btn_loop[si].style.display = "none";
                        }
                    }
                    if (bis_btn_loop == "")
                        document.getElementById("bis_notify_me_btn").style.display = "none";
                }
            }



            return true;
        }
    });

    function producPageSoldoutButtonSetting(is_hide = "block") {
        soldOutButton = document.querySelectorAll("[name='add']");
        for (var si = 0; si < soldOutButton.length; si++) {
            if (typeof soldOutButton[si] !== 'undefined') {
                soldOutButton[si].style.display = is_hide;
            }
        }
    }

    function addNotifyMeButton() {
        console.log("-------bis_current_template", bis_current_template);
        if (bis_current_template != "product" && ui_setting.collection_notify_me ? .collection_status != 1) {
            console.log("%c Notify Me - widget is OFF for collection page, Contact to app support from live chat box", "background: red; color: white; font-size: small");
            return true;
        } else {
            bisButtons = checkTargetForProductPage(ui_setting);
        }
        if (!bisButtons[0].length) {
            console.log("%c Notify Me - no Selector found, Contact to app support from live chat box", "background: red; color: white; font-size: small");
            return false
        }
        var returnCallback = false;
        var btnSettings = ui_setting ? .collection_notify_me;

        bisButtons[0].forEach((button) => {
            if (button.disabled === true || bis_current_template == "product" || ui_setting.notify_me.notify_me_button_setting == "in_stock" || (button.tagName != "BUTTON" && button.tagName != "INPUT")) {

                // Collect product, Variant Id store wise
                let collectProductVariantId = _collectProductVariantId(button, btnSettings);
                if (!collectProductVariantId) {
                    console.log("%c Notify Me - no Product Id or variant Id Found, Contact to app support from live chat box", "background: red; color: white; font-size: small");
                    return;
                }

                let productId = collectProductVariantId.productId;
                let variantId =
                    collectProductVariantId.variantId || current_var;

                let collNotifyMeBtn = _collNotifyMeBtn(ui_setting);
                let notifydiv = collNotifyMeBtn.notifydiv;
                let notifyButton = collNotifyMeBtn.notifyButton;

                let gid = "gid://shopify/Product/" + productId;
                if (ui_setting.selecetd_products != "" && ui_setting.selecetd_products != null) {
                    // const style = "background: #a569bd; color: #fff; font-size: 12px; font-weight:bold; padding: 5px 10px; border-radius: 3px"
                    // console.log("%c%s", style, `⚡️ Notify Me::: Selected Products:::${ui_setting.selecetd_products} ⚡️`);
                    if (!ui_setting.selecetd_products.includes(gid)) {
                        const style = "background: #a569bd; color: #fff; font-size: 12px; font-weight:bold; padding: 5px 10px; border-radius: 3px"
                        console.log("%c%s", style, `⚡️ Notify Me::: This Product is not selected from Selected Product  ⚡️`);
                        return;
                    }
                }

                notifyButton.setAttribute("id", "bis-myBtn-" + productId);
                notifyButton.setAttribute("product_id", productId);
                notifyButton.setAttribute("variant_id", variantId);

                if (shopifyDomain == "peplosonline.myshopify.com") {
                    if (
                        button.querySelector(".cst-disabled") &&
                        button.querySelectorAll("option").length ==
                        button.querySelectorAll(".cst-disabled").length
                    ) {
                        button.after(notifydiv);
                        if (bis_current_template != "product") {
                            button.style.display = "none";
                        }
                    }
                } else if (shopifyDomain == "farmdidi-mystore-com.myshopify.com") {
                    button.after(notifydiv);
                    if (bis_current_template != "product") {
                        button.style.display = "none";
                    }
                } else if (shopifyDomain == "flutisat.myshopify.com" && bis_current_template == "product" && button.disabled === true) {
                    document.querySelector(".product-detaitls_form").before(notifydiv);

                } else if (shopifyDomain == "flutisat.myshopify.com" && bis_current_template == "product" && button.disabled === true) {
                    document.querySelector('.product-detaitls_form').before(notifydiv);

                    document.querySelector('.product-detaitls_form').style.display = "none";
                    document.querySelector('.shipping-time').style.display = "none";

                } else if (shopifyDomain == "lomi-petcare.myshopify.com") {
                    button.parentElement.insertAdjacentElement(
                        "afterend",
                        notifydiv
                    );
                } else if (shopifyDomain == "superplum.myshopify.com") {
                    if (bis_current_template != "product") {
                        button.parentElement.parentElement.insertAdjacentElement("afterend", notifydiv);
                        button.parentElement.parentElement.style.display = "none"
                    } else {
                        button.insertAdjacentElement("afterend", notifydiv);
                    }
                } else if (shopifyDomain == "gloskn.myshopify.com") {
                    button.parentElement.style.display = "none"
                    button.parentElement.insertAdjacentElement("afterend", notifydiv);
                } else if (shopifyDomain == "markerpop.myshopify.com") {
                    if (!button.querySelector('.box-3')) {
                        button.appendChild(notifydiv);
                    }

                } else if (shopifyDomain == "yvonne-waska.myshopify.com") {
                    button.parentElement.parentElement.insertAdjacentElement("afterend", notifydiv);
                } else if (shopifyDomain == "mazzolari-milano.myshopify.com") {
                    button.insertAdjacentElement("afterend", notifydiv);
                    if (bis_current_template == "product") {
                        button.style.display = "none";
                    }
                } else {
                    if (
                        btnSettings.product_btn_pos != null &&
                        btnSettings.product_btn_pos != undefined &&
                        btnSettings.product_btn_pos != "" &&
                        bis_current_template == "product"
                    ) {
                        var element = btnSettings.product_btn_pos;
                        eval(element);
                    } else {
                        if (
                            btnSettings.coll_btn_pos != null &&
                            btnSettings.coll_btn_pos != undefined &&
                            btnSettings.coll_btn_pos != "" &&
                            bis_current_template != "product"
                        ) {
                            var element = btnSettings.coll_btn_pos;
                            eval(element);
                        } else {
                            button.parentElement.insertAdjacentElement("afterend", notifydiv);
                            if (bis_current_template != "product") {
                                button.style.display = "none";
                            }
                        }
                    }

                }

                notifyButton.addEventListener("click", () => {
                    clickBisBtn(productId, variantId);
                });
                returnCallback = true;
                skipDuplicateonCollectionPage.push(productId)
            }
        });
        return returnCallback;
    }

    function checkTargetForProductPage(ui_setting) {

        const collectionNotifyMeSetting = ui_setting ? .collection_notify_me;
        let btn = document.querySelectorAll(parentClass + '[name="add"]');
        let forced_the_loop = 0;
        if (bis_current_template == "product") {
            if (
                collectionNotifyMeSetting.product_element != null &&
                collectionNotifyMeSetting.product_element != undefined &&
                collectionNotifyMeSetting.product_element != ""
            ) {
                var element = collectionNotifyMeSetting.product_element;
                btn = document.querySelectorAll(`${element}`);
                forced_the_loop = 1
            } else if (
                collectionNotifyMeSetting.product_eval != null &&
                collectionNotifyMeSetting.product_eval != undefined &&
                collectionNotifyMeSetting.product_eval != ""
            ) {
                forced_the_loop = 1
                var element = collectionNotifyMeSetting.product_eval;
                btn = eval(element);
            } else if (shopifyDomain == "markerpop.myshopify.com")
                btn = document.querySelectorAll('#bis_notify_me_selector');
            else if (!btn.length)
                btn = document.querySelectorAll(parentClass + '.product-form--atc-button.disabled');
        } else {
            if (
                collectionNotifyMeSetting.collection_eval != null &&
                collectionNotifyMeSetting.collection_eval != undefined &&
                collectionNotifyMeSetting.collection_eval != ""
            ) {
                var element = collectionNotifyMeSetting.collection_eval;
                btn = eval(element);
                forced_the_loop = 1
            } else if (
                collectionNotifyMeSetting.collection_element != null &&
                collectionNotifyMeSetting.collection_element != undefined &&
                collectionNotifyMeSetting.collection_element != ""
            ) {
                var element = collectionNotifyMeSetting.collection_element;
                btn = document.querySelectorAll(`${element}`);
                forced_the_loop = 1
            }
        }
        return [btn, forced_the_loop];
    }

    function _collectProductVariantId(button = null, btnSettings = null) {
        var form_local = Shopify.routes.root;
        if (shopifyDomain == "peplosonline.myshopify.com") {
            productId = button.closest("div[data-product-id]").dataset.productId;
            variantId = "";
        } else if (shopifyDomain == "farmdidi-mystore-com.myshopify.com") {
            let form = button.closest(`form[action="${form_local}cart/add"]`);
            let select_id = form.querySelector('[name="id"]').id;
            productId = select_id.replace("product-select-", "");
            variantId = "";
        } else if (shopifyDomain == "texas-bee-supply.myshopify.com") {
            productId = button.dataset.productId;
            variantId = button.dataset.variantId;
        } else if (shopifyDomain == "lomi-petcare.myshopify.com") {
            productId = button.parentElement.parentElement.dataset.productId;
            variantId = "";
        } else if (shopifyDomain == "superplum.myshopify.com" && bis_current_template != "product") {
            productId = button.dataset.productId;
            variantId = "";
        } else if (shopifyDomain == "chincheck-season.myshopify.com" && bis_current_template != "product") {
            if (button.attributes ? .disabled ? .value !== "disabled")
                return false;
            productId = button.parentElement.dataset.productId;
            variantId = "";
        } else if (shopifyDomain == "markerpop.myshopify.com") {
            productId = button.querySelector('[name="product_id"]').value;
            variantId = button.querySelector('[name="variant_id"]').value;

        } else {
            if (bis_current_template == "product") {
                if (
                    btnSettings.pdp_get_pid_eval != null &&
                    btnSettings.pdp_get_pid_eval != undefined &&
                    btnSettings.pdp_get_pid_eval != ""
                ) {
                    var element = btnSettings.pdp_get_pid_eval;
                    productId = eval(element);

                    element = btnSettings.pdp_get_vid_eval;
                    variantId = element != "" ? eval(element) : "";
                } else {
                    productId = document.getElementById("selected_product").value;
                    variantId = document.getElementById("selected_variant").value;
                }
            } else {
                if (
                    btnSettings.coll_get_pid_eval != null &&
                    btnSettings.coll_get_pid_eval != undefined &&
                    btnSettings.coll_get_pid_eval != ""
                ) {
                    var element = btnSettings.coll_get_pid_eval;
                    productId = eval(element);

                    element = btnSettings.coll_get_vid_eval;
                    variantId = element != "" ? eval(element) : "";
                } else {
                    let form = button.closest(`form[action="${form_local}cart/add"]`);
                    button.parentElement.display = "none";
                    productId = form.querySelector('[name="product-id"]').value;
                    variantId = form.querySelector(shop_variant_selector) ? .value || '';
                }

            }
        }

        if (skipDuplicateonCollectionPage.includes(productId) && bis_current_template != "product") {
            if (allowDuplicateProductStores.includes(shopifyDomain))
                return {
                    productId: productId,
                    variantId: variantId
                };
            else
                return false

        }
        return {
            productId: productId,
            variantId: variantId
        };
    }



    function addJsCss(api_response) {

        if (api_response ? .ui_settings ? .code_block_setting ? .bis_js) {
            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");
            script.id = "shoppetech-collection-page-js";
            script.type = "text/javascript";
            script.innerHTML = api_response ? .ui_settings ? .code_block_setting ? .bis_js || "";
            head.appendChild(script);
        }

        if (api_response ? .ui_settings ? .code_block_setting ? .bis_css) {
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("style");
            link.id = "shoppetech-collection-page-css";
            link.rel = "stylesheet";

            if (link.styleSheet) {
                // This is required for IE8 and below.
                link.styleSheet.cssText =
                    api_response ? .ui_settings ? .code_block_setting ? .bis_css || "";
            } else {
                link.appendChild(
                    document.createTextNode(api_response ? .ui_settings ? .code_block_setting ? .bis_css || "")
                );
            }
            head.appendChild(link);
        }
    }

    function setPopupStyleContents(ui_setting) {
        // Main Header
        var bis_model_header = document.querySelector(".bis-modal-title");
        bis_model_header.innerHTML = ui_setting.header[`${bis_coll_locale}_text`];
        bis_model_header.style.cssText = `
                            font-size: ${ui_setting.header.text_size}px;
                            font-family: ${ui_setting.header.text_family};
                            color: ${ui_setting.header.text_color};`;

        // Sub Header
        var bis_model_sub_header = document.getElementById(
            "shopeetech-bis-sub-header"
        );
        bis_model_sub_header.innerHTML =
            ui_setting.sub_header[`${bis_coll_locale}_text`];
        bis_model_sub_header.style.cssText = `
                    font-size: ${ui_setting.sub_header.text_size}px;
                    font-family: ${ui_setting.sub_header.text_family};
                    color: ${ui_setting.sub_header.text_color};`;

        // Product Title
        var product_title = document.getElementById("bis_product_title");
        product_title.style.cssText = `
                    font-size: ${ui_setting.extra.product_title.text_size}px;
                    font-family: ${ui_setting.extra.product_title.text_family};
                    color: ${ui_setting.extra.product_title.text_color};`;

        // Privacy
        var bis_privacy = document.querySelector(".bis_privacy");
        bis_privacy.innerHTML = ui_setting.privacy[`${bis_coll_locale}_text`];
        bis_privacy.style.cssText = `
                    font-size: ${ui_setting.privacy.text_size}px;
                    font-family: ${ui_setting.privacy.text_family};
                    color: ${ui_setting.privacy.text_color};`;

        // error
        var bis_error = document.getElementById("bis-error_message");
        error_message.style.cssText = `background-color: ${ui_setting.error.bg_color};`;
        bis_error.innerHTML = ui_setting.error[`${bis_coll_locale}_text`];
        bis_error.style.cssText = `
                    font-size: ${ui_setting.error.text_size}px;
                    font-family: ${ui_setting.error.text_family};
                    color: ${ui_setting.error.text_color};`;

        // Submit Btn
        submitButton.innerHTML = ui_setting.submit_btn[`${bis_coll_locale}_text`];
        submitButton.style.cssText = `
                    font-size: ${ui_setting.submit_btn.text_size}px;
                    font-family: ${ui_setting.submit_btn.text_family};
                    background-color: ${ui_setting.submit_btn.bg_color};
                    color: ${ui_setting.submit_btn.text_color};`;

        // Cancel Request Btn
        var bis_cancel_request_btn = document.getElementById(
            "bis-cancel-request-btn"
        );
        var cancelRequestBtnText = ui_setting ? .thank_you ? .cancel_request_btn[`${bis_coll_locale}_text`] ? .replace(/\s+/g, '')
        bis_cancel_request_btn.innerHTML =
            ui_setting ? .thank_you ? .cancel_request_btn[`${bis_coll_locale}_text`];
        bis_cancel_request_btn.style.cssText = `
                    font-size: ${ui_setting?.thank_you?.cancel_request_btn?.text_size}px;
                    font-family: ${ui_setting?.thank_you?.cancel_request_btn?.text_family};
                    background-color: ${ui_setting?.thank_you?.cancel_request_btn?.bg_color};
                    color: ${ui_setting?.thank_you?.cancel_request_btn?.text_color};
                    display: ${(!cancelRequestBtnText || cancelRequestBtnText === undefined) ? 'none' : 'block'};`;

        // Close Btn
        var bis_close_btn = document.getElementById("bis-close-btn");
        var closeBtnText = ui_setting ? .thank_you ? .close_btn[`${bis_coll_locale}_text`] ? .replace(/\s+/g, '')
        bis_close_btn.innerHTML =
            ui_setting ? .thank_you ? .close_btn[`${bis_coll_locale}_text`];
        bis_close_btn.style.cssText = `
                    font-size: ${ui_setting?.thank_you?.close_btn?.text_size}px;
                    font-family: ${ui_setting?.thank_you?.close_btn?.text_family};
                    background-color: ${ui_setting?.thank_you?.close_btn?.bg_color};
                    color: ${ui_setting?.thank_you?.close_btn?.text_color};
                    display: ${(!closeBtnText || closeBtnText === undefined) ? 'none' : 'block'};`;

        var thank_you_title = document.getElementById("thank-you-title");
        thank_you_title.innerHTML =
            ui_setting ? .thank_you ? .header[`${bis_coll_locale}_text`];
        thank_you_title.style.cssText = `
                            font-size: ${ui_setting?.thank_you?.header?.text_size}px;
                            font-family: ${ui_setting?.thank_you?.header?.text_family};
                            color: ${ui_setting?.thank_you?.header?.text_color};`;
        // Thank you Sub Header
        var bis_model_sub_header = document.getElementById(
            "thank-you-description"
        );
        bis_model_sub_header.innerHTML = ui_setting.thank_you[`${bis_coll_locale}_text`];
        bis_model_sub_header.style.cssText = `
                    font-size: ${ui_setting.thank_you.text_size}px;
                    font-family: ${ui_setting.thank_you.text_family};
                    color: ${ui_setting.thank_you.text_color};`;
    }

    function popupFormSettingProduct(ui_setting) {
        is_enable_whatsApp = ui_setting ? .extra ? .whatsApp ? .is_enable == 1 ? true : false;
        is_enable_sms = ui_setting ? .extra ? .sms ? .is_enable == 1 ? true : false;
        is_enable_email = ui_setting.extra.form_settings.is_enable_email == 1 ? true : false;
        is_enable_name = ui_setting.extra.form_settings.is_enable_name == 1 ? true : false;
        is_requested_qty = ui_setting.extra.form_settings.is_requested_qty == 1 ? true : false;
        is_allowed_message = ui_setting.extra.form_settings.is_allowed_message == 1 ? true : false;
        show_product_image = ui_setting.extra.form_settings.show_product_image == 1 ? true : false;

        if (bis_current_template == "product" && ui_setting.show_variant == 0 && sizeField) {
            document.getElementById("selected_variant").value = "";
            sizeField.selectedIndex = 1;
            sizeField.style.cssText = `display: none !important;`;
        }

        if (!is_enable_whatsApp && !is_enable_sms && !is_enable_email) {
            checkboxGroup.classList.add('hide')
            emailField.classList.add("hide")
            mobileField.classList.add('hide')
        } else {
            const arr = [{
                    key: 'email',
                    value: is_enable_email
                },
                {
                    key: 'sms',
                    value: is_enable_sms
                },
                {
                    key: 'whatsApp',
                    value: is_enable_whatsApp
                },
            ]
            const enableCheckboxes = arr.filter((item) => item ? .value)
            // console.log("enableCheckboxes::::collection", enableCheckboxes)

            if (is_enable_email) {
                selectedCheckbox.push('email')
                emailCheckbox.checked = true
            } else {
                emailCheckboxDiv.classList.add('hide')
                emailField.classList.add("hide")
            }

            if (!is_enable_sms && !is_enable_whatsApp) {
                mobileField.classList.add('hide')
            }

            if (is_enable_sms) {
                selectedCheckbox.push('sms')
                smsCheckbox.checked = true
            } else smsCheckboxDiv.classList.add('hide')

            if (is_enable_whatsApp) {
                selectedCheckbox.push('whatsApp')
                whatsAppCheckbox.checked = true
            } else whatsAppCheckboxDiv.classList.add('hide')

            if (enableCheckboxes ? .length === 1) {
                switch (enableCheckboxes[0] ? .key) {
                    case 'email':
                        emailCheckboxDiv.classList.add('hide')
                        break;
                    case 'sms':
                        smsCheckboxDiv.classList.add('hide')
                        break;
                    case 'whatsApp':
                        whatsAppCheckboxDiv.classList.add('hide')
                        break;
                    default:
                        break;
                }
            }
        }

        if (is_enable_sms || is_enable_whatsApp) {
            iti = window.intlTelInput(mobileField, {
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.1.0/build/js/utils.js",
                initialCountry: bisShopCountry.toLowerCase(),
                // onlyCountries: countryList,
                separateDialCode: true,
            });
        }


        if (is_enable_name) {
            nameField.classList.remove('hide')
        } else {
            nameField.classList.add('hide')
        }

        if (is_requested_qty) {
            amountField.classList.remove("hide");
            amountField.classList.add("show");
        } else {
            amountField.classList.remove("show");
            amountField.classList.add("hide");
        }

        if (is_allowed_message) {
            customMessageField.classList.remove("hide");
            customMessageField.classList.add("show");
        } else {
            customMessageField.classList.remove("show");
            customMessageField.classList.add("hide");
        }
        if (!show_product_image) {
            if (productImgContainer) productImgContainer.classList.add("hide")
        }
    }

    // function createPoweredBy(element) {

    //     const poweredByImg = document.querySelector("#shopeetech_powered-by-img-input").value;

    //     const div = document.createElement("div");
    //     div.id = "shopeetech_powered-by";
    //     div.className = "notify-me_powered-by-btn center shopeetech_powered-by-hidden";

    //     const img = document.createElement("img");
    //     img.className = "shopeetech_powered-by-img";
    //     img.src = poweredByImg;
    //     img.alt = "";
    //     img.height = 22;
    //     img.width = 22;

    //     const p = document.createElement("p");
    //     p.className = "shopeetech_powered-by-text";

    //     const a = document.createElement("a");
    //     a.href = "https://panthercodx.com/";
    //     a.target = "_blank";
    //     a.textContent = "PantherCodX LLP";

    //     p.appendChild(document.createTextNode("Powered by "));
    //     p.appendChild(a);

    //     div.appendChild(img);
    //     div.appendChild(p);

    //     element.appendChild(div);
    // }

    function _collNotifyMeBtn(ui_setting) {
        let notifydiv = document.createElement("div");
        let notifyButton = document.createElement("button");
        notifyButton.setAttribute("class", "bis_ui_button");
        notifyButton.setAttribute("type", "button");
        notifyButton.innerHTML = ui_setting.notify_me[`${bis_coll_locale}_text`];
        notifyButton.style.cssText = `
                font-size: ${ui_setting.notify_me.text_size}px;
                font-family: ${ui_setting.notify_me.text_family};
                background-color: ${ui_setting.notify_me.bg_color};
                color: ${ui_setting.notify_me.text_color};`;
        notifydiv.attributes.class = "box-3";
        notifydiv.style.display = "block";
        notifydiv.setAttribute("class", "box-3 bis_template_" + bis_current_template);
        notifydiv.setAttribute("id", "bis_notify_me_btn");

        if (bis_current_template == "product") {
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");

            p1.setAttribute("id", "shopeetech_pre_order_before");
            p2.setAttribute("id", "shopeetech_restock_date_before");
            p3.setAttribute("id", "shopeetech_restock_date_after");

            p1.style.display = "none";
            p2.style.display = "none";
            p3.style.display = "none";

            notifydiv.appendChild(p1);
            notifydiv.appendChild(p2);
            notifydiv.appendChild(notifyButton);
            notifydiv.appendChild(p3);

            // Powered by 
            // createPoweredBy(notifydiv)
        } else {
            notifydiv.appendChild(notifyButton);
        }

        return {
            notifydiv: notifydiv,
            notifyButton: notifyButton
        };
    }

    var error_message = document.getElementById("error_message");


    window.onclick = function(event) {
        if (event.target == bis_modal) {
            bis_modal.style.display = "none";
        }
    };

    var is_enable_whatsApp = false;
    var is_enable_sms = false;
    var is_enable_email = false;
    var is_enable_name = false;
    var is_requested_qty = false;
    var is_allowed_message = false;

    var show_product_image = false;
    var selectedCheckbox = [];

    const bisFormContainer = document.getElementById("bis_container");
    const thankYouMessage = document.getElementById("thank-you-section");
    const requestMessage = document.getElementById("request-message");
    const cancelRequestMessage = document.getElementById(
        "cancel-request-message"
    );
    const cancelRequestBtn = document.getElementById("bis-cancel-request-btn");
    const cancelRequestBtnContainer = document.getElementById(
        "bis-cancel-request-btn-container"
    );
    const closeBtnContainer = document.getElementById(
        "bis-close-btn-container"
    );
    const submitButton = document.getElementById("submit-btn__bis");
    const nameField = document.getElementById("shopeetech-bis-popup-form-name");
    const emailField = document.getElementById(
        "shopeetech-bis-popup-form-email"
    );
    const mobileGP = document.getElementById("mobile-group");
    const mobileField = document.getElementById(
        "shopeetech-bis-popup-form-mobile"
    );
    const amountField = document.getElementById(
        "shopeetech-bis-popup-form-amount"
    );
    const customMessageField = document.getElementById("shopeetech-bis-popup-form-customMessage");
    const sizeField = document.getElementById("ap__variants");

    // checkboxes 
    const emailCheckbox = document.getElementById('bis_email_checkbox')
    const smsCheckbox = document.getElementById('bis_sms_checkbox')
    const whatsAppCheckbox = document.getElementById('bis_whatsApp_checkbox')

    const checkboxGroup = document.getElementById('bis_checkbox_grp')
    const emailCheckboxDiv = document.getElementById('bis_box_email')
    const smsCheckboxDiv = document.getElementById('bis_box_sms')
    const whatsAppCheckboxDiv = document.getElementById('bis_box_whatsApp')



    const nameFieldWarningElement = document.getElementById(
        "shopeetech-bis-form-name-warning"
    );
    const emailFieldWarningElement = document.getElementById(
        "shopeetech-bis-form-email-warning"
    );
    const mobileFieldWarningElement = document.getElementById(
        "shopeetech-bis-form-mobile-warning"
    );
    const sizeFieldWarningElement = document.getElementById(
        "shopeetech-bis-form-size-warning"
    );
    const customMessageFieldWarningElement = document.getElementById(
        "shopeetech-bis-form-custom-message-warning"
    );
    const productImgContainer = document.querySelector('.bis-product-img-container')
    const bisProductImg = document.querySelector('.bis-product-img')
    const spinner = document.getElementById("bis_spinner");
    var lastInsertId = "";

    const setProductImage = (event) => {
        let variantId = event ? .target ? .value
        if (variantId === 'default') {
            bisProductImg.setAttribute("src", bisShopifyProducts ? .featured_image)
        } else if (variantId) {
            let variantObj = bisShopifyProducts ? .variants ? .find((item) => item ? .id == variantId)
            if (variantObj) {
                bisProductImg.setAttribute("src", variantObj ? .featured_image ? .src)
            }
        } else {
            bisProductImg.setAttribute("src", bisShopifyProducts ? .featured_image)
        }
    }

    // function setPoweredBy(data, type = "") {
    //     console.log("Called powered by::::", data, type)
    //     const poweredByBtn = document.querySelector('#shopeetech_powered-by.notify-me_powered-by-btn')
    //     const poweredByModal = document.querySelector('#shopeetech_powered-by.notify-me_powered-by-modal')
    //     const poweredByThankYouModal = document.querySelector('#thank-you-section #shopeetech_powered-by.notify-me_powered-by-modal')
    //     if (data?.plan?.plan_id == 1) {
    //         if (poweredByBtn) poweredByBtn.classList.remove('shopeetech_powered-by-hidden');
    //         if (type === 'thank-you') {
    //             poweredByThankYouModal.classList.remove('shopeetech_powered-by-hidden');
    //         } else poweredByModal.classList.remove('shopeetech_powered-by-hidden');
    //     }
    // }

    window.addEventListener("load", (event) => {
        emailField.addEventListener("change", function() {
            validations(["email"]);
        });

        customMessageField.addEventListener("change", function() {
            validations(["customMessage"]);
        });

        nameField.addEventListener("change", function() {
            validations(["name"]);
        });

        mobileField.addEventListener("change", function() {
            validations(["mobile"]);
        });

        if (bis_current_template == "product" && sizeField) {
            sizeField.addEventListener("change", function(e) {
                validations(["size"]);
                setProductImage(e)
            });
        }

        submitButton.addEventListener("click", function() {
            var status = validations();
            if (status) {
                var email = emailField.value;
                storeStockNotification(email);
            }
        });
        // submitButton.setAttribute('disabled', true)
    });

    // Mobile Number Error
    const validMsg = document.querySelector("#valid-msg");
    const requireMobileNumber = document.querySelector(
        "#shopeetech-bis-form-mobile-warning"
    );
    const invalidNumber = document.querySelector(
        "#shopeetech-bis-form-invalid-number-warning"
    );
    const invalidCountryCode = document.querySelector(
        "#shopeetech-bis-form-invalid-country-code-warning"
    );
    const tooShort = document.querySelector(
        "#shopeetech-bis-form-too-short-warning"
    );
    const tooLong = document.querySelector(
        "#shopeetech-bis-form-too-long-warning"
    );
    const customMessagetooLong = document.querySelector(
        "#shopeetech-bis-form-too-long-custom-message-warning"
    );

    function getValidateKeys() {
        if (selectedCheckbox ? .length > 0) {
            const validateKeys = selectedCheckbox ? .map((item) => {
                if (item === 'sms' || item === 'whatsApp') return 'mobile'
                else return item
            })
            return validateKeys
        } else return []
    }

    const validate = () => {
        const validateKeys = getValidateKeys()
        validations(validateKeys);
    }

    const enableSubmitButton = () => {
        if (selectedCheckbox ? .length > 0) {
            submitButton.removeAttribute("disabled", "true");
        } else {
            submitButton.setAttribute("disabled", "true");
        }
    }

    const removeMobileErr = () => {
        validMsg.classList.add("hide");
        requireMobileNumber.classList.add("hide");
        invalidNumber.classList.add("hide");
        invalidCountryCode.classList.add("hide");
        tooShort.classList.add("hide");
        tooLong.classList.add("hide");
    }

    const removeEmailErr = () => {
        emailFieldWarningElement.classList.remove(
            "shopeetech-bis-form-warning"
        );
        emailFieldWarningElement.classList.add(
            "shopeetech-bis-form-hide-warning"
        );
    }

    const reset = (action = "") => {
        removeMobileErr()
        if (action !== 'close-modal') {
            //console.log("action called")
            // validate()
            validations(['mobile'])
        }
    };

    const showMobileError = (ErrorCode) => {
        switch (ErrorCode) {
            case 0:
                invalidNumber.classList.remove("hide");
                break;
            case 1:
                invalidCountryCode.classList.remove("hide");
                break;
            case 2:
                tooShort.classList.remove("hide");
                break;
            case 3:
                tooLong.classList.remove("hide");
                break;
            default:
                invalidNumber.classList.remove("hide");
                break;
        }
    };

    let mobileInputTimeout;
    // mobileField.addEventListener("change", () => validations(['mobile']));
    mobileField.addEventListener("keyup", () => {
        clearTimeout(mobileInputTimeout)
        mobileInputTimeout = setTimeout(() => {
            validations(['mobile'])
        }, 1000);
    });
    let emailInputTimeout;
    // emailField.addEventListener("change", () => validations(['email']));
    emailField.addEventListener("keyup", () => {
        clearTimeout(emailInputTimeout)
        emailInputTimeout = setTimeout(() => {
            validations(['email'])
        }, 1000);
    });

    let customMessageInputTimeout;
    customMessageField.addEventListener("keyup", () => {
        clearTimeout(customMessageInputTimeout)
        customMessageInputTimeout = setTimeout(() => {
            console.log("on customMessage validation::")
            validations(['customMessage'])
        }, 1000);
    });

    function validations(types = ["size", "name", "email", "mobile", "customMessage"]) {
        const Types = types ? .filter((item) => {
            if (item === "email") {
                return selectedCheckbox ? .includes('email');
            } else if (item === "mobile") {
                return (selectedCheckbox ? .includes('sms') || selectedCheckbox ? .includes('whatsApp'));
            } else if (item === "name") {
                if (is_enable_name) return true
                else return false
            } else return true;
        });
        var status = true;
        var emailStatus = true
        var mobileStatus = true

        Types.forEach(function(type) {
            switch (type) {
                case "size":
                    if (bis_current_template == "product") {
                        let nodeName = sizeField.nodeName;
                        //console.log("node name-------------", nodeName)
                        if (nodeName === "INPUT") {
                            var shopeetechBisPopUpFormsize =
                                sizeField.dataset.id;
                        } else {
                            var shopeetechBisPopUpFormsize = sizeField.value;
                        }

                        if (shopeetechBisPopUpFormsize === "default") {
                            sizeFieldWarningElement.classList.remove(
                                "shopeetech-bis-form-hide-warning"
                            );
                            sizeFieldWarningElement.classList.add(
                                "shopeetech-bis-form-warning"
                            );
                            submitButton.setAttribute("disabled", "true");
                            status = false;
                        } else {
                            sizeFieldWarningElement.classList.remove(
                                "shopeetech-bis-form-warning"
                            );
                            sizeFieldWarningElement.classList.add(
                                "shopeetech-bis-form-hide-warning"
                            );
                            submitButton.removeAttribute("disabled", "true");
                        }
                    }
                    break;
                case "name":
                    var name = nameField.value;
                    if (name === "") {
                        nameFieldWarningElement.classList.remove(
                            "shopeetech-bis-form-hide-warning"
                        );
                        nameFieldWarningElement.classList.add(
                            "shopeetech-bis-form-warning"
                        );
                        submitButton.setAttribute("disabled", "true");
                        status = false;
                    } else {
                        nameFieldWarningElement.classList.remove(
                            "shopeetech-bis-form-warning"
                        );
                        nameFieldWarningElement.classList.add(
                            "shopeetech-bis-form-hide-warning"
                        );
                        submitButton.removeAttribute("disabled", "true");
                    }
                    break;
                case "email":
                    var shopeetechBisPopUpFormEmail = emailField.value;
                    const emailPattern =
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/; // email simple pattern
                    if (!emailPattern.test(shopeetechBisPopUpFormEmail)) {
                        emailFieldWarningElement.classList.remove(
                            "shopeetech-bis-form-hide-warning"
                        );
                        emailFieldWarningElement.classList.add(
                            "shopeetech-bis-form-warning"
                        );
                        submitButton.setAttribute("disabled", "true");
                        emailStatus = false;
                    } else {
                        emailFieldWarningElement.classList.remove(
                            "shopeetech-bis-form-warning"
                        );
                        emailFieldWarningElement.classList.add(
                            "shopeetech-bis-form-hide-warning"
                        );
                        if (is_enable_email) submitButton.removeAttribute("disabled", "true");
                    }
                    break;

                case "mobile":
                    var mobileValue = mobileField.value;
                    if (!mobileValue) {
                        removeMobileErr()
                        mobileFieldWarningElement.classList.remove("hide");
                        validMsg.classList.add("hide");
                        submitButton.setAttribute("disabled", "true");
                        mobileStatus = false;
                    } else if (iti.isValidNumberPrecise()) {
                        removeMobileErr()
                        mobileFieldWarningElement.classList.add("hide");
                        validMsg.classList.remove("hide");
                        // if (is_enable_whatsApp || is_enable_sms) {
                        //     submitButton.removeAttribute("disabled", "true");
                        // }
                    } else {
                        const errorCode = iti.getValidationError();
                        removeMobileErr()
                        validMsg.classList.add("hide");
                        showMobileError(errorCode);
                        submitButton.setAttribute("disabled", "true");
                        mobileStatus = false;
                    }
                    break;

                case "customMessage":
                    var customMessageValue = customMessageField.value;

                    const suspiciousTagPattern = /<\s*script|<\s*iframe|<\s*object|<\s*embed|<\s*link|<\s*style/i;

                    if (customMessageValue.length > 250) {
                        customMessagetooLong.classList.remove(
                            "shopeetech-bis-form-hide-warning"
                        );
                        customMessagetooLong.classList.add(
                            "shopeetech-bis-form-warning"
                        );
                        submitButton.setAttribute("disabled", "true");
                        status = false;
                    } else if (suspiciousTagPattern.test(customMessageValue)) {

                        customMessageFieldWarningElement.classList.remove(
                            "shopeetech-bis-form-hide-warning"
                        );
                        customMessageFieldWarningElement.classList.add(
                            "shopeetech-bis-form-warning"
                        );
                        submitButton.setAttribute("disabled", "true");
                        status = false;

                    } else {
                        customMessageFieldWarningElement.classList.remove(
                            "shopeetech-bis-form-warning"
                        );
                        customMessageFieldWarningElement.classList.add(
                            "shopeetech-bis-form-hide-warning"
                        );
                        customMessagetooLong.classList.add("shopeetech-bis-form-hide-warning")
                        submitButton.removeAttribute("disabled", "true");
                    }
            }
        });

        if (selectedCheckbox ? .length > 0 && status) {
            if ((selectedCheckbox ? .includes('sms') || selectedCheckbox ? .includes('whatsApp')) && selectedCheckbox ? .includes('email')) {
                status = (mobileStatus && emailStatus)
            } else if (selectedCheckbox ? .includes('sms') || selectedCheckbox ? .includes('whatsApp')) {
                status = mobileStatus
            } else if (selectedCheckbox ? .includes('email')) {
                status = emailStatus
            }
        }
        // else status = false
        if (!status) submitButton.setAttribute("disabled", true);
        else submitButton.removeAttribute("disabled");

        return status;
    }

    function storeStockNotification(email) {
        let variant_id = document.getElementById("selected_variant").value;
        var product_id = document.getElementById("selected_product").value;
        var customer_id = document.getElementById("bis-customer") ? document.getElementById("bis-customer").innerText : "";
        var nameValue = nameField.value;
        var amount = document.getElementById(
            "shopeetech-bis-popup-form-amount"
        ).value;
        var customMessage = document.getElementById(
            "shopeetech-bis-popup-form-customMessage"
        ).value;
        let aPIEndPoint = `/apps/notify-me-bis/${shopifyDomain}/store`;
        //var aPIEndPoint = `https://bis.test/api/notify-me-tech/${shopifyDomain}/store`;
        //let aPIEndPoint = `${apiEndPoint}/${shopifyDomain}/bis/store`;
        error_message.classList.add("hide");

        spinner.removeAttribute("hidden");

        var data = {
            shopify_product_id: product_id,
            variant_id: variant_id,
            customer_id: customer_id,
            name: nameValue,
            requested_qty_amount: amount == "" ? 1 : amount,
            custom_message: customMessage,
            fun_type: 'notify_me'
        };


        if (selectedCheckbox ? .includes('email')) {
            data["email"] = email;
        }
        if (selectedCheckbox ? .includes('sms') || selectedCheckbox ? .includes('whatsApp')) {
            data["mobile_number"] = iti.getNumber();
            data["iso2"] = iti.getSelectedCountryData().iso2;
        }
        data['type'] = selectedCheckbox ? .join('_')
        const types = selectedCheckbox ? .map((item) => {
            if (item === 'sms') return 'mobile'
            else return item
        })
        data['type'] = types ? .join('_')
        data["locale"] = Shopify.locale;

        fetch(aPIEndPoint, {
                method: "post", // Default is 'get'
                mode: "cors",
                body: JSON.stringify(data),
                mode: "cors",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
            })
            .then(function(response) {
                if (response.status == 200) {
                    return response.json();
                } else {
                    document
                        .getElementById("success_message")
                        .classList.add("hide");
                    error_message.classList.remove("hide");
                }
            })
            .then(function(jsonResponse) {
                if (typeof jsonResponse != "undefined") {
                    lastInsertId = jsonResponse.data.lastInsertId;
                    //console.log("last inserted id-----------------", lastInsertId)
                    nameField.value = "";
                    emailField.value = "";
                    mobileField.value = "";
                    amountField.value = "";
                    customMessageField.value = "";
                    if (bis_current_template == "product") {
                        document.getElementById("ap__variants").value =
                            "default";
                    }

                    bisFormContainer.classList.remove("show");
                    bisFormContainer.classList.add("hide");
                    thankYouMessage.classList.remove("hide");
                    thankYouMessage.classList.add("show");
                    const obj = JSON.parse(document.getElementById('bis-configuration').textContent);
                    // setPoweredBy(obj, 'thank-you')
                }
                spinner.setAttribute("hidden", "");
                if (productImgContainer) productImgContainer.classList.add('hide')
            });
    }

    function bisCloseModal() {
        bis_modal.style.display = "none";

        nameField.value = "";
        emailField.value = "";
        mobileField.value = "";
        amountField.value = "";
        customMessageField.value = ""

        // document.getElementById('ap__variants').value = "default";

        lastInsertId = "";
        // VariantLabel.innerText = "";
        removeError('close-modal');
        document.getElementById("success_message").classList.remove("show");
        document.getElementById("success_message").classList.add("hide");
        // error_message.classList.add('hide');

        requestMessage.classList.remove("hide");
        requestMessage.classList.add("show");
        cancelRequestMessage.classList.remove("show");
        cancelRequestMessage.classList.add("hide");
        cancelRequestBtnContainer.classList.remove("hide");
        closeBtnContainer.classList.add("col-xs-6");
        closeBtnContainer.classList.remove("col-xs-12");

        bisFormContainer.classList.remove("hide");
        bisFormContainer.classList.add("show");
        thankYouMessage.classList.remove("show");
        thankYouMessage.classList.add("hide");

        // if (!EmailTab.classList.contains('active')) {
        //     EmailTab.classList.add('active')
        //     MobileTab.classList.remove('active')

        //     mobileGP.classList.add('hide')
        //     emailField.classList.remove('hide')
        // }

        // submitButton.setAttribute('disabled', true)

        // this function will only check which has permissions
        checkAll()

        if (ui_setting.show_variant == 0 && sizeField) {
            document.getElementById("selected_variant").value = "";
            sizeField.selectedIndex = 1;
            sizeField.style.cssText = `
            display: none !important;`;
        }
        bisShopCountry = Shopify.country.toLowerCase();
        if (is_enable_sms || is_enable_whatsApp)
            iti.setCountry(bisShopCountry);

        if (show_product_image) {
            if (productImgContainer.classList.contains('hide')) {
                productImgContainer.classList.remove('hide')
            }
        }
    }

    function cancelRequest() {
        var aPIEndPoint = `/apps/notify-me-bis/${shopifyDomain}/cancel-request`;

        var formData = new FormData();
        formData.append("lastInsertId", lastInsertId);
        formData.append("fun_type", 'notify_me');
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                lastInsertId = "";
                requestMessage.classList.remove("show");
                requestMessage.classList.add("hide");
                cancelRequestMessage.classList.remove("hide");
                cancelRequestMessage.classList.add("show");
                cancelRequestBtnContainer.classList.add("hide");
                closeBtnContainer.classList.remove("col-xs-6");
                closeBtnContainer.classList.add("col-xs-12");
            }
        };
        xhttp.open("POST", aPIEndPoint, true);
        xhttp.send(formData);
    }

    function setCookie(cname, cvalue) {
        var exdate = new Date();
        exdate.setHours(23);
        exdate.setMinutes(59);
        exdate.setSeconds(59);

        let expires = "expires=" + exdate;
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function handleKeyPress(e) {
        if (e.keyCode === 101 || e.keyCode === 45 || e.keyCode === 43) {
            e.preventDefault();
        }
    }

    function removeError(action) {
        if (sizeFieldWarningElement) {
            sizeFieldWarningElement.classList.remove(
                "shopeetech-bis-form-warning"
            );
            sizeFieldWarningElement.classList.add(
                "shopeetech-bis-form-hide-warning"
            );
        }

        nameFieldWarningElement.classList.remove("shopeetech-bis-form-warning");
        nameFieldWarningElement.classList.add(
            "shopeetech-bis-form-hide-warning"
        );
        emailFieldWarningElement.classList.remove(
            "shopeetech-bis-form-warning"
        );
        emailFieldWarningElement.classList.add(
            "shopeetech-bis-form-hide-warning"
        );
        mobileFieldWarningElement.classList.add("hide");
        error_message.classList.add("hide");
        submitButton.removeAttribute("disabled", "true");

        reset(action);
    }

    function uncheckAll() {
        const checkboxes = document.querySelectorAll('input[name="bis_twillio_checkbox"]')
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck each checkbox
        });
        selectedCheckbox = [];
    }

    function checkAll() {
        const checkboxes = document.querySelectorAll('input[name="bis_twillio_checkbox"]')
        selectedCheckbox = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.value === 'email' && is_enable_email) {
                checkbox.checked = true;
                if (!selectedCheckbox.includes(checkbox.value)) selectedCheckbox.push(checkbox.value)
                emailField.classList.remove('hide')
            } else if (checkbox.value === 'sms' && is_enable_sms) {
                checkbox.checked = true;
                if (!selectedCheckbox.includes(checkbox.value)) selectedCheckbox.push(checkbox.value)
                mobileGP.classList.remove('hide')
            } else if (checkbox.value === 'whatsApp' && is_enable_whatsApp) {
                checkbox.checked = true;
                if (!selectedCheckbox.includes(checkbox.value)) selectedCheckbox.push(checkbox.value)
                mobileGP.classList.remove('hide')
            } else {
                checkbox.checked = false;
            }
        });

    }

    var isMobileFieldVisible = false

    function handleCheckbox(key) {
        const checkboxes = document.querySelectorAll('input[name="bis_twillio_checkbox"]:checked');
        const checked = Array.from(checkboxes).map((checkbox) => checkbox.value);
        const duplicated = []
        selectedCheckbox = checked ? .filter((item) => {
            if (!duplicated ? .includes(item)) {
                duplicated.push(item)
                return true
            } else return false
        })
        // console.log("selected--checkboxes::", selectedCheckbox)
        enableSubmitButton()
        if (key === 'email') {
            if (selectedCheckbox ? .includes('email')) {
                emailField.classList.remove('hide')
            } else {
                emailField.classList.add('hide')
                removeEmailErr()
            }
        }

        if (key === 'sms' || key === 'whatsApp') {

            const shouldShowMobile = selectedCheckbox.includes('sms') || selectedCheckbox.includes('whatsApp');
            if (shouldShowMobile && !isMobileFieldVisible) {
                mobileGP.classList.remove('hide')
                isMobileFieldVisible = true;
            } else {
                if (is_enable_sms && is_enable_whatsApp) {
                    if (!shouldShowMobile && isMobileFieldVisible) {
                        mobileGP.classList.add('hide')
                        isMobileFieldVisible = false;
                        removeMobileErr()
                    }
                } else {
                    mobileGP.classList.add('hide')
                    isMobileFieldVisible = false;
                    removeMobileErr()
                }
            }
        }
    }
}