// On répertorie les catégories dans la variable categories
const carte = [
    {
        category: "Burgers",
        sandwiches: [
            {
                name: "Big M", 
                composition: ["2 steaks 45 g", "cheddar"], 
                picture: "./img/menus/burgers/big_m.png",
                price_menu: 10.90,
                price: 6.90
            },
            {
                name: "Double cheese", 
                composition: ["2 steaks 45 g", "2 cheddar"],
                picture: "./img/menus/burgers/double_cheese.png", 
                price_menu: 9.90,
                price: 6.25
            },
            {
                name: "Cheese burger", 
                composition: ["1 steak 45 g", "cheddar"],
                picture: "./img/menus/burgers/cheese.png", 
                price_menu: 8.90,
                price: 5.50
            },
            {
                name: "Bacon burger", 
                composition: ["1 steak 90 g", "1 oeuf", "1 bacon", "cheddar"],
                picture: "./img/menus/burgers/bacon.png", 
                price_menu: 11.90,
                price: 7.90
            },
            {
                name: "Beef chicken", 
                composition: ["1 steak 45 g", "1 galette de chicken", "cheddar"],
                picture: "./img/menus/burgers/beef_chicken.png", 
                price_menu: 11.50,
                price: 7.50

            },
            {
                name: "Chicken burger", 
                composition: ["steak poulet pané", "cheddar"],
                picture: "./img/menus/burgers/chicken.png", 
                price_menu: 10.90,
                price: 7.10
            },
            {
                name: "Rostie burger", 
                composition: ["1 steak 90 g", "1 galette de pommes de terre", "cheddar"],
                picture: "./img/menus/burgers/rostie.png", 
                price_menu: 11.90,
                price: 7.90
            }, 
            {
                name: "French burger", 
                composition: ["1 steak 90 g", "crème de camembert"],
                picture: "./img/menus/rustik/french_burger.png", 
                price_menu: 11.90,
                price: 8.00
            },
            {
                name: "Chèvre burger", 
                composition: ["1 steak 90 g", "fromage de chèvre"],
                picture: "./img/menus/rustik/chevre_burger.png", 
                price_menu: 11.90,
                price: 8.00
            },
            {
                name: "Blue burger", 
                composition: ["1 steak 90 g", "crème de bleu"],
                picture: "./img/menus/rustik/blue_burger.png", 
                price_menu: 11.90,
                price: 8.00
            },
            {
                name: "Double Mega burger 360grs", 
                composition: ["2 steaks 180 g", "2 cheddar"],
                picture: "./img/menus/mega/double_mega_burger.png", 
                price_menu: 15.50,
                price: 13.90
            },
            {
                name: "Mega burger 180grs", 
                composition: ["1 steak 180 g", "2 cheddar"],
                picture: "./img/menus/mega/mega_burger180grs.png", 
                price_menu: 14.50,
                price: 12.90
            },           
        ]
    },
    {
        category: "Formules",
        sandwiches: [
            {
                name: "Duo 1", 
                composition: ["1 double cheese", "1 cheese burger"],
                picture: "./img/menus/burgers/duo_1.png", 
                price: 13.70
            },
            {
                name: "Duo 2", 
                composition: ["1 chicken burger", "1 cheese burger"],
                picture: "./img/menus/burgers/duo_2.png", 
                price: 13.70
            },
            {
                name: "Duo 3", 
                composition: ["1 croq Monsieur", "1 cheese burger"], 
                picture: "./img/menus/burgers/duo_3.png",
                price: 13.50
            },
            {
                name: "A1 - Chesse & Cheese",
                picture: "./img/menus/doubles/A1.png",  
                price: 12.50
            },
            {
                name: "A2 - Cheese & Double Cheese Bacon",
                picture: "./img/menus/doubles/A2.png",
                price: 13.80
            },
            {
                name: "A3 - Cheese & Big M",
                picture: "./img/menus/doubles/A3.png",
                price: 13.90
            },
            {
                name: "A4 - Cheese & Big Max",
                picture: "./img/menus/doubles/A4.png",
                price: 17.50
            },
            {
                name: "A5 - Cheese & Beef Chicken",
                picture: "./img/menus/doubles/A5.png",
                price: 15.80
            },
            {
                name: "A6 - Cheese & Chicken",
                picture: "./img/menus/doubles/A6.png",
                price: 13.80
            },
            {
                name: "A7 - Cheese & Croq Mr",
                picture: "./img/menus/doubles/A7.png",
                price: 12.80
            },
            {
                name: "A9 - Big M & Big M",
                picture: "./img/menus/doubles/A8.png",
                price: 16.70
            },
            {
                name: "A9 - Big M & Chicken",
                picture: "./img/menus/doubles/A9.png",
                composition: ["1 chicken burger", "1 cheese burger"], 
                price: 13.70
            },
            {
                name: "A10 - Big M & Beef Chicken", 
                composition: ["1 croq Monsieur", "1 cheese burger"],
                picture: "./img/menus/doubles/A10.png",
                price: 16.90
            },
        ]
    }, 
    {
        category: "Tacos",
        sandwiches: [
            {
                name: "Tacos simple",
                composition: "1 viande au choix",
                picture: "./img/menus/tacos/simple.png",  
                price: 13.90
            },
            {
                name: "Tacos double",
                composition: "2 viandes au choix",
                picture: "./img/menus/tacos/double.png",  
                price: 14.90
            },
            {
                name: "Tacos triple",
                composition: "3 viandes au choix",
                picture: "./img/menus/tacos/triple.png", 
                price: 15.90
            },
        ]
    },
    {
        category: "Sandwichs",
        sandwiches: [
            {
                name: "Grec", 
                composition: ["kebab"],
                picture: "./img/menus/sandwiches/grec.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken curry", 
                composition: ["Escalope de poulet mariné au curry", "cheddar"],
                picture: "./img/menus/sandwiches/chicken_curry.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Steak", 
                composition: ["2 steaks 45 g", "cheddar"],
                picture: "./img/menus/sandwiches/steak.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken tandoori", 
                composition: ["Escalope de poulet mariné au tandoori", "cheddar"],
                picture: "./img/menus/sandwiches/chicken_tandoori.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Chicken olives", 
                composition: ["Escalope de poulet", "olive verte", "cheddar"],
                picture: "./img/menus/sandwiches/chicken_olives.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Végétarien", 
                composition: ["Galette de pomme de terre", "oeuf", "cheddar"],
                picture: "./img/menus/sandwiches/vegetarien.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Suisse", 
                composition: ["Escalope de poulet", "emmental"],
                picture: "./img/menus/sandwiches/suisse.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Roll chicken", 
                composition: ["3 pièces tenders", "2 chedar"],
                picture: "./img/menus/sandwiches/roll_chicken.png", 
                price_menu: 12.90,
                price: 10.90
            },
            {
                name: "Mix boursin", 
                composition: ["Escalope de poulet", "1 steak 45 g", "boursin", "cheddar fondu"],
                picture: "./img/menus/xtrem/mix_boursin.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Triple X", 
                composition: ["3 steaks 45 g", "1 oeuf", "1 bacon", "2 cheddar"],
                picture: "./img/menus/xtrem/triple_x.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Ciabatta", 
                composition: ["Pain ciabatta", "4 steaks 45 g", "2 cheddar", "2 emmental"],
                picture: "./img/menus/xtrem/ciabatta.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "The best", 
                composition: ["100 g viande hachée maison", "1 galette de pomme de terre", "2 emmental"],
                picture: "./img/menus/xtrem/the_best.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Chormi X", 
                composition: ["3 steaks 45 g", "chorizo", "2 cheddar"],
                picture: "./img/menus/xtrem/chormi_x.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Salami X", 
                composition: ["3 steaks 45 g", "oeuf", "salami", "cheddar"],
                picture: "./img/menus/xtrem/salami_x.png", 
                price_menu: 13.90,
                price: 11.90
            },
            {
                name: "Fermière", 
                composition: ["1 escalope de poulet", "lardons de dinde fumée", "crème de camembert"], 
                picture: "./img/menus/xtrem/fermiere.png",
                price_menu: 13.90,
                price: 11.90
            },
        ]
    },
    {
        category: "Assiettes",
        sandwiches: [
            {
                name: "Grec", 
                composition: ["Viande de kebab"],
                picture: "./img/menus/assiettes/grec.png", 
                price: 15.90
            },
            {
                name: "Chicken curry", 
                composition: ["Escalope de poulet mariné au curry", "cheddar fondu"],
                picture: "./img/menus/assiettes/chicken_curry.png",
                price: 15.90
            },
            {
                name: "Chicken tandoori", 
                composition: ["Escalope de poulet mariné au tandoori", "cheddar fondu"],
                picture: "./img/menus/assiettes/chicken_tandoori.png",
                price: 15.90
            },
            {
                name: "Steak", 
                composition: ["Viande hachée maison 150 g", "cheddar fondu"],
                picture: "./img/menus/assiettes/steak.png",
                price: 15.90
            },
            {
                name: "Chicken olive", 
                composition: ["Escalope de poulet", "olives vertes", "cheddar fondu"],
                picture: "./img/menus/assiettes/chicken_olive.png",
                price: 15.90
            },
            {
                name: "Suisse", 
                composition: ["Escalope de poulet", "emmental fondu"],
                picture: "./img/menus/assiettes/suisse.png",
                price: 15.90
            },
        ]
    }, 
    {
        category: "Croqs & Paninis",
        sandwiches: [
            {
                name: "Croq Mr",
                picture: "./img/menus/croqs/croq_mr.png",  
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq Madame",
                picture: "./img/menus/croqs/croq_mme.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq chèvre",
                picture: "./img/menus/croqs/croq_chevre.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq boursin",
                picture: "./img/menus/croqs/croq_mr.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Croq viande hachée",
                picture: "./img/menus/croqs/croq_viande_hachee.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini viande hachée",
                picture: "./img/menus/paninis/viande_hachee.png",  
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini poulet",
                picture: "./img/menus/paninis/poulet.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini 3 fromages",
                picture: "./img/menus/paninis/3_fromages.png", 
                price_menu: 10.90,
                price: 7.90
            },
            {
                name: "Panini thon",
                picture: "./img/menus/paninis/thon.png", 
                price_menu: 10.90,
                price: 7.90
            },
        ]
    },
    {
        category: "Salades",
        sandwiches: [
            {
                name: "Salade César", 
                composition: ["salade", "tomates", "maïs", "olives", "poulet émincé"],
                picture: "./img/menus/salades/cesar.png",
                price: 9.90
            },
            {
                name: "Salade niçoise", 
                composition: ["Salade", "tomates", "maïs", "olives", "thon"],
                picture: "./img/menus/salades/nicoise.png",
                price: 9.90
            },
        ]
    },
    {
        category: "Frites & Tex Mex",
        sandwiches: [
            {
                name: "Frites", 
                composition: ["La barquette"],
                picture: "./img/menus/accompagnement/frites.png", 
                price: 4.90
            },
            {
                name: "Potatoes", 
                composition: ["La barquette"],
                picture: "./img/accompagnements/potatoes.png", 
                price: 4.90
            },
        ]
    }, 
    {
        category: "Desserts",
        sandwiches: [
            {
                name: "Tarte au daim", 
                composition: ["Part de tarte au chocolat et au daim"],
                picture: "./img/desserts/tarte_au_daim.png", 
                price: 4.90
            },
            {
                name: "Tiramisu", 
                composition: ["Dessert traditionnel de la cuisine italienne"],
                picture: "./img/desserts/tiramisu.png", 
                price: 4.90
            },
        ]
    },
    {
        category: "Boissons",
        sandwiches: [
            {
                name: "7up mojito", 
                composition: ["33 cl"],
                picture: "./img/boissons/7up_mojito.png",
                price: 2.50
            },
            {
                name: "Fanta exotic", 
                composition: ["33 cl"],
                picture: "./img/boissons/fanta_exotic.png",
                price: 2.50
            },
            {
                name: "Oasis tropical", 
                composition: ["33 cl"],
                picture: "./img/boissons/oasis_tropical.png", 
                price: 2.50
            },
            {
                name: "Coca-Cola", 
                composition: ["33 cl"], 
                picture: "./img/boissons/coca_cola.png",
                price: 2.50
            },
            {
                name: "Cristaline", 
                composition: ["33 cl"],
                picture: "./img/boissons/cristaline.png", 
                price: 2.50
            },
            {
                name: "Coca-Cola zéro sucres", 
                composition: ["33 cl"],
                picture: "./img/boissons/coca_cola_zero.png",
                price: 2.50
            },
            {
                name: "Coca-Cola cherry", 
                composition: ["33 cl"],
                picture: "./img/boissons/coca_cola_cherry.png", 
                price: 2.50
            },
            {
                name: "Ice tea", 
                composition: ["33 cl"],
                picture: "./img/boissons/ice_tea.png", 
                price: 2.50
            },
            {
                name: "Perrier", 
                composition: ["33 cl"],
                picture: "./img/boissons/perrier.png", 
                price: 2.50
            },
            {
                name: "Fanta orange", 
                composition: ["33 cl"],
                picture: "./img/boissons/fanta_orange.png",
                price: 2.50
            },
            {
                name: "Oasis pomme cassis", 
                composition: ["33 cl"],
                picture: "./img/boissons/oasis_pomme_cassis.png",
                price: 2.50
            },
            {
                name: "Tropico", 
                composition: ["33 cl"],
                picture: "./img/boissons/tropico.png",
                price: 2.50
            },
            {
                name: "Schweppes agrumes", 
                composition: ["33 cl"],
                picture: "./img/boissons/schweppes_agrume.png", 
                price: 2.50
            },
            {
                name: "Orangina", 
                composition: ["33 cl"],
                picture: "./img/boissons/orangina.png", 
                price: 2.50
            },
            {
                name: "Freez grenadine", 
                composition: ["275 ml"],
                picture: "./img/boissons/freez_grenadine.png", 
                price: 3.40
            },
        ]
    }
]

export default carte;