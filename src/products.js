const products = [{
        id: 1,
        name: "Keyboard",
        imgURL: "https://hnsfpau.imgix.net/5/images/detailed/114/72709.1.jpg?fit=fill&bg=0FFF&w=1500&h=844&auto=format,compress",
        price: "NZD 120"
    },
    {
        id: 2,
        name: "Mouse",
        imgURL: "https://resource.logitechg.com/w_659,c_limit,f_auto,q_auto:best,f_auto,dpr_2.0/content/dam/gaming/en/products/pro-mouse/promouse-hero.png?v=1",
        price: "NZD 80"

    },
    {
        id: 3,
        name: "Hard Drives",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/61Z%2BJULPRuL._SY450_.jpg",
        price: "NZD 180"
    },
    {
        id: 4,
        name: "Usb Drive",
        imgURL: "https://images-na.ssl-images-amazon.com/images/I/71QHcTfugcL._AC_SL1500_.jpg",
        price: "NZD 20"
    },
    {
        id: 5,
        name: "Laptops",
        imgURL: "https://cdn.shopify.com/s/files/1/0066/5688/4791/products/ScreenShot2020-10-09at4.17.59PM_480x480.png?v=1602213760",
        price: "NZD 3500"
    },
    {
        id: 6,
        name: "Headphones",
        imgURL: "https://cdn.shopify.com/s/files/1/0259/1975/0234/products/FP3805-beats_studio3_wireless_headphones_1024x.jpg?v=1588299383",
        price: "NZD 450"
    },
    {
        id: 7,
        name: "Projectors",
        imgURL:
            "https://i.pcmag.com/imagery/roundups/005eMPShdEvxrDcZYCY0Tim-4.jpg",
        price: "NZD 180"
      },
      {
        id: 8,
        name: "Extension Cables",
        imgURL:
            "https://cdn.shopify.com/s/files/1/1907/5887/products/Photograph_of_White_10_Meter_long_telephone_extension_cable_cord_Male_to_Female_phone_lead_10M_S5D9FXFMD39Y.png?v=1594499022",
        price: "NZD 25"
      },
      {
        id: 9,
        name: "Car Mobile Holder",
        imgURL:
            "https://cdn.shopify.com/s/files/1/0029/7572/7680/products/gcp1tvg9xyctwfdssnmb_1200x1200.jpg?v=1554692561",
        price: "NZD 40"
      },
      {
        id: 10,
        name: "Samsung Phones",
        imgURL:
            "https://images.samsung.com/is/image/samsung/nz-galaxy-s20-plus-5g-g986-bts-edition-sm-g986bzpdxnz-frontbpurple-292655778?$L2-Thumbnail$",
        price: "NZD 1100"
      },
      {
        id: 11,
        name: "Iphone",
        imgURL:
            "https://lh3.googleusercontent.com/proxy/V1GAkVEqJlU6pzOPuScMAvxuhm1BD-uaeRhETtuhJcqaBEbJvcIguJZF8-PzmMvwbF73zR5lX5O7qfJammgF0LpZZuHnkjmkm11n7VZ9SrNWol4lPg",
        price: "NZD 180"
      },
      {
        id: 12,
        name: "Monitors",
        imgURL:
            "data:image/jpeg;base64,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",
        price: "NZD 450"
      },
      

];

export default products;